$(document).ready(function() {

    // we test if you have the Browser local Storage enable to store the Fiat Value of Dogecoin to calculate prices
    function isLocalStorageAvailable(){
        var SuchTest = 'SuchTest';
        try {
            localStorage.setItem(SuchTest, SuchTest);
            localStorage.removeItem(SuchTest);
            return true;
        } catch(e) {
            return false;
        }
    }
    
    if(!isLocalStorageAvailable()){
        alert("Please enable Local Storage on your browser to be able to store the Dogecoin current value");
    }

    // we get the current fiat value of Dogecoin to be able to convert your website prices to Doge
    $.getJSON("https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=" + fiat_currency, function(data){
        localStorage.setItem('dogecoinValue', data["dogecoin"][fiat_currency]); // we store the value in local storage        
    }).fail(function( dat, textStatus, error ) {
        var err = textStatus + ", " + error;
        //alert("Much Sadness! Cant get current value of Dogecoin. " + err);
    });

    // until we cant get the local storage dogecoin value do to JQuery Storage, we reload the webpage
    const dogecoinValue = localStorage.getItem('dogecoinValue');
    if (dogecoinValue <= 0 ){
        setTimeout(
        function() 
            {
              location.reload();
            }, 120);
    };

    // now we try to find all fiat prices on your webpage
    var regex = new RegExp('\\' + fiat_currency_symbol + '\\d+(,\\d{3})*(\\.\\d+)?', 'g');
  
    // we start to filter all HTML tags to find fiat values
    $('*').filter(function() { // we search all elements on page
        return $(this).children().length;
    }).each(function() {
        var text = $(this).text(); // we get text of element
        var matches = text.match(regex); // we find currency values in text    

        // if we find a currency value we try to convert into Dogecoin 
        if (matches) {
            for (var i = 0; i < matches.length; i++) {
                fiat = (matches[i].match(/[\d\.]+/)); // we get numeric value
                //we save all HTML to dogefy the webpage
                dogefy = $('body').html().replace(fiat_currency_symbol + fiat, 'Ð' + (fiat / dogecoinValue).toFixed(2));

                // now lets dogefy all website :P
                $('body').html(dogefy);             
            }
        }
    });    
   
});