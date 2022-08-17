const url = "https://www.datos.gov.co/resource/xdk5-pm3f.json";
let country;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.length);
    country = data;
    loadDepartments(data);
  })
  .catch((err) => console.log(err));

function loadDepartments(data) {
  let list = document.getElementById("department");
  let departments = getUnique(data, "departamento");
  var option = "";
  for (var i = 0; i < departments.length; i++) {
    option += `<option value="${departments[i]}">${departments[i]}</option> `;
  }

  list.innerHTML += option;
}

function getUnique(data, key) {
  const uniques = [...new Set(data.map((item) => item.departamento))];
  return uniques;
}

function getMunicipalities() {
  let dept = document.getElementById("department").value;
  console.log(dept);
  var result = [];
  country.forEach(function (obj, i) {
    if (obj.departamento === dept) {
      result.push(obj);
    }
  });
  showMunicipalities(result);
  //municipalities
}
function showMunicipalities(data) {
  var table = document.getElementById("municipalities");
  table.innerHTML = "";
  table.innerHTML +=
    " <tr> <th>Municipio </th><th>Código DANE del municipio</th></tr>";
  for (var i = 0; i < data.length; i++) {
    // Insert a row at the end of table
    var newRow = table.insertRow();

    // Insert a cell at the end of the row
    var newCell = newRow.insertCell();

    // Append a text node to the cell
    var newText = document.createTextNode(data[i].municipio);
    newCell.appendChild(newText);

    // Insert a cell at the end of the row
    var newCell2 = newRow.insertCell();

    // Append a text node to the cell
    var newText2 = document.createTextNode(data[i].c_digo_dane_del_municipio);
    newCell2.appendChild(newText2);
  }
}
