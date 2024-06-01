// Get Quotes Function
async function getQuotes() {
  // Declare and Store API
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data[0]);
  } catch (error) {
    // Handle Error
    console.log(`Ooops something went wrong: ${error}`);
  }
}

// On Load
getQuotes();
