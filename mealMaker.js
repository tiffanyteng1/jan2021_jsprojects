// generates a random meal from the given menu items
const menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: [],
    },
    get appetizers(){
      return this._courses._appetizers;
    },
    set appetizers(app){
      this._courses._appetizers.push(app);
    },
    get mains(){
      return this._courses._mains;
    },
    set mains(main){
      this._courses._mains.push(main);
    },
    get desserts(){
      return this._courses._desserts;
    },
     set desserts(desserts){
  
      this._courses._desserts.push(desserts);
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    //adds the dish and price to the courses based on specficied course name
    addDishToCourse(courseName, dishName, dishPrice){
      let dish = {
        dishName,
        dishPrice
      };
      if (courseName === 'appetizers'){
        this.appetizers.push(dish)
      }else if (courseName === 'mains'){
        this.mains.push(dish)
      }else if (courseName === 'desserts'){
        this.desserts.push(dish)
      }else{
        console.log('not a valid course ')
      }
    
    },
    //chooses a random dish 
    getRandomDishFromCourse(courseName){
      let dishes =[];
      if (courseName === 'appetizers'){
        dishes = this.appetizers
      }else if (courseName === 'mains'){
        dishes = this.mains
      }else if (courseName === 'desserts'){
        dishes = this.desserts
      }else{
        console.log('not a valid course ')
      }
      console.log(dishes)
      let randomNum = Math.floor(Math.random()*dishes.length); 
      return dishes[randomNum];
      console.log(dishes[randomNum])
    },
    //returns a random meal 
    generateRandomMeal(){
      let appetizer = this.getRandomDishFromCourse('appetizers')
      let main =  this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      let totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
      return 'Your meal: \n Appetizer:' + JSON.stringify(appetizer) + '\n Main: ' + JSON.stringify(main) + '\n Dessert:'  + JSON.stringify(dessert) + '\n Total Cost: ' + totalPrice ;
    }
  };
  
  menu.addDishToCourse('appetizers', 'salad', 19.75)
  menu.addDishToCourse('mains', 'steak', 27.75)
  menu.addDishToCourse('appetizers', 'calamari', 10.75)
  menu.addDishToCourse('desserts', 'cake', 9.75)
  menu.addDishToCourse('mains', 'salad', 19.75)
  menu.addDishToCourse('desserts', 'cupcake', 19.75)
  
  
  
  let meal =menu.generateRandomMeal()
  console.log(meal)