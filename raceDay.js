let raceNumber = Math.floor(Math.random() * 1000);
//choose the age and registration
var registeredEarly = false;
var runnerAge = 18;
//to get a race number above 1000
if (runnerAge > 18 && registeredEarly){
  raceNumber += 1000;
}
//to output race time depending on registration and age
if (runnerAge > 18 && registeredEarly){
  console.log(`Your race will begin at 9:30am. Your race number is: ${raceNumber}`);
}else if(runnerAge > 18 && !registeredEarly){
  console.log(`Your race will begin at 11:00am. Your race number is: ${raceNumber}`);
}else if (runnerAge < 18){
  console.log(`Your race begins at 12:30pm. Your race number is :${raceNumber}`);
}else {
  console.log("Please see the registration desk");
}