FROM node:18.4-slim

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 80

ENTRYPOINT ["node", "./index.js", "80", "--require", "tracing.js"]
