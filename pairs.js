

function groups(size) {
  let students = ["Ollie", "Ahmed", "Jose", "Julius", "James", "Alex",
  "Edem", "Ethan", "Harry", "Michael", "Ralph", "Phoebe", "Hamza", "Sheila",
  "Matt", "Rafal"];
let pairs = [];
let temp = 0;
let i=0
while (i < students.length-1) {
  temp = Math.floor(Math.random() * students.length);
  pairs.push(students[temp]);
  students.splice(temp, 1);
}
pairs.push(students[0]);
i=0
let output = "";
if (size == 2) {
  for (let i2 = 0; i2 < pairs.length; i2+=2) {
    i++;
    output += `Pair ${i} is ${pairs[i2]} and ${pairs[i2+1]} \n`;
    output += " <br> ";
    }
  }
if (size === 3) {
    for (let i2 = 0; i2 < pairs.length-1; i2+=3) {
    i++;
    output += `Group ${i} is ${pairs[i2]}, ${pairs[i2+1]} and ${pairs[i2+2]}\n`;
    }
  let randGroup = Math.floor((Math.random() * 5) + 1);
  output += `And ${pairs[15]} is in Group ${randGroup}.`;
  }

  document.getElementById('show').innerHTML=output;


}
