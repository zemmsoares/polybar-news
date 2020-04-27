![Polynews Example](https://i.imgur.com/ALjgqS3.jpg)     
![Polynews Example](https://i.imgur.com/hSehjcj.png)

Get the latest news on your polybar!

[![sample screenshot](https://i.imgur.com/oycBZ23.png)](https://i.imgur.com/JmpPatf.png)
[![sample screenshot](http://i.imgur.com/RmbQrjS.png)](http://i.imgur.com/HWvaTtb.png)
[![sample screenshot](http://i.imgur.com/XkxGKED.png)](https://i.imgur.com/Z2guyDz.png)

## Get API Key

Register [here](https://newsapi.org/) to receive API key (powered by NewsAPI.org)  
Edit polynews.py, replace with your API key ```api_key = "YOUR_API_KEY"``` 

## Filter by news source / country

You can select one / or several source provider(s), get provider codes from here https://newsapi.org/sources           
Edit polynews.py, add sources separeted by comma

```ini
sources="ign,bbc-news"
```

Insted sources, you can filter results by country
```ini
country="us"
```

**Note** you can only filter either by sources or country, API doesn't support both, so leave one empty

## Module
```ini
[module/polynews]
type = custom/script
exec = ~/polybar-scripts/polynews/polynews.py
interval = 30
format-prefix = " "
click-left = < ~/.config/polybar/polynews/current_url.txt xargs -I % xdg-open %
```

## Additional formatting
```ini
[module/polynews]
;type = custom/script
;exec = ~/polybar-scripts/polynews/polynews.py
;interval = 30
;format-prefix = " "
label-maxlen = 50
```


## Icon
Icon from example ( Font Awesome 5 Free )
```ini
font-0 = Font Awesome 5 Free:style=Regular:pixelsize=8;0
```
