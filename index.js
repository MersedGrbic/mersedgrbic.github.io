document.getElementById("virtual-clinic");
let counter = 1;
const changeImageSource = () => {
  if (counter > 3) {
    counter = 1;
  }

  document.getElementById(
    "virtual-clinic"
  ).src = `/images/landing_page_${counter}.png`;
  counter += 1;
};

setInterval(changeImageSource, 5000);
