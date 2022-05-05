#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
# yarn run build

# cd 到构建输出的目录下
# cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

# git init
git add .
git commit -m '优化'
git remote add origin git@github.com:changyulong1/CanMove.git

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f origin master

cd -