import requests
import json

response = requests.get("https://your-heroku-server.herokuapp.com/news")
data = response.text
parsed = json.loads(data)
provider = parsed["Provider"]
article = parsed["Article"]
 
print(provider+' '+article)
