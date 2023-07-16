package utils

import (
	"github.com/aimenhamed/k8s-tool/pkg/types"
	"time"
)

func AddAge(podInfo *types.PodInfo) {
	currentTime := time.Now()
	age := currentTime.Sub(podInfo.Created.Time).Round(time.Second)
	podInfo.Age = age.String()
}
