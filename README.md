# K8s-Status-Dashboard

K8s-Status-Dashboard is a reporting system used as part of monitoring Kubernetes Clusters.

K8s-Status-Dashboard collects and dynamically reports on the status of the health of a cluster as well as various resources such as components (scheduler, controller-manager, etcd), nodes and namespaces.

K8s-Status-Dashboard is light weight and does not require a data-store but can be easily integrated with a database if necessary. 

## Pre-requisites 

- `kubectl`: This is the cli for controlling the Kubernetes cluster. See [here](https://kubernetes.io/docs/user-guide/prereqs/).
- `docker`: Some steps require commands to be run inside a docker container. Installation instructions can be found [here](https://docs.docker.com/engine/installation/).
- `node`: Some steps require commands to be run inside a docker container. Binaries can be found [here](https://nodejs.org/en/download/package-manager/). Installation instructions can be found [here](https://nodejs.org/en/download/).
- `helm`:  This is used to deploy the K8s-Status-Dashboard via helm (aka helm charts) into a cluster. See [here](https://github.com/kubernetes/helm/blob/master/docs/install.md).
- `auth0`: Authentication requires auth0. Create an account for free. See [here](https://auth0.com/signup).

**NOTE:** Make sure you are using the context you want to deploy to.
## Running K8s-Status-Dashboard on Kubernetes

K8s-Status-Dashboard can run on a Kubernetes cluster. This is useful and effective when wanting to monitor more than one cluster.

    To run K8s-Status-Dashboard on a Kubernetes cluster using helm:

    ```
    $ git clone https://github.com/sociallocket/k8s-status-dashboard.git
    $ docker pull sociallocket/k8s-status-dashboard:latest
    $ cd k8s-status-dashboard
    $ populate <name>, <base64-encoded-crt>, <base64-encoded-key>, <auth0-client-id> and <auth0-secret> in manifests/secrets.template.yaml
    $ kubectl create -f manifests/secrets.template.yaml --namespace=k8s-dashboard-green
    ```
**NOTE:** Configure helm values by setting properties at runtime;

- `cluster`: `<cluster-name>`
- `namespace`: `<namespace-name>`
- `config`:
-   `host`: `<host-name>`

- `image`:
- `dockerImage`: `<repository>/<dockerImage-name>`
- `dockerTag`: `<version>`
- `dockerPort`: `<port>`
- `pullSecret`: `<pull-secret-name>`
- `ingress`
-   `name`: `<ingress-name>`

    ```
    $ helm upgrade k8s-status-dashboard --install "./manifests/helm/k8s-status-dashboard" --set cluster=<cluster-name> --set namespace=<namespace-name> --set config.host=<host-name> --set config.auth0Domain=<auth0-domain> --set config.auth0CallbackUrl=<auth0-callbacl-url> --set dockerImage=<docker-image> --set dockerTag=<docker-image-tag>  --set dockerPort=<docker-port> --set image.pullSecret=<pull-secret-name>  --set ingress.name=<ingress-name>
    ```

## Running K8s-Status-Dashboard Locally

K8s-Status-Dashboard can run locally.

    To run K8s-Status-Dashboard locally:

    ```
    $ git clone https://github.com/sociallocket/k8s-status-dashboard.git 
    $ cd k8s-status-dashboard/app/src/public       
    $ npm i
    $ cd k8s-status-dashboard/app
    $ npm i
    $ bash local-dev/exec-local.sh
    $ node server.js
    ```
`Go to localhost (http://127.0.0.1) in a browser of your choice`

**NOTE:** COMING SOON
## Running K8s-Status-Dashboard Using Docker

K8s-Status-Dashboard can be run using docker.
    
    To run K8s-Status-Dashboard using docker:

    ```
    $ git clone https://github.com/sociallocket/k8s-status-dashboard.git 
    $ git checkout docker-k8s-status-dashboard
    $ cd k8s-status-dashboard  
    ```
- Configure environmental variables in local-dev/exec.sh to suit your environment.
    
    ```
    $ bash local-dev/exec.sh
    ```    

`Go to localhost (http://127.0.0.1) in a browser of your choice`

Environment variables
---------------------------------

The image recognizes the following environment variables that you can set during
initialization by passing `-e VAR=VALUE` to the Docker run command.

|    Variable name          |    Description                              |
| :------------------------ | -----------------------------------------   |
|  `CLIENT_KEY`       | Client Key used as part of authenticating against a Kubernetes cluster.            |
| `CLIENT_CRT` | Client Cert as part of authenticating against a Kubernetes cluster. |
| `HOST` | Kubernetes Host used for master. **NOTE:** Can be retrieved using kubectl cluster-info | https://auth0.com/docs/client-auth/current/client-side-web
| `AUTH0_CLIENT_ID`         | Client ID used as part of authenticating against Auth0. See [here](https://auth0.com/docs/client-auth/current/client-side-web) |
|  `AUTH0_DOMAIN`       | Domain used as part of authenticating against Auth0. See [here](https://auth0.com/docs/custom-domains) |
|  `AUTH0_CALLBACK_URL`       | Redirect a user back to k8s-status-dashboard using Callback URL. See [here](https://auth0.com/docs/client-auth/current/client-side-web) |
|  `AUTH0_SECRET`       | Secret used as part of authenticating against Auth0. See [here](https://auth0.com/docs/clients/how-to-rotate-client-secret) |
|  `AUDIENCE`       | Port used to run k8s-status-dashboard. See [here](https://auth0.com/docs/client-auth/current/client-side-web) |
|  `PORT`       | Port used to run k8s-status-dashboard  |

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program] is coming SOON.

## Author

Sociallocket

## Contact

[Contact Sociallocket](officialsociallocket@gmail.com)

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/sociallocket/k8s-status-dashboard/app/LICENSE.txt) file for more info.


