const a = 'Jaila'
const b = 'Chanchal'
const c = 'Rashmi'
const d = 'Sophea'
const e = 'Yesenia'

const randName = (person) => {
    var person = Math.floor(Math.random() * 5) + 1;
    if (person === 1) {
        return a
    }
    else if (person === 2) {
        return b;
    }
    else if (person === 3) {
        return c;
    }
    else if (person === 4) {
        return d;
    }
    else if (person === 5)
        return e; 
    } 

const numOf = prompt("How many names would you like?");
if (numOf === 1){
    alert(randName())
} else if (numOf === 2 ) {
    alert(randName()+ ' ' + randName())
} else if (numOf === 3) {
    alert(randName() + " " + randName() + " " + randName());
}else if (numOf === 4) {
  alert (randName()+ ' ' + randName()+ " " + randName()+ ' ' + randName());
} else if (numOf === 5) {
    alert(randName()+ ' ' + randName() + " " + randName()+ ' ' + randName() + " " + randName());
} else {
    alert('Please enter a number 1 through 5');
}

let clickME = () => numOf;

const btn = document.getElementById("clickMe");

btn.onclick= clickME;
//const random = () => {

  //  var listOfPeople = [];
  //  listOfPeople.push(randName(), randName(), randName(), randName());
  //  return listOfPeople; 
//}


