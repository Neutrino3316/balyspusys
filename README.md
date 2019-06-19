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

# 负载均衡

如果可以访问到<http://172.18.35.126/balyspusys/assets/js/jump.js>，就把链接中的host从neutrino3316.github.io替换到172.18.35.126

