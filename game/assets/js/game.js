const myTable = document.querySelector("#cards");

function insertTitleCell(_value, _hook) {
  const myTitleCell = document.createElement("th");
  myTitleCell.style.fontWeight = "bold";
  myTitleCell.textContent = _value;
  _hook.appendChild(myTitleCell);
}

function displayTable(_data) {
  const myThead = myTable.createTHead();
  const MyTitleRow = myThead.insertRow();
  for (const key in _data[0]) {
    insertTitleCell(key, MyTitleRow);
  }
  const myTbody = myTable.createTBody();
  for (let i = 0; i < _data.length; i++) {
    const myRow = myTbody.insertRow();
    for (const key in _data[0]) {
      const myCell = myRow.insertCell();
      if (key === "description" && _data[i][key] == undefined) {
        myCell.textContent = "non renseigné";
      } else {
        myCell.textContent = _data[i][key];
      }
    }
  }
}

fetch("https://arfp.github.io/tp/web/javascript/03-cardgame/cardgame.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayTable(data);
    console.log(data);
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération ou du parsing :", error);
  });