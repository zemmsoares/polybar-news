import requests
import json
from config import api_key, sources, country, number_news

def get_news():
    data = requests.get('https://newsapi.org/v2/top-headlines?apiKey=' + api_key + '&sources=' + sources + '&country=' + country).json()

    news_data = []

    for x in range(number_news):
        sourceName = data['articles'][x]['source']['name']
        title = data['articles'][x]['title']
        url = data['articles'][x]['url']
        news_data.append({'source': sourceName, 'title': title, 'url': url})
        
    return news_data