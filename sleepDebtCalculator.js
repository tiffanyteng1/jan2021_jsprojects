// find number of hours slept depending on the day 
//user enters their own hours 
const getSleepHours = day => {
    day = day.toLowerCase(); 
    switch (day){
      case 'monday':
        return 7;
        break;
      case 'tuesday':
        return 5;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursay':
        return 7;
        break
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 9;
        break;
      case 'sunday':
        return 9;
        break;
      default:
        break;
    }
  };
  
  const getActualSleepHours = () =>{
   // add all the hours slept in a week together
   let hoursWeek = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') ;
  
   return hoursWeek;
  }
  
  const getIdealSleepHours = (idealHours) => {
    return idealHours*7;
  }
  
  const calculateSleepDebt =()=>{
    //compare if user actually got enough sleep 
    let actualSleepHours = getActualSleepHours;
    let idealSleepHours = getIdealSleepHours(7);
    if (actualSleepHours === idealSleepHours){
      console.log('Perfect amount of sleep!');
    } else if ( actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed!');
    }else {
      console.log('You need more sleep!');
    }
  }
  calculateSleepDebt();