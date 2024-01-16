const gridHtml = document.querySelector("#grid");
const playBtn = document.querySelector(".play-btn");
let cellPerLine = 10;

function startGame() {
  for (let i = 1; i <= cellPerLine ** 2; i++) {
    let cellHtml = document.createElement("div");
    cellHtml.classList.add("cell");
    cellHtml.innerHTML = `<span>${i}</span>`;

    cellHtml.addEventListener("click", function () {
      this.classList.add("active");
      let cellNum = this.querySelector("span").innerText;
      console.log(cellNum);
    });
    gridHtml.append(cellHtml);
  }
}

playBtn.addEventListener("click", () => {
  startGame();
});
