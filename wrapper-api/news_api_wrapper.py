# thanks to grant winney's tutorial: https://grantwinney.com/what-is-an-api-wrapper-and-how-do-i-write-one/

import requests
import json
import flask
from flask import request, jsonify
from flask_cors import CORS

API_KEY = os.environ['API_KEY']
app = flask.Flask(__name__)
app.config['DEBUG'] = True
cors = CORS(app)

@app.route('/v1/search', methods = ['GET'])
def __call_api():
    if 'q' in request.args:
        searchValue = str(request.args.get('q'))
    else:
        return "No search term proivided. Please provide search term."

    response = requests.get('https://newsapi.org/v2/everything?sortBy=popularityapiKey='+ API_KEY +'&&q='+ searchValue)
    if response.status_code == 200:
        return(response.content)
    else:
        return(response.status_code)

app.run()
