# Untapped-alko
Show your own Untapped rates on alko.fi website.

This is a Google Chrome Extension to add Untapped rates to https://www.alko.fi/

Do not work in every beer in alko webstore. I am using beer name in webstore to query beers from Untapped API. Some times names in alko are funny, like "Karhu tölkki"

## Untapped API credentials

First obtain Untapped credentials here.
> https://untappd.com/api/register?register=new

## Set-up
#### Change API credentials
Open script.js enter the Untapped credentials

```
var id = "UNTAPPED Client ID here";
var secret = "UNTAPPED Secret here";
var token = "UNTAPPED Token here";
```

## Add Extension to Google Chrome
> https://developer.chrome.com/extensions/getstarted
