const userAvatar = document.getElementById("userAvatar");
const input = document.getElementById("userNameInput");
userAvatar.src = `https://robohash.org/default`;

if (input != null) input.addEventListener("change", updateValue);

function updateValue(e) {
  console.log("lefutottan");
  console.log(e.target.value);
  userAvatar.src = `https://robohash.org/${e.target.value}`;
}

function deleteASD(id) {
  alert(id + " Inserted");

  console.log(id);
  console.log("AMERIKA");
}

const MY_EVENTS = [
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
