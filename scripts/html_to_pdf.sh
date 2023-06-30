INFILE=$1
#!/bin/bash
OUTFILE=$2
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
CHROME_CANARY="/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"
# ls -l "$CHROME_CANARY"
ulimit -n 65536  && "$CHROME" \
--headless \
--print-to-pdf=${OUTFILE} \
--print-to-pdf-no-header \
--disable-client-side-phishing-detection \
--disable-component-extensions-with-background-pages \
--disable-default-apps \
--disable-dev-shm-usage \
--disable-extensions \
--enable-automation \
--mute-audio \
--no-default-browser-check \
--allow-running-insecure-content \
--autoplay-policy=user-gesture-required \
--no-first-run \
--use-fake-ui-for-media-stream \
$INFILE 2>&1 