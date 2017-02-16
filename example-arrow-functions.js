var names = ['lantz', 'bob', 'fritz']
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// })
//
// names.forEach((name)=> {
//   console.log('arrowFunc', name);
//   console.log('some other crap');
// })
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe("Lantz"));
//
// var person = {
//   name: 'bob',
//   greet: function (){
//     names.forEach ((name)=> {
//       console.log(this.name + ' says hey fucker to ' + name)
//     })
//   }
// }
//
// person.greet();

//Challenge

function add (a, b) {
  return a + b;
}

// addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4, 7));
//addExpression
var addExpression = (a, b) => a + b;

console.log(addExpression(3, 7));
// console.log(add(1, 3));
// console.log(add(9, 0));
