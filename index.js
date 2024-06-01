const catOrDogContainer = document.getElementById("catOrDogContainer");
const fetchCatButton = document.getElementById("fetchCat");
const fetchDogBtn = document.getElementById("fetchDog");
fetchCatButton.addEventListener("click", () => {
  // Clear out the previous cat from DOM
  catOrDogContainer.innerHTML = "";

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

      catOrDogContainer.appendChild(catBreedTitle);
      catOrDogContainer.appendChild(breedDescription);
      catOrDogContainer.appendChild(catImg);
    })
    .catch((err) => {
      console.warn(err);
    });
});
// Fetch a dog
fetchDogBtn.addEventListener("click", () => {
  fetch(
    "https://api.thedogapi.com/v1/images/search?limit=1&has_breeds=1&api_key=live_cJYKf789eUk5mDuCfoXp2O9FovgZd1gbIDkftrZVjGJgtRclLAkuiP9k0OnrpmMy"
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Invalid Request");
      }
      return res.json();
    })
    .then((data) => {
      // Clear out previous dog
      catOrDogContainer.innerHTML = "";

      const dogImgUrl = data[0].url;
      const dogImg = document.createElement("img");
      dogImg.src = dogImgUrl;
      const breedName = data[0].breeds[0].name;
      const dogBreedTitle = document.createElement("h2");
      dogBreedTitle.innerText = breedName;

      const breedTemperament = document.createElement("p");
      breedTemperament.innerText = data[0].breeds[0].temperament;

      catOrDogContainer.appendChild(dogBreedTitle);
      catOrDogContainer.appendChild(breedTemperament);
      catOrDogContainer.appendChild(dogImg);
    })
    .catch((err) => {
      console.warn(err);
    });
});
