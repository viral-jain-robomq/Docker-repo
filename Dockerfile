From node:alpine
copy . /app
workdir /app
EXPOSE 8080
cmd node app.js
