@echo off
echo 启动 Keycloak Guardians 所有服务...

echo 1. 启动 Keycloak 服务器...
start docker-compose up

echo 等待 Keycloak 启动...
timeout /t 10

echo 2. 启动前端开发服务器...
cd frontend
start npm run dev

echo 所有服务正在启动中...
echo - Keycloak: http://localhost:8080
echo - 前端应用: http://localhost:3000
echo.
echo 请等待服务完全启动后访问上述地址。
pause