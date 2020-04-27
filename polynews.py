#!/usr/bin/python

import requests
import os.path

#path to polynews script

save_path = '/home/zemmsoares/.config/polybar/polynews/'

#get your api key at https://newsapi.org/

api_key = "aad33b474b5b4d05b445332cf82d4b07"

#find sources & country codes at https://newsapi.org/sources

sources = ""
country = "pt"

try:
    data = requests.get('https://newsapi.org/v2/top-headlines?apiKey='+api_key+'&sources='+sources+'&country='+country).json()

    sourceName = data['articles'][0]['source']['name']
    title = data['articles'][0]['title']
    url = data['articles'][0]['url']

    print(sourceName+': '+title)

    path = os.path.join(save_path,"current_url.txt")         
    f = open(path, "w")
    f.write(url)
    f.close()
    
 
except requests.exceptions.RequestException as e:
    print ('Something went wrong!')

