(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/api/character
   * To get an individual character, you must use this, where you plugin 2
   * with the character's ID:
   * https://rickandmortyapi.com/api/character/2
   *
   * You must make two AJAX request to solve this problem.
   */
  const dropdown = document.getElementById("dropdown");
  const getLink = document.getElementById("get-schwifty");

  // Function to populate the dropdown with characters
  function populateDropdown() {
    const apiUrl = "https://rickandmortyapi.com/api/character";

    // Make AJAX request to get the list of characters
    axios
      .get(apiUrl)
      .then((response) => {
        const characters = response.data.results;

        // Populate the dropdown with character names and IDs
        characters.forEach((character) => {
          const option = document.createElement("option");
          option.value = character.id;
          option.text = character.name;
          dropdown.appendChild(option);
        });
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }

  // Function to display the selected character's image
  function displayCharacterImage(characterId) {
    const apiUrl = `https://rickandmortyapi.com/api/character/${characterId}`;

    // Make AJAX request to get the details of the selected character
    axios
      .get(apiUrl)
      .then((response) => {
        const character = response.data;

        // Display the character's image
        getLink.src = character.image;
        getLink.alt = character.name;
      })
      .catch((error) => {
        console.error("Error fetching character details:", error);
      });
  }

  // Event listener for dropdown change
  dropdown.addEventListener("change", function () {
    const selectedCharacterId = this.value;

    if (selectedCharacterId !== "Select a character") {
      displayCharacterImage(selectedCharacterId);
    }
  });

  // Initialize the dropdown
  populateDropdown();
})();
