
var generateQuote = function() {
    var quotes = [
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "--Wayne Gretzy"
    },
    {
        quote: "Resentment is like drinking poison and waiting for your enemies to die.",
        author: "--Nelson Mandela"
    },
    {
        quote: "The best revenge is massive success.",
        author: "--Frank Sinatra"
    },
    {
        quote: "It's not what happens to you, but how you react to it that matters.",
        author: "--Epictetus"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "-- Mahatma Gandhi"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "--Kingsley Shacklebolt"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "-- Mae West"
    },
    {
        quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "--Albus Dumbledore"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "--Marcus Tullius Cicero"
    }
];

    var arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onclick= function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
