const gridHtml = document.querySelector("#grid");

let cellPerLine = 10;

for (let i = 1; i <= cellPerLine ** 2; i++) {
  let cellHtml = document.createElement("div");
  cellHtml.classList.add("cell");
  cellHtml.innerHTML = `<span>${i}</span>`;
  gridHtml.append(cellHtml);
}
