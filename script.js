// Declaring DOM Variables for Manipulation
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Stores the pulled fetched Responsed into Array.
let apiQuotes = []; // Using 'let' as the array updates constantly

// Function to get a single quote
const newQuote = () => {
  // Generates random quotes
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Set Quote by Appends the value into it's corresponding element tag
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;

  // Check if length is long to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
};

// Get Quotes Function
async function getQuotes() {
  // Declare and Store API
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    // Uses fetch to pull API
    const response = await fetch(apiUrl);
    // Converts fetched data into JSON
    apiQuotes = await response.json();
    // Function to get a new single Quotes
    newQuote();
  } catch (error) {
    // Handle Error
    console.log(`Ooops something went wrong: ${error}`);
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank"); // opens on a new browser tab
}

// Add Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
