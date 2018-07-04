import requests
import json

response = requests.get("https://your-heroku-news-api.herokuapp.com/news")
data = response.text
parsed = json.loads(data)
provider = parsed["Provider"]
article = parsed["Article"]
 
print(provider+' '+article)
