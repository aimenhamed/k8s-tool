package types

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type PodInfo struct {
	Name    string
	Created metav1.Time
	Age     string
}
