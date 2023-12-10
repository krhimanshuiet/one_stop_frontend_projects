let rows = 100;
let cols = 26;

let addressColumnContainer = document.querySelector(".address-col-container");
let addressRowContainer = document.querySelector(".address-row-container");
let cellsContainer = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar")

for (let i = 0; i < rows; i++) {
  let addressColumn = document.createElement("div");
  addressColumn.setAttribute("class", "address-column");
  addressColumn.innerText = i + 1;
  addressColumnContainer.appendChild(addressColumn);
}

for (let i = 0; i < cols; i++) {
  let addressRow = document.createElement("div");
  addressRow.setAttribute("class", "address-row");
  addressRow.innerText = String.fromCharCode(65 + i);
  addressRowContainer.appendChild(addressRow);
}

// for (let i = 0; i < rows * cols; i++) {
//   let cell = document.createElement("div");
//   cell.setAttribute("class", "cell");
//   cell.setAttribute("contenteditable", "true");
//   cellsContainer.appendChild(cell);
// }

for (let i = 0; i < rows; i++) {
  let rowCount = document.createElement("div");
  rowCount.setAttribute("class","rowCount")
  for (let j = 0; j < cols; j++) {
    let cell = document.createElement("div");
    cell.setAttribute("class","cell")
    cell.setAttribute("contenteditable", "true");
    rowCount.appendChild(cell)
    addListnerForAddressBarDisplay(cell,i,j)
  }
  cellsContainer.appendChild(rowCount)
}


function addListnerForAddressBarDisplay(cell,i,j){
    cell.addEventListener("click",(e)=>{
        let rowId = i+1;
        let colId = String.fromCharCode(65+j)
        addressBar.value = `${rowId}${colId}`

    })
}
