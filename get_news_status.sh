#!/bin/bash

# Directory of the script
script_dir=$(dirname "$0")

# Print the current news article
echo "$(<"$script_dir/current_news.txt")"