var counter1 = 0;
var addglobal = () => {
  counter1 += 1;
  console.log(counter1);
}
addglobal();
addglobal();
addglobal(); //123
//--------------------------
var addlocal = () => {
  var counter2 = 0;
  counter2 += 1;
  console.log(counter2);
}
addlocal();
addlocal();
addlocal(); //111
//---------------------------
var addclosure = (() => {
  var counter3 = 0;
  return () => {
    counter3 += 1;
    console.log(counter3);
  };
}) ();
addclosure();
addclosure();
addclosure(); //123
//---------------------------
var add = (x) => {
  return (y) => {
    console.log(x+y);
  };
}
var add5 = add(5);
add5(3); //8

var add5 = function(y) {
  return 5+y;
}
