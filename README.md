![Polynews Example](https://i.imgur.com/ALjgqS3.jpg)  
![Polynews Example](https://i.imgur.com/hSehjcj.png)

## Get API Key

Register [here](https://newsapi.org/) to receive API key (powered by NewsAPI.org)  
Replace it in `polybar-news.py`

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

## Dependencies

- [zscroll](https://github.com/noctuid/zscroll#installation) - scroll text
- [requests](https://pypi.org/project/requests/) - python requests

## Modules

```ini
[module/news]
type = custom/script
tail = true
interval = 1
format-prefix = "  "
format = <label>
label-padding = 1
exec = ~/.config/polybar/scripts/news/scroll_news_status.sh
;click-left = < ~/.config/polybar/scripts/news/current_url.txt xargs -I % xdg-open %

[module/news-grab]
type = custom/script
exec = ~/.config/polybar/scripts/news/news.py
interval = 900
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
[module/polybar-news]
; Also make sure enable-ipc = true on your global config
click-left = < ~/.config/polybar/scripts/polybar-news/current_url.txt xargs -I % xdg-open %
```
