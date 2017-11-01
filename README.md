# Untappd-alko
Show your own Untappd rates on alko.fi website.

This is a Google Chrome Extension to add Untappd rates to https://www.alko.fi/

Do not work in every beer in alko webstore. I am using beer name in webstore to query beers from Untappd API. Some times names in alko are funny, like "Karhu tölkki"

## Untappd API credentials

First obtain Untapped credentials here.
> https://untappd.com/api/register?register=new

## Set-up
#### Change API credentials
Open script.js enter the Untappd credentials

```
var id = "UNTAPPED Client ID here";
var secret = "UNTAPPED Secret here";
var token = "UNTAPPED Token here";
```

## Add Extension to Google Chrome
> https://developer.chrome.com/extensions/getstarted
