![Polynews Example](https://i.imgur.com/ALjgqS3.jpg)

Get the latest news on your polybar!

[![sample screenshot](http://i.imgur.com/RmbQrjS.png)](http://i.imgur.com/HWvaTtb.png)
[![sample screenshot](http://i.imgur.com/XkxGKED.png)](https://i.imgur.com/Z2guyDz.png)

## Get API Key

Register [here](https://newsapi.org/) to receive API key (powered by NewsAPI.org)  
Edit polynews.py, replace with your API key ```api_key = "YOUR_API_KEY"``` 

## Show only from Source / country

You can select one / or several source provider(s) from here https://newsapi.org/sources
Edit polynews.py, edit this line, add sources separeted by comma

```ini
sources="ign,bbc-news"
```

Insted sources, you can get news from your country only
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
