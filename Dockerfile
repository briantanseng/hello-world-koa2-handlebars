FROM node:8.11.4-alpine

WORKDIR /app
COPY app.js /app
COPY index.html /app
COPY package.json /app

RUN npm install --production
EXPOSE 80

CMD ["node", "app.js"]
