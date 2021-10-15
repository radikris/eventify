const eventFavorite = document.getElementById("eventFavorite");

const ALL_EVENTS = [
  {
    id: "e1",
    title: "Dummy event#1",
    description: "Event description#1",
    date: new Date(),
    image:
      "https://www.drandyfranklynmiller.com/wp-content/uploads/2015/08/placeholder-image.png",
    isFav: false,
  },
  {
    id: "e2",
    title: "Dummy event#2",
    description:
      "Long Event description#2 replay Long Event description#2 replay Long Event description#2 replay Long Event description#2 replay Long Event description#2 replay",
    date: new Date(),
    image:
      "https://www.drandyfranklynmiller.com/wp-content/uploads/2015/08/placeholder-image.png",
    isFav: false,
  },
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
    id: "e4",
    title: "Dummy event#4",
    description:
      "Event description#4  replay Long Event replay Long Event replay Long Event",
    date: new Date(2021, 09, 30, 22, 22),
    image:
      "https://www.drandyfranklynmiller.com/wp-content/uploads/2015/08/placeholder-image.png",
    isFav: false,
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

const todaySections = document.getElementById("todays_events");
const allSection = document.getElementById("all_events");

let favList = "";
let allList = "";

ALL_EVENTS.slice(0, 2).forEach((element) => {
  let eventCard = `<div class="card border-dark mb-3 rounded-3" style="max-width: 18rem">
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
      <h5 class=>${element.title}</h5>
        <i class="float-end far fa-heart" id="eventFavorite" onclick=toggleFav(${
          element.id
        }) style="cursor: pointer;"></i>
     </div>
    <p class="card-text text-light text-truncate">
      ${element.description}
    </p>
  </div>
  <div class="card-footer bg-transparent border-dark">
    <div class="d-flex justify-content-between">
      <h3 class=>${element.date.getHours()}:${element.date.getMinutes()} </h3>
      <div class=>
          <a class="btn btn-success mx-1 px-2" href="">GOING</a>
          <a class="btn btn-danger mx-1 px-2" href="">SKIP</a>
      </div>
    </div>
  </div>
</div>`;
  favList = favList.concat(eventCard);
});

ALL_EVENTS.forEach((element) => {
  let eventCard = `
  <div class="card border-dark mb-3 mx-3 rounded-3 just" style="max-width: 18rem">
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
  <h5 class=>${element.title}</h5>
  <i class="float-end far fa-heart" id="eventFavorite" onclick=toggleFav(element) style="cursor: pointer;"></i>
  </div>
  <a href="../event_detail.html">
  <p class="card-text text-light text-truncate">
      ${element.description}
    </p>
    </a>
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
  allList = allList.concat(eventCard);
});

// onclick=toggleFav(${
//   element.id
// })

todaySections.innerHTML = favList;
allSection.innerHTML = allList;

const toggleFav = (id) => {
  console.log("toggleFav: " + id);
  const event = ALL_EVENTS.find((e) => e.id === id);
  if (event.isFav) {
    $("#eventFavorite").removeClass("fas fa-heart").addClass("far fa-heart");
  } else {
    $("#eventFavorite").removeClass("far fa-heart").addClass("fas fa-heart");
  }
};

eventFavorite.addEventListener("click", toggleFav);

function showImage(src, target) {
  var fr = new FileReader();

  fr.onload = function () {
    target.src = fr.result;
  };
  fr.readAsDataURL(src.files[0]);
}
function putImage() {
  var src = document.getElementById("select_image");
  var target = document.getElementById("target");
  showImage(src, target);
}
