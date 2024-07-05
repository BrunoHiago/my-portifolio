// Cria os círculos
const skills = [
  { name: "HTML", progress: 92 },
  { name: "CSS", progress: 70 },
  { name: "JavaScript", progress: 88 },
  { name: "React", progress: 74 },
  { name: "Node", progress: 78 },
  { name: "MongoDB", progress: 65 },
  { name: "Python", progress: 40 },
  { name: "C", progress: 90 },
  { name: "Golang", progress: 35 },
];

const onload = (listItem) => {
  let circles = listItem.querySelectorAll(".progress-ring__circle");
  let progressTexts = listItem.querySelectorAll("#progress-text");

  circles.forEach((circle, index) => {
    let targetPercentage = skills[index]?.progress;
    let progressPercentage = 0;
    let radius = circle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;

      progressTexts[index].textContent = `${Math.floor(percent)}%`;
    }

    let progressInterval = setInterval(() => {
      progressPercentage++;
      setProgress(progressPercentage);

      if (progressPercentage >= targetPercentage) {
        clearInterval(progressInterval);
      }
    }, 30);
  });
};

const createCircle = (parentElement, progress, name) => {
  // Criar elementos SVG
  let listItem = document.createElement("li");
  let svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  let circleElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  let textElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  let textNode = document.createTextNode(name);
  let pElement = document.createElement("p");
  pElement.appendChild(textNode);
  pElement.style.color = "f0ffff";
  pElement.style.fontSize = "1.2rem";
  pElement.style.fontFamily = "Roboto";
  pElement.style.fontWeight = "500";
  pElement.style.marginLeft = "1rem";
  pElement.style.marginTop = "0.5rem";

  // Configurar atributos e estilos

  svgElement.setAttribute("class", "progress-ring");
  svgElement.setAttribute("width", "120");
  svgElement.setAttribute("height", "120");

  let backgroundCircle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  backgroundCircle.setAttribute("class", "progress-ring__circleBG");
  backgroundCircle.setAttribute("stroke", "#bab197"); // Cor de fundo
  backgroundCircle.setAttribute("stroke-width", "4");
  backgroundCircle.setAttribute("fill", "transparent");
  backgroundCircle.setAttribute("r", "58");
  backgroundCircle.setAttribute("cx", "60");
  backgroundCircle.setAttribute("cy", "60");

  circleElement.setAttribute("class", "progress-ring__circle");
  circleElement.setAttribute("stroke", "#fdda5c");
  circleElement.setAttribute("stroke-width", "4");
  circleElement.setAttribute("fill", "transparent");
  circleElement.setAttribute("r", "58");
  circleElement.setAttribute("cx", "60");
  circleElement.setAttribute("cy", "60");

  textElement.setAttribute("x", "50%");
  textElement.setAttribute("y", "50%");
  textElement.setAttribute("text-anchor", "middle");
  textElement.setAttribute("stroke", "#f0ffff");
  textElement.setAttribute("stroke-width", "1px");
  textElement.setAttribute("dy", ".3em");
  textElement.setAttribute("id", "progress-text");
  textElement.textContent = progress + "%";

  // Adicionar elementos à hierarquia
  svgElement.appendChild(backgroundCircle);
  svgElement.appendChild(circleElement);
  svgElement.appendChild(textElement);
  listItem.appendChild(svgElement);
  listItem.appendChild(pElement);
  parentElement.appendChild(listItem);
};

let skillsSection = document.getElementById("habilidades");

skillsSection.addEventListener("mouseenter", () => {
  // Remova os círculos existentes
  while (listSkills.firstChild) listSkills.removeChild(listSkills.firstChild);

  // Crie novos círculos
  skills.forEach((skill) => {
    createCircle(listSkills, skill.progress, skill.name);
  });

  // Inicie a animação
  let listItems = document.querySelectorAll("#listSkills");

  listItems.forEach((listItem) => {
    onload(listItem);
  });
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", function (e) {
    const cardBounding = card.getBoundingClientRect();
    const mouseX = e.clientX - cardBounding.left;
    const mouseY = e.clientY - cardBounding.top;

    const cardWidth = card.clientWidth;
    const cardHeight = card.clientHeight;

    const rotateX = (mouseY / cardHeight) * 30 - 15;
    const rotateY = (mouseX / cardWidth) * -30 + 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
  });
});

function calcularMesesEntreDatas(dataInicio, dataFim) {
  dataInicio = new Date(dataInicio);
  dataFim = new Date(dataFim);

  var diferenca = dataFim.getTime() - dataInicio.getTime();

  var meses = diferenca / (1000 * 3600 * 24 * 30.436875);

  meses = Math.ceil(meses);

  return meses;
}

const idade = document.getElementById("idade");
const dataNascimento = new Date("2001-04-25");
const dataAtual = new Date();

idade.textContent = dataAtual.getFullYear() - dataNascimento.getFullYear();

const semestre = document.getElementById("periodo");
const dataInicio = new Date("2021-01-01");
const dataFim = new Date();

const mesesTotal = calcularMesesEntreDatas(dataInicio, dataFim);

semestre.textContent = Math.ceil(mesesTotal / 6) + "º";
