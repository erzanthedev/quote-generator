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
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
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

// On Load
getQuotes();
