#!/bin/bash

#gunicorn --config gunicorn_config.py app.wsgi:app

node -r ./tracing.js index.js
