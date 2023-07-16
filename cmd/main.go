package main

import (
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"path/filepath"

	"github.com/aimenhamed/k8s-tool/pkg/types"
	"github.com/aimenhamed/k8s-tool/pkg/utils"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
	"k8s.io/client-go/tools/clientcmd"
	"k8s.io/client-go/util/homedir"
)

func main() {
	var kubeconfig *string
	if home := homedir.HomeDir(); home != "" {
		kubeconfig = flag.String("kubeconfig", filepath.Join(home, ".kube", "config"), "(optional) absolute path to the kubeconfig file")
	} else {
		kubeconfig = flag.String("kubeconfig", "", "absolute path to the kubeconfig file")
	}
	flag.Parse()

	// use the current context in kubeconfig
	config, err := clientcmd.BuildConfigFromFlags("", *kubeconfig)
	if err != nil {
		panic(err.Error())
	}

	// create the clientset
	clientset, err := kubernetes.NewForConfig(config)
	if err != nil {
		panic(err.Error())
	}

	namespaces := []string{"platform", "shared", "stackstorm"}
	for _, namespace := range namespaces {
		pods, err := clientset.CoreV1().Pods(namespace).List(context.TODO(), metav1.ListOptions{})
		if err != nil {
			panic(err.Error())
		}
		fmt.Printf("There are %d pods in the %s\n", len(pods.Items), namespace)
		for i, pod := range pods.Items {
			fmt.Printf("pod %d: %v\n", i, pod.Name)
			_, err := json.Marshal(pod)
			if err != nil {
				panic(err.Error())
			}
			podInfo := &types.PodInfo{Name: pod.Name, Created: pod.GetCreationTimestamp()}
			utils.AddAge(podInfo)
			fmt.Printf("Pod Info: %+v\n\n\n\n", podInfo)
		}
	}
}
