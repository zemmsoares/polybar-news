import requests

api_key = "YOUR-API-KEY"

try:
    data = requests.get("https://content.guardianapis.com/search?api-key="+api_key).json()

    sectionName = data['response']['results'][0]["sectionName"]
    webTitle = data['response']['results'][0]["webTitle"]

    print(sectionName+': '+webTitle)
except requests.exceptions.RequestException as e:  # This is the correct syntax
    print ('Something went wrong!')
