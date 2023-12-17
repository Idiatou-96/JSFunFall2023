(function () {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */
  document.addEventListener("DOMContentLoaded", function () {
    const quoteElement = document.getElementById("quote");
    const getQuoteButton = document.querySelector(".btn-outline-secondary");

    getQuoteButton.addEventListener("click", async function () {
      try {
        const response = await axios.get(
          "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
        );
        const quote = response.data[0];
        quoteElement.textContent = `"${quote}"`;
      } catch (error) {
        console.error("Error fetching Ron Swanson quote:", error);
      }
    });
  });
})();
