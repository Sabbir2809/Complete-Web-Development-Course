class Instructor{
  name;
  designation = 'Web Couse Instructor';
  team = 'Web Team';
  location;

  constructor(name, location){
    this.name = name;
    this.location = location;
  }

  startSupportSession(time){
    console.log(`Start The Support Session at ${time}`);
  }
  createQuiz(module){
    console.log(`Please Create Quiz for Module ${module}`);
  }
}

const obj1 = new Instructor('Sabbir', 'Jalalabad');

console.log(obj1);

obj1.startSupportSession('9.00');
obj1.createQuiz(32);

