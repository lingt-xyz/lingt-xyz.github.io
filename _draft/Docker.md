---
---

Notes for docker command.

<!--more-->

## Images

- List all images: `$ docker images`

- Pull image from docker repo: `$ docker pull ubuntu:18.04`

- Create and run a container of an image in an interactive way: `$ docker run -it ubuntu:18.04`

- Create a *new* image from a container’s changes: `$ docker commit $CONTAINER [REPOSITORY[:TAG]]`

---

## Containers

- List all containers: `$ docker ps -a`

- Remove a container: `$ docker rm $CONTAINER`

---

## Docker hub

- Push image to repo: `$ docker push <hub-user>/<repo-name>:<tag>`

## Host and Container

- Copy from container to host: `$ docker cp <containerId>:/file/path/within/container /host/path/target`

- Copy from host to container: `$ docker cp /host/path/target <containerId>:/file/path/within/container`

---

## Commit

`$ docker commit -m $message$ <containerId> <repo-name>:<tag>`

---

## CLI reference

[Reference](https://docs.docker.com/v17.12/edge/engine/reference/commandline/run/)

`$ docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`

- `--detach, -d`: Run container in background and print container ID

- `--env, -`: Set environment variables

- `--interactive, -i`: Keep STDIN open even if not attached

- `--name`:	Assign a name to the container

- `--net, --network`: Connect a container to a network

- `--rm`: Automatically remove the container when it exits

- `--tty, -t`: Allocate a pseudo-TTy

- `--volume, -v`: Bind mount a volume


---

## Errors

- Unable to remove repository reference

```console
Error response from daemon: conflict: unable to remove repository reference "$TAG/$NAME" (must force) - container 0bd2b54678c7 is using its referenced image 54bb4e8718e8
Error: failed to remove images: [$TAG/$NAME]
```


- [Solution](https://stackoverflow.com/questions/33907835/docker-error-cannot-delete-docker-container-conflict-unable-to-remove-reposito)


```console
$ docker ps -a               # Lists containers (and tells you which images they are spun from)
$ docker images              # Lists images  
$ docker rm <container_id>   # Removes a container

$ docker rmi <image_id>      # Removes an image 
                            # Will fail if there is a running instance of that image i.e. container

$ docker rmi -f <image_id>   # Forces removal of image even if it is referenced in multiple repositories, 
                            # i.e. same image id given multiple names/tags 
                            # Will still fail if there is a docker container referencing image
```

---

## References

[commit](https://docs.docker.com/engine/reference/commandline/commit/)

