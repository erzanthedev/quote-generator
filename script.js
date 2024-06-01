// Stores the pulled fetched Responsed into Array.
let apiQuotes = []; // Using 'let' as the array updates constantly

// Function to get a single quote
const newQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
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
