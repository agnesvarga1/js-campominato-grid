const gridHtml = document.querySelector("#grid");
const playBtn = document.querySelector(".play-btn");
const selectHtml = document.querySelector("#diff-level");

function startGame(n) {
  let cellPerLine = n;
  for (let i = 1; i <= cellPerLine ** 2; i++) {
    let cellHtml = document.createElement("div");
    const wCalced = `calc(100% / ${cellPerLine})`;
    cellHtml.style.setProperty("width", wCalced);
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
  let diffLevel = selectHtml.value;
  startGame(diffLevel);
});
