let classes = [
  {
    "name":"Inteligencia Artificial",
    "hours":4
  },
  {
    "name":"Sistemas Embebidos",
    "hours":2
  },
  {
    "name":"Proyecto de desarrollo de software",
    "hours":4
  },
  {
    "name":"Ciencia de datos",
    "hours":3
  },
];

function showClasses() {
  var table = document.getElementById("availableClasses");
  for (var i = 0; i < classes.length; i++) {
    // Insert a row at the end of table
    var newRow = table.insertRow();

    // Insert a cell at the end of the row
    var newCell = newRow.insertCell();

    // Append a text node to the cell
    var newText = document.createTextNode(classes[i].name);
    newCell.appendChild(newText);

    // Insert a cell at the end of the row
    var newCell2 = newRow.insertCell();

    // Append a text node to the cell
    var newText2 = document.createTextNode(classes[i].hours);
    newCell2.appendChild(newText2);
 }

}
showClasses();

function sortClasses(){
    var hours = document.getElementById("hours").value;
    var result = document.getElementById("result");
    possibleClasses=[];
    totalDifference=10;
    for(var i=0;i<classes.length;i++){
        for(var j=0;j<classes.length;j++){
            if(i ==j) continue;
            var sum = classes[i].hours + classes[j].hours
            if(sum <= hours){
                var difference = Math.abs(hours - sum)
                if (difference < totalDifference){
                    totalDifference = difference;
                    possibleClasses = [classes[i],classes[j]];
                }
            }
        }
    }

    showPossibleClasses(possibleClasses, result);
    return possibleClasses;

}

function showPossibleClasses(possibleClasses, result){
    result.innerHTML="";    
    result.innerHTML+=" <br> Las mejores clases para tu horario son: <br>";
    for(var i=0; i<possibleClasses.length;i++){
        result.innerHTML+="-> "+possibleClasses[i].name + " (" + possibleClasses[i].hours+")<br>";
    }

}
