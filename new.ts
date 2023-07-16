const obj = {
  metadata: {
    name: "nginx",
    namespace: "stackstorm",
    uid: "32b4a115-4995-4a44-bf5b-30c926b58a60",
    resourceVersion: "1316",
    creationTimestamp: "2023-07-16T06:12:54Z",
    labels: { run: "nginx" },
    managedFields: [
      {
        manager: "kubectl-run",
        operation: "Update",
        apiVersion: "v1",
        time: "2023-07-16T06:12:54Z",
        fieldsType: "FieldsV1",
        fieldsV1: {
          "f:metadata": { "f:labels": { ".": {}, "f:run": {} } },
          "f:spec": {
            "f:containers": {
              'k:{"name":"nginx"}': {
                ".": {},
                "f:image": {},
                "f:imagePullPolicy": {},
                "f:name": {},
                "f:resources": {},
                "f:terminationMessagePath": {},
                "f:terminationMessagePolicy": {},
              },
            },
            "f:dnsPolicy": {},
            "f:enableServiceLinks": {},
            "f:restartPolicy": {},
            "f:schedulerName": {},
            "f:securityContext": {},
            "f:terminationGracePeriodSeconds": {},
          },
        },
      },
      {
        manager: "kubelet",
        operation: "Update",
        apiVersion: "v1",
        time: "2023-07-16T06:12:57Z",
        fieldsType: "FieldsV1",
        fieldsV1: {
          "f:status": {
            "f:conditions": {
              'k:{"type":"ContainersReady"}': {
                ".": {},
                "f:lastProbeTime": {},
                "f:lastTransitionTime": {},
                "f:status": {},
                "f:type": {},
              },
              'k:{"type":"Initialized"}': {
                ".": {},
                "f:lastProbeTime": {},
                "f:lastTransitionTime": {},
                "f:status": {},
                "f:type": {},
              },
              'k:{"type":"Ready"}': {
                ".": {},
                "f:lastProbeTime": {},
                "f:lastTransitionTime": {},
                "f:status": {},
                "f:type": {},
              },
            },
            "f:containerStatuses": {},
            "f:hostIP": {},
            "f:phase": {},
            "f:podIP": {},
            "f:podIPs": {
              ".": {},
              'k:{"ip":"172.17.0.5"}': { ".": {}, "f:ip": {} },
            },
            "f:startTime": {},
          },
        },
        subresource: "status",
      },
    ],
  },
  spec: {
    volumes: [
      {
        name: "kube-api-access-z7bw5",
        projected: {
          sources: [
            { serviceAccountToken: { expirationSeconds: 3607, path: "token" } },
            {
              configMap: {
                name: "kube-root-ca.crt",
                items: [{ key: "ca.crt", path: "ca.crt" }],
              },
            },
            {
              downwardAPI: {
                items: [
                  {
                    path: "namespace",
                    fieldRef: {
                      apiVersion: "v1",
                      fieldPath: "metadata.namespace",
                    },
                  },
                ],
              },
            },
          ],
          defaultMode: 420,
        },
      },
    ],
    containers: [
      {
        name: "nginx",
        image: "nginx",
        resources: {},
        volumeMounts: [
          {
            name: "kube-api-access-z7bw5",
            readOnly: true,
            mountPath: "/var/run/secrets/kubernetes.io/serviceaccount",
          },
        ],
        terminationMessagePath: "/dev/termination-log",
        terminationMessagePolicy: "File",
        imagePullPolicy: "Always",
      },
    ],
    restartPolicy: "Never",
    terminationGracePeriodSeconds: 30,
    dnsPolicy: "ClusterFirst",
    serviceAccountName: "default",
    serviceAccount: "default",
    nodeName: "minikube",
    securityContext: {},
    schedulerName: "default-scheduler",
    tolerations: [
      {
        key: "node.kubernetes.io/not-ready",
        operator: "Exists",
        effect: "NoExecute",
        tolerationSeconds: 300,
      },
      {
        key: "node.kubernetes.io/unreachable",
        operator: "Exists",
        effect: "NoExecute",
        tolerationSeconds: 300,
      },
    ],
    priority: 0,
    enableServiceLinks: true,
    preemptionPolicy: "PreemptLowerPriority",
  },
  status: {
    phase: "Running",
    conditions: [
      {
        type: "Initialized",
        status: "True",
        lastProbeTime: null,
        lastTransitionTime: "2023-07-16T06:12:54Z",
      },
      {
        type: "Ready",
        status: "True",
        lastProbeTime: null,
        lastTransitionTime: "2023-07-16T06:12:57Z",
      },
      {
        type: "ContainersReady",
        status: "True",
        lastProbeTime: null,
        lastTransitionTime: "2023-07-16T06:12:57Z",
      },
      {
        type: "PodScheduled",
        status: "True",
        lastProbeTime: null,
        lastTransitionTime: "2023-07-16T06:12:54Z",
      },
    ],
    hostIP: "192.168.49.2",
    podIP: "172.17.0.5",
    podIPs: [{ ip: "172.17.0.5" }],
    startTime: "2023-07-16T06:12:54Z",
    containerStatuses: [
      {
        name: "nginx",
        state: { running: { startedAt: "2023-07-16T06:12:57Z" } },
        lastState: {},
        ready: true,
        restartCount: 0,
        image: "nginx:latest",
        imageID:
          "docker-pullable://nginx@sha256:08bc36ad52474e528cc1ea3426b5e3f4bad8a130318e3140d6cfe29c8892c7ef",
        containerID:
          "docker://5bdcc0c6a6b94c36dc0c8eaff67e95219451f8b50f8643fce7d06fd43f295597",
        started: true,
      },
    ],
    qosClass: "BestEffort",
  },
};
