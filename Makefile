.PHONY: deploy clean

deploy:
	docker build --no-cache -t portfolio:latest . && \
	docker run -dit --name ajm -p 5665:80 portfolio:latest

clean:
	docker stop ajm && \
	docker rm ajm