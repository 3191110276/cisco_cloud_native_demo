FROM python:3.9-slim

WORKDIR /code

COPY . .

RUN pip install -r requirements.txt

EXPOSE 80

ENTRYPOINT ["gunicorn", "--config gunicorn_config.py", "app.wsgi:app"]
