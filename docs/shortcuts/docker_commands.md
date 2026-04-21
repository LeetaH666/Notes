# Docker 命令

## Docker

- `docker pull imageName:tag`：从 Docker Hub 拉取镜像，其中 `imageName` 是镜像名称，`tag` 是标签，可以省略默认为 `latest`；
- `docker run -d --name containerName imageName:tag`：运行一个新的容器，其中 `containerName` 是容器名称，`imageName:tag` 是要运行的镜像和标签；
- `docker images`：查看本地的镜像；
- `docker ps`：查看正在运行的容器；
- `docker logs -f containerName`：查看容器日志，其中 `containerName` 是容器名称，`-f` 参数表示持续输出日志；
- `docker rm containerName -f`：强制删除一个容器；
- `docker rmi imageID`：删除一个镜像，其中 `imageID` 是镜像 ID，可以通过 `docker images` 命令查看；

    > [!TIP|label:提示]
    > 也可以通过 `docker rmi imageName:tag` 来删除镜像，其中 `imageName:tag` 是镜像名称和标签，比如 `vllm/vllm-openai:latest`。但更推荐用镜像 ID 来删除。

- `docker exec containerName command`：在正在运行的容器中执行命令，其中 `containerName` 是容器名称，`command` 是要执行的命令；
  
    > [!TIP|label:提示]
    > 比如使用 nginx 的热重启，可以执行 `docker exec nginxContainerName nginx -s reload` 来让 nginx 重新加载配置文件，而不需要重启容器，其中 `nginxContainerName` 是 nginx 容器的名称。

## Docker Compose

- `docker compose up -d`：在当前目录下根据 `compose.yaml` 文件启动服务，`-d` 参数表示后台运行；

    > [!TIP|label:提示]
    > 配置文件的名称可以是 `compose` 或者 `docker-compose`，后缀可以是 `.yaml` 或者 `.yml`。如果使用了非默认的配置文件名称，可以通过 `-f` 参数指定配置文件，比如 `docker compose -f my-compose.yaml up -d`。

- `docker compose ps`：查看正在运行的服务；
- `docker compose logs -f (serviceName)`：查看服务日志，其中 `serviceName` 是服务名称（如果未指定服务名称，则查看所有服务的日志），`-f` 参数表示持续输出日志；
- `docker compose stop`：停止服务；
- `docker compose down`：停止并删除服务；

## Docker Network

> [!NOTE|label:注意]
> 如果需要让多个容器之间进行通信，可以使用 Docker 网络来连接它们。通常是提前创建一个 Docker 网络，然后在运行容器时指定使用该网络，这样容器就可以通过网络名称来互相访问了。服务器重启后，Docker 网络会自动恢复，不需要重新创建。

- `docker network create networkName`：创建一个新的 Docker 网络，其中 `networkName` 是网络名称；
- `docker network ls`：查看有哪些 Docker 网络；

    > [!TIP|label:提示]
    > Docker 网络有三种类型：`bridge`（默认）、`host` 和 `none`。其中 `bridge` 是最常用的网络类型，适用于大多数场景；`host` 让容器直接使用宿主机的网络，适用于需要高性能网络通信的场景；`none` 则不为容器分配任何网络接口，适用于完全隔离的场景。