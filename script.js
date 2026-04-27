const parts = [
  { index: "1", partNo: "MTR-210-AX", qty: 1, x: 180, y: 180 },
  { index: "2", partNo: "GEAR-540-B", qty: 2, x: 410, y: 150 },
  { index: "3", partNo: "BRG-0093", qty: 4, x: 600, y: 245 },
  { index: "4", partNo: "CPL-100-L", qty: 1, x: 735, y: 128 },
  { index: "5", partNo: "BLT-M8-40", qty: 8, x: 845, y: 290 },
  { index: "6", partNo: "PLT-SIDE-R", qty: 1, x: 545, y: 405 },
  { index: "7", partNo: "PIP-HYD-22", qty: 2, x: 315, y: 470 },
  { index: "8", partNo: "SNS-TEMP-7", qty: 1, x: 150, y: 355 }
];

const tableBody = document.querySelector("#partsTableBody");
const balloonLayer = document.querySelector("#balloonLayer");
const balloonTemplate = document.querySelector("#balloonTemplate");

const rowMap = new Map();
const balloonMap = new Map();

parts.forEach((part) => {
  const row = document.createElement("tr");
  row.dataset.index = part.index;
  row.innerHTML = `
    <td>${part.index}</td>
    <td>${part.partNo}</td>
    <td>${part.qty}</td>
  `;
  row.addEventListener("click", () => activatePart(part.index));
  tableBody.appendChild(row);
  rowMap.set(part.index, row);

  const balloon = balloonTemplate.content.firstElementChild.cloneNode(true);
  balloon.setAttribute("transform", `translate(${part.x} ${part.y})`);
  balloon.setAttribute("aria-label", `Index ${part.index}`);
  balloon.dataset.index = part.index;
  balloon.querySelector("text").textContent = part.index;

  balloon.addEventListener("click", () => activatePart(part.index));
  balloon.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activatePart(part.index);
    }
  });

  balloonLayer.appendChild(balloon);
  balloonMap.set(part.index, balloon);
});

function activatePart(index) {
  rowMap.forEach((row) => row.classList.remove("active"));
  balloonMap.forEach((balloon) => balloon.classList.remove("active"));

  const targetRow = rowMap.get(index);
  const targetBalloon = balloonMap.get(index);

  if (!targetRow || !targetBalloon) {
    return;
  }

  targetRow.classList.add("active");
  targetBalloon.classList.add("active");
  targetRow.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

activatePart(parts[0].index);
