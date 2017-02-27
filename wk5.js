function b1() {
  var myVar;
  console.log(myVar);
}

function a1() {
  var myVar = 1;
  b1();
  console.log(myVar);
}

var myVar = 2;
console.log(myVar); //undefined
a1();

var firstname = 'Simon';
var addSurname = () => {
  var surname = 'Holmes';
  var fullname = firstname + ' ' + surname;
  //var firstname = 'David'; //undefined Holmes
  console.log(fullname);
}
console.log(addSurname());
