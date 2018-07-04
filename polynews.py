from urllib.request import urlopen
from bs4 import BeautifulSoup

quote_page = 'https://www.dn.pt/ultimas.html'

page = urlopen(quote_page)
soup = BeautifulSoup(page, 'html.parser')

name_box = soup.find('div', attrs={'class': 't-article-list-1-body'})
name_box2 = name_box.find('li', attrs={'class': ''})

title = name_box2.find('span');
time = name_box2.find('time');
linkz = name_box2.select("a[href*=html]")

titleclean = title.text.strip()

print(titleclean)
