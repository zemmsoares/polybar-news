#!/bin/bash

zscroll -l 40 \
        --delay 0.1 \
        --match-command "`dirname $0`/get_polynews_status.sh" \
        --update-check true "`dirname $0`/get_polynews_status.sh" &
wait

