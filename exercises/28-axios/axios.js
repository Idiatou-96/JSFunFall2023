(function () {
  const dogBtutton = document
    .querySelector("#image")

    .axios.get("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      // handle success
      if (response.data.status === "success") {
        // Set the image source to the received URL
        document.getElementById("#image").src = response.data.message;
      } else {
        console.error("Failed to fetch dog image:", response.data.message);
      }
    })
    .catch(function (error) {
      console.error("Error fetching dog image:", error);
    });

  // Add click event listener to the button
  document
    .getElementById("#image")
    .addEventListener("click", fetchRandomDogImage);
  document.querySelector(".button button-primary");
})();
/**
 * As a user, I should be able to click on the a button to see random dog images.
 * Please use axios in this example.
 *
 * You will be making an HTTP request to this API:
 * https://dog.ceo/api/breeds/image/random
 *
 * You should expect this as a response:
 * {
 *    "status": "success",
 *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
 * }
 */
