// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

function getRandomQuote()
{
    var randomnumber = Math.floor( Math.random() * quotes.length );
    var getquote = quotes[randomnumber];
    return getquote;

}


function printQuote() {
    
    var q = getRandomQuote();
    var message = '';
    message += '<p class=quote>' + q.quote + '</p>';
    message += '<p class=source>' + q.source 
    if (q.citation != null)
        {
            message += '<span class = citation>' + q.citation + '</span>';
        }
    if (q.year != null)
        {
            message += '<span class = year>' + q.year + '</span>';
        }
    
    message += '</p>';
    
    document.getElementById('quote-box').innerHTML = message;
    
    
   
}

 
    
    