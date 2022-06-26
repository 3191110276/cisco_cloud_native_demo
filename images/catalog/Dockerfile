#FROM python:3.9-slim
FROM node:18.4-slim

WORKDIR /code

COPY . .

#RUN pip install -r requirements.txt
RUN npm install

#RUN telescope-bootstrap

EXPOSE 80

RUN chmod 744 ./startup.sh

ENTRYPOINT ["./startup.sh"]
