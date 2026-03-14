build:
	docker build -t massage-landing .
run:
	docker run --rm --name massage-website -d -p 8080:80 massage-landing
stop:
	docker stop massage-website