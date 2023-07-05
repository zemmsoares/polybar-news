![Polybar-news](/assets/example.gif?raw=true "Polybar-news")

## Setup Instructions

1. Register at [NewsAPI.org](https://newsapi.org/) to receive your API key.

2. Configure your desired news sources and/or country. For available options, refer to [NewsAPI.org/sources](https://newsapi.org/sources). Note: You can only filter either by sources or country.

3. Create a `config.py` file in the root of the project folder with the following structure:
   
   ```python
   api_key = "<your_api_key_here>"
   sources = "<your_desired_sources_here>"
   country = "<your_desired_country_here>"
## Dependencies

- [requests](https://pypi.org/project/requests/) - python requests
- [zscroll](https://github.com/noctuid/zscroll#installation) - for **polybar** scroll *(optional)*
- [scroll](https://github.com/Anachron/i3blocks#scroll) - for **i3blocks** scroll *(optional)*

## Polybar Modules

```ini
; Fetches news from API and saves it into articles.json
; This module runs every 900 seconds (15 minutes) due to API limit of 100 calls per day for free tier accounts
[module/news-fetcher]
type = custom/script
exec = ~/.my_python_envs/polybar_news_env/bin/python ~/.config/polybar/custom-modules/polybar-news/news_fetcher.py
interval = 900

; Rotates through the list of news articles in articles.json 
; and saves the current article's title and URL in separate text files
; This module runs every X seconds to change the displayed article
[module/news-rotator]
type = custom/script
interval = 60
exec = ~/.my_python_envs/polybar_news_env/bin/python ~/.config/polybar/custom-modules/polybar-news/news_rotator.py

; Displays the current news article title
; Refreshes every second to ensure updated information is displayed 
; On left click, opens the current article's URL in the default web browser
[module/news-display]
type = custom/script
tail = true
interval = 1
format-prefix = "  "
format = <label>
label-padding = 1
;label-maxlen = 50
exec = ~/.config/polybar/custom-modules/polybar-news/print_current_article.sh ; For scrolling change to scroll_current_article.sh
click-left = < ~/.config/polybar/custom-modules/polybar-news/current_article_url.txt xargs -I % xdg-open %

```
