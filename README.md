[TOC]

# 项目说明

实验室指南

# docker

在本地的docker部署jekyll方法

有三个可选用的镜像

- <https://github.com/BretFisher/jekyll-serve>
- <https://github.com/Starefossen/docker-github-pages>
- <https://github.com/envygeeks/jekyll-docker>

这里使用的是[BretFisher/jekyll-serve](https://github.com/BretFisher/jekyll-serve)

```bash
docker run --name docker_balyspusys -t -p 4001:4000 -v e:/Study/CS/GitHub/balyspusys:/site bretfisher/jekyll-serve
```


