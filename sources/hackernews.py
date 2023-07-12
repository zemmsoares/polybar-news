import requests
import json
from config import number_news

def get_news():
    response = requests.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    story_ids = json.loads(response.text)[:number_news]
    stories = []
    print(response)

    for id in story_ids:
        response = requests.get(f'https://hacker-news.firebaseio.com/v0/item/{id}.json')
        story = json.loads(response.text)
        title = story.get('title', '')
        url = story.get('url', '')
        story_type = story.get('type', '')
        stories.append({'title': title, 'url': url, 'type': story_type})
        print(id)

    return stories
