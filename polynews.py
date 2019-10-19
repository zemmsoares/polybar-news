#!/usr/bin/python

import requests

#get your api key at https://newsapi.org/

api_key = "YOUR_API_KEY"

#find sources & country codes at https://newsapi.org/sources

sources = "ign,news24"
country = ""

try:
    data = requests.get('https://newsapi.org/v2/top-headlines?apiKey='+api_key+'&sources='+sources+'&country='+country).json()

    sourceName = data['articles'][0]['source']['name']
    title = data['articles'][0]['title']
    url = data['articles'][0]['url']

    print(sourceName+': '+title)
 
except requests.exceptions.RequestException as e:
    print ('Something went wrong!')

