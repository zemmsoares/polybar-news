#!/usr/bin/python

import requests
import os.path
import json
from config import api_key,sources,country

save_path = os.path.dirname(os.path.realpath(__file__))
number_news = 3

try:
    data = requests.get('https://newsapi.org/v2/top-headlines?apiKey='+api_key+'&sources='+sources+'&country='+country).json()

    news_data = []

    for x in range(number_news):
        sourceName = data['articles'][x]['source']['name']
        title = data['articles'][x]['title']
        url = data['articles'][x]['url']
        news_data.append({'source': sourceName, 'title': title, 'url': url})

    # Save news data along with an index for cycling through articles
    path = os.path.join(save_path,"articles.json")         
    with open(path, "w") as f:
        json.dump({'index': 0, 'articles': news_data}, f)

except requests.exceptions.RequestException as e:
    print ('Something went wrong!')