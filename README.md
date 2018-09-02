# hello-world-koa2-handlebars
Hello world example using Koa 2 with handlebars templates

## Clone this repository
```
git clone https://github.com/briantanseng/hello-world-koa2-handlebars.git
cd hello-world-koa2-handlebars
```

## Download dependencies
```
npm install
```
Tested on node v8.11.4, npm 5.6.0

## Start the application
```
npm start
```
You should see the following message ```Server running on 3000```

Browse to [http://localhost:3000](http://localhost:3000) to verify that your page is running.

## Dockerize the application
```
docker build -t hello-world-koa2-handlebars .
```
The tag given was ```hello-world-koa2-handlebars```. Feel free to change the tag.

## Run the application using Docker
```
docker run -it --rm \
-p 3000:3000 \
--name hello-koa2 \
hello-world-koa2-handlebars
```

## Stop the running Docker application
```
docker stop hello-koa2
```

## Clean-up 
Check the installed docker images
```
docker images
```

Remove the image to reclaim disk space.
```
docker rmi hello-world-koa2-handlebars
```

