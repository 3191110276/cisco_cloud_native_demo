FROM python:3.9-slim

WORKDIR /code

COPY . .

RUN pip install -r requirements.txt

RUN telescope-bootstrap

EXPOSE 80

RUN chmod 744 ./startup.sh

ENTRYPOINT ["./startup.sh"]
