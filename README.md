![Polynews Example](https://i.imgur.com/ALjgqS3.jpg)     
![Polynews Example](https://i.imgur.com/hSehjcj.png)

## Get API Key

Register [here](https://newsapi.org/) to receive API key (powered by NewsAPI.org)  
Replace it in `polynews.py`

## Filter by news source / country

You can select one / or several source provider(s) https://newsapi.org/sources           

```ini
sources="ign,bbc-news"
```

Or filter by country
```ini
country="us"
```

**Note** you can only filter either by sources or country.

## Modules
```ini
[module/polynews]
type = custom/script
tail = true
interval = 1
format-prefix = "  "
format = <label>
label-padding = 1
exec = ~/.config/polybar/scripts/polynews/scroll_polynews_status.sh
;click-left = < ~/.config/polybar/scripts/polynews/current_url.txt xargs -I % xdg-open %

[module/polynews-grab]
type = custom/script
exec = ~/.config/polybar/scripts/polynews/polynews.py
interval = 30
```

## Additional formatting 
Open on click

```ini
#The url is always the most recent regardless of the number of news to be shown, 
#so it only makes sense to use it in case your number_news = 1
save_url = True
number_news = 1
```

```ini
[module/polynews]
; Also make sure enable-ipc = true on your global config
click-left = < ~/.config/polybar/scripts/polynews/current_url.txt xargs -I % xdg-open %
```
