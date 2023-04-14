const body = document.querySelector("body");

const createInput = () => {
  const container = document.createElement("div");

  container.style.position = "absolute";
  container.style.left = "50%";
  container.style.top = "50%";
  container.style.transform = "translate(-50%, -50%)";

  const input = document.createElement("input");

  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Введите Ваш текст");
  input.style.width = "300px";
  input.style.height = "40px";
  input.style.borderRadius = "5px";
  input.style.padding = "10px";

  const paragraph = document.createElement("p");

  paragraph.style.textAlign = "center";
  paragraph.style.marginTop = "20px";

  container.append(input, paragraph);

  body.appendChild(container);
};


const inputController = () => {
  let timeout = null;

  const input = document.querySelector("input");

  input.addEventListener("focus", () => {
    body.style.backgroundColor = "lightblue";
  });

  input.addEventListener("blur", () => {
    body.style.backgroundColor = "white";
  });

  input.addEventListener("input", function () {
    clearTimeout(timeout);
    const paragraph = document.querySelector("p");
    timeout = setTimeout(function () {
      paragraph.textContent = input.value;
    }, 300);
  });
};

export { createInput, inputController };
