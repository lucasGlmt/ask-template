docker pull --platform linux/x86_64 mysql:5.7
docker create --name database MYSQL_DATABASE=username -e MYSQL_USER=username -e MYSQL_PASSWORD=password -e MYSQL_RANDOM_ROOT_PASSWORD=random m
ysql:5.7