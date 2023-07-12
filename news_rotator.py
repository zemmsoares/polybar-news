#!/usr/bin/python

import json
import os

# Directory of the script
script_dir = os.path.dirname(os.path.realpath(__file__))

with open(os.path.join(script_dir, "articles.json"), 'r+') as f:
    data = json.load(f)
    articles = data['articles']
    index = data['index']

    # Get the current article
    article = articles[index]

    # Check if 'source' key exists
    if 'source' in article:
        source = article['source']
    else:
        source = article['type']

    # Now, you can use 'source' in your formatted string
    current_article = '[{0}] {1}'.format(source, article['title'])

    # Write the URL to a separate file
    with open(os.path.join(script_dir, "current_article_url.txt"), "w") as url_file:
        url_file.write(article['url'])
        
    # Write the current article to a separate file
    with open(os.path.join(script_dir, "current_article.txt"), "w") as article_file:
        article_file.write(current_article)

    # Update the index for the next run
    data['index'] = (index + 1) % len(articles)

    # Write the updated data back to the file
    f.seek(0)
    json.dump(data, f)
    f.truncate()