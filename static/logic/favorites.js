const FAV_EVENTS = [
  {
    id: "e3",
    title: "Dummy event#3",
    description: "Event description#3",
    date: new Date(2021, 09, 28, 3, 24),
    image:
      "https://www.drandyfranklynmiller.com/wp-content/uploads/2015/08/placeholder-image.png",
    isFav: true,
  },
  {
    id: "e5",
    title: "Dummy event#5 dummy placeholder text",
    description:
      "Event description#5  replay Long Event replay Long Event replay Long Event",
    date: new Date(2021, 09, 30, 22, 22),
    image:
      "https://www.drandyfranklynmiller.com/wp-content/uploads/2015/08/placeholder-image.png",
    isFav: true,
  },
];

const favoriteSection = document.getElementById("favorites_events");

let favList = "";

FAV_EVENTS.forEach((element) => {
  let eventCard = `<div class="card border-dark mb-3 mx-3 rounded-3 just" style="max-width: 18rem">
    <div class="bg-image">
      <img
        class="card-img"
        src=${element.image}
        style="max-width: 18rem bg-image"
        alt="Card image"
      />
    </div>
    <div class="card-img-overlay text-dark">
      <div class="d-flex justify-content-between">
        <h5 class="text-truncate" style="max-width: 200px;">${
          element.title
        }</h5>
        <i class="float-end fas fa-heart" id="eventFavorite" onclick=toggleFav(element) style="cursor: pointer;"></i>
       </div>
      <p class="card-text text-light text-truncate">
        ${element.description}
      </p>
    </div>
    <div class="card-footer bg-transparent border-dark">
      <div class="d-flex justify-content-between">
        <h5 class=>${element.date.toLocaleDateString()} </h5>
        <div class=>
            <a class="btn btn-success mx-1 px-2" href="">GOING</a>
            <a class="btn btn-danger mx-1 px-2" href="">SKIP</a>
        </div>
      </div>
    </div>
  </div>`;
  favList = favList.concat(eventCard);
});

favoriteSection.innerHTML = favList;
