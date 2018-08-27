build:
	webpack --mode production

build-docker:
	docker build . -t react-webpack-starter

run-docker:
	docker run -t -i -p 8080:8080 -v rws:/app react-webpack-starter:latest
