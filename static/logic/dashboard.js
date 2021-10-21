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
