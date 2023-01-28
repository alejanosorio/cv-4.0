const image = document.querySelector("#image");

function modeDark() {
  image.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}
modeDark();
