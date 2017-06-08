// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Function getRandomQuote generator will get the random number using Math.random function and rounded up with the length of the quotes object , so for exmaple if the quotes object has 5 quotes the below function will generate any number between 0 to 5 , and get the object of this specific index number and store it in variable getquote

function getRandomQuote()
{
    var randomnumber = Math.floor( Math.random() * quotes.length );
    var getquote = quotes[randomnumber];
    return getquote;

}


function printQuote() {
    // store the random object from Quotes in variable q
    var q = getRandomQuote();
    // string concatenation on message variable
    
    var message = '';
    message += '<p class=quote>' + q.quote + '</p>';
    message += '<p class=source>' + q.source 
    
    //to check optional citation or year property , if exist concatenate into the message variable 
    
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

 
    
    