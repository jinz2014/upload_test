// JSON object

var person = {
  name : 'Jim Jin',
  sex  : 'Male',
  race : 'Asian',
  email: 'jxx@email.sc.edu',
  address : {
    city : 'Columbia',
    country : 'USA'  
  }
};

console.log(person);

for (var att in person) {
  console.log(att + " : " + person[att]);
}

// array of data objects
var persons = [
{
  name : 'Yan Zhou',
  sex  : 'Male',
  race : 'Asian',
  email: 'joseph@hotmail.com',
  address : {
    city : 'Columbia',
    country : 'USA'  
  }
},

{
  name : 'Jim Jin',
  sex  : 'Male',
  race : 'Asian',
  email: 'jxx@email.sc.edu',
  address : {
    city : 'Columbia',
    country : 'USA'  
  }
}];

console.log(persons);

// print each data object
for (var p in persons) {
  console.log(persons[p]);
}

// access an object using dot access
console.log(persons[0].address.city == 'Columbia' ? true : false);
