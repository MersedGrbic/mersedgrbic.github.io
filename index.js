let counter = 1;
let taskmateCounter = 1;
const changeTaskmateSource = () => {
  if (taskmateCounter > 6) {
    taskmateCounter = 1;
  }

  document.getElementById(
    "taskmate"
  ).src = `/images/taskmate_page_${taskmateCounter}.png`;
  taskmateCounter += 1;
};

const changeImageSource = () => {
  if (counter > 3) {
    counter = 1;
  }

  document.getElementById(
    "virtual-clinic"
  ).src = `/images/landing_page_${counter}.png`;
  counter += 1;
};

setInterval(changeImageSource, 2500);
setInterval(changeTaskmateSource, 2500);
