#!/bin/sh

# osascript -e "tell application \"Safari\" to open location \"`pwd`/resume.html\""
osascript ./scripts/save-pdf-file.scpt "`pwd`/resume.html" "`pwd`"