<h1 align="center">
Dogefy
<br><br>
<img src="https://dogegarden.com/dogefy/img/doge_card.png" alt="DogeFy - Convert any website/store to show Dogecoin prices using your Fiat Prices" />
<br><br>
</h1>

Convert any website/store to show Dogecoin without changing anything on your website or needing to change your fiat prices

## How to Install 💻

1- Download the ```dogefy.js``` and put on your website directory

2- Add the following below code to your website head before ```</head>``` tag

```
  <!-- Dogefy your website and convert all Fiat Prices into the current Dogecoin Value -->
  <!-- Add this code below before </head> tag and change the fiat_currency and fiat_currency_symbol to match your website-->
  <script type="text/javascript">
    // we set your website fiat currency and fiat symbol to be automaticly replaced with the Dogecoin Value and Symbol
    var fiat_currency = "usd"; // this is to get the Dogecoin price from coingecko API
    var fiat_currency_symbol = "$"; // this must be the same used on your website and must match something like $123.456 or €123.456 etc.
  </script>
  <!-- we load JQuery if your website does not load. You can remove it if you want -->
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" crossorigin="anonymous"></script>
  <!-- we load the magic file and must be in the same root as your website do to CORS policy of coingecko API -->
  <script type="text/javascript" src="dogefy.js" crossorigin="anonymous"></script>
  <!-- End of Dogefy your website and convert all Fiat Prices into the current Dogecoin Value-->
```
