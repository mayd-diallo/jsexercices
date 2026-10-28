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
  function rechercheMaxAttack(_data){
    let carteMaxAttack = _data[0];
    let valuelueMaxAttack= _data[0].attack;
    for (let i =1; i<_data.length; i++) {
      if (_data[i].attack > valuelueMaxAttack) {
        valuelueMaxAttack = _data[i].attack ;
        carteMaxAttack = _data[i];
      }
    }
    return carteMaxAttack;
    function searchMaxattackTri (_data) {
      const tabDecroissant =_data.sort((a, b)=>b.attack-a.attack);
      return tabDecroissant[0];
    }
  }