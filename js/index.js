const keys = [
  "C major",
  "G major",
  "D major",
  "A major",
  "E major",
  "B major",
  "F# major",
  "Db major",
  "Ab major",
  "Eb major",
  "Bb major",
  "F major",
];

const container = document.querySelector(".circle");

const createDivs = () => {
  const divs = keys.map((key) => {
    const div = document.createElement("div");
    const className = key.replace(" major", "").replace("#", "s");
    div.classList.add(className);
    div.classList.add("keyDiv");
    div.textContent = key;
    return div;
  });

  divs.forEach((div) => container.appendChild(div));
};

createDivs();

let rotateSum = 0;

const fifthUp = () => {
  rotateSum = rotateSum + 30;
  container.style.transform = `translateX(-50%) rotate(${rotateSum}deg)`;
  changeClefKey();
};

const fifthDown = () => {
  rotateSum = rotateSum - 30;
  container.style.transform = `translateX(-50%) rotate(${rotateSum}deg)`;
  changeClefKey();
};

const changeClefKey = () => {
  const under360 = rotateSum - Math.floor(rotateSum / 360) * 360;

  const step = (rotate) => {
    return rotate / 30;
  };

  const imgClef = document.querySelector(".image");
  switch (step(under360)) {
    case 0:
      imgClef.setAttribute("src", "./img/C-major.png");
      break;
    case 1:
      imgClef.setAttribute("src", "./img/G-major.png");
      break;
    case 2:
      imgClef.setAttribute("src", "./img/D-major.png");
      break;
    case 3:
      imgClef.setAttribute("src", "./img/A-major.png");
      break;
    case 4:
      imgClef.setAttribute("src", "./img/E-major.png");
      break;
    case 5:
      imgClef.setAttribute("src", "./img/B-major.png");
      break;
    case 6:
      imgClef.setAttribute("src", "./img/F-sharp-major.png");
      break;
    case 7:
      imgClef.setAttribute("src", "./img/D-flat-major.png");
      break;
    case 8:
      imgClef.setAttribute("src", "./img/A-flat-major.png");
      break;
    case 9:
      imgClef.setAttribute("src", "./img/E-flat-major.png");
      break;
    case 10:
      imgClef.setAttribute("src", "./img/B-flat-major.png");
      break;
    case 11:
      imgClef.setAttribute("src", "./img/F-major.png");
      break;
  }
};
