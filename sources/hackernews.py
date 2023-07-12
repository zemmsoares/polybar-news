import requests
import json
from config import number_news

def get_news():
    response = requests.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    story_ids = json.loads(response.text)[:number_news]
    stories = []

    type_name_mapping = {
        'story': 'Story',
        'comment': 'Comment',
        'poll': 'Poll',
        'job': 'Job',
        'pollopt': 'Poll Option'
    }

    for id in story_ids:
        response = requests.get(f'https://hacker-news.firebaseio.com/v0/item/{id}.json')
        story = json.loads(response.text)
        title = story.get('title', '')
        url = story.get('url', '')
        story_type = type_name_mapping.get(story.get('type', ''), '').title()
        stories.append({'title': title, 'url': url, 'type': story_type})

    return stories
