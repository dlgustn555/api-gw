#!/usr/bin/env sh

git pull

read -p "도커이미지 태그: " IMAGE_TAG

echo "==========> 입력된 도커이미지 태그: $IMAGE_TAG"

docker build -t dlgustn555/api-gw:$IMAGE_TAG .
docker push dlgustn555/api-gw:$IMAGE_TAG

helm uninstall api-gw

helm install api-gw ./n2c --set IMAGE_TAG=$IMAGE_TAG