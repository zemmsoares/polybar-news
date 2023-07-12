#!/usr/bin/python

import os.path
import json
from config import news_source

save_path = os.path.dirname(os.path.realpath(__file__))

if news_source == 'newsapi':
    from sources.newsapi import get_news
elif news_source == 'hackernews':
    from sources.hackernews import get_news

if __name__ == "__main__":
    news_data = get_news()

    # Save news data along with an index for cycling through articles
    path = os.path.join(save_path, "articles.json")

    # Save stories in a JSON file
    with open(path, 'w') as file:
        json.dump({'index': 0, 'articles': news_data}, file)