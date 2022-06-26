from flask import Flask, request
import json
import requests
import logging
import sys
import os


from cisco_telescope import tracing
tracing.init(
  service_name="asdf",
  cisco_token="os.getenv('TELESCOPE_TOKEN')"
)


app = Flask(__name__)

logging.basicConfig(
    format='%(asctime)s %(levelname)-8s %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    stream=sys.stdout,
    level=logging.INFO
)


def load_env_file(name):
    with open("/etc/customization/{}".format(name), "r") as f:
        return f.read()


@app.route("/", methods = ['GET'])
def get_catalog():
    catalog = [{
        'id': 1,
        'name': 'product1',
        'price': '15.55'
    },{
        'id': 2,
        'name': 'product2',
        'price': '12.89'
    }]

    return json.dumps(catalog)


# ROUTE FOR HEALTH CHECK
@app.route("/healthz")
def health():
    return "ok"


if __name__ == '__main__':
    app.run(host='0.0.0.0')
