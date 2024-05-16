var quotes = [
    {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "author": "Albert Einstein"
    },
    {
        "quote": "So many books, so little time.",
        "author": "Frank Zappa"
    },
    {
        "quote": "A room without books is like a body without a soul.",
        "author": "Marcus Tullius Cicero"
    },
    {
        "quote": "In three words I can sum up everything I've learned about life: it goes on.",
        "author": "Robert Frost"
    },
    {
        "quote": "If you tell the truth, you don't have to remember anything.",
        "author": "Mark Twain"
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "Without music, life would be a mistake.",
        "author": "Friedrich Nietzsche"
    },
    {
        "quote": "We accept the love we think we deserve.",
        "author": "Stephen Chbosky"
    },
    {
        "quote": "It is never too late to be what you might have been.",
        "author": "George Eliot"
    },
    {
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs"
    },
    {
        "quote": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs"
    }
];

var lastQuoteIndex = null;

function getRandomQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);
    lastQuoteIndex = randomIndex;
    console.log(randomIndex);
    return quotes[randomIndex];
   
}

function showNewQuote() {
    const randomQuote = getRandomQuote();
    document.getElementById('quote').textContent = `"${randomQuote.quote}"`;
    document.getElementById('author').textContent = `-- ${randomQuote.author}`;
}
