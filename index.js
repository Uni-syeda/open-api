const catContainer = document.getElementById("catContainer");
const fetchCatButton = document.getElementById("fetch-cat");

fetchCatButton.addEventListener("click", () => {
  // Clear out the previous cat from DOM
  catContainer.innerHTML = "";

  fetch(
    "https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_YNdBDkb6hJuKn2sTeEUeI2J2p14xqL77loXkCwJJVr284EgKEM1nSrVDrdrpCZKb"
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Invalid Request");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const catImgUrl = data[0].url;
      const catImg = document.createElement("img");
      catImg.src = catImgUrl;

      console.log(data[0].breeds[0].description);
      const breedName = data[0].breeds[0].name;
      const catBreedTitle = document.createElement("h2");
      catBreedTitle.innerText = breedName;

      const breedDescription = document.createElement("p");
      breedDescription.innerText = data[0].breeds[0].description;

      catContainer.appendChild(catBreedTitle);
      catContainer.appendChild(breedDescription);
      catContainer.appendChild(catImg);
    })
    .catch((err) => {
      console.warn(err);
    });
});
