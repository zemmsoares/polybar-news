#!/usr/bin/python

import requests
import os.path

#path to polynews script
save_path ='/home/zm/.config/polybar/scripts/polynews'

#get your api key at https://newsapi.org/
api_key = "YOUR-API-KEY"

#find sources & country codes at https://newsapi.org/sources
sources = "associated-press"
country = ""

#The url is always the most recent regardless of the number of news to be shown, 
#so it only makes sense to use it in case your number_news = 1
save_url = False
number_news = 3

try:
    data = requests.get('https://newsapi.org/v2/top-headlines?apiKey='+api_key+'&sources='+sources+'&country='+country).json()

    news_string = ""

    for x in range(number_news):
      sourceName = data['articles'][x]['source']['name']
      title = data['articles'][x]['title']
      news_string += '['+sourceName+ '] '+ title + ' '   
      
    path = os.path.join(save_path,"current_news.txt")         
    f = open(path, "w")
    f.write(news_string)
    f.close()
    
    if save_url == True:
      url = data['articles'][0]['url']
      path = os.path.join(save_path,"current_url.txt")         
      f = open(path, "w")
      f.write(url)
      f.close() 
      
      
except requests.exceptions.RequestException as e:
    print ('Something went wrong!')
    
    
    
    
    
    
    
    
    
  
    

