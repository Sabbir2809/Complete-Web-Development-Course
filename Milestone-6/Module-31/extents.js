class teamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedback() {
    console.log(`${this.name} Thank You for your Feedback`);
  }
}

class Instructor extends teamMember {
  name;
  designation = 'Web Couse Instructor';
  team = 'Web Team';
  location;

  constructor(name, location) {
    super(name, location);
  }

  startSupportSession(time) {
    console.log(`Start The Support Session at ${time}`);
  }
  createQuiz(module) {
    console.log(`Please Create Quiz for Module ${module}`);
  }
}

class Developer extends teamMember {
  designation = 'Web Couse Instructor';
  team = 'Web Team';
  tech;

  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }

  developFeature(feature) {
    console.log(`Please Develop the ${feature}`);
  }
  release(version) {
    console.log(`Please Release the version ${version}`);
  }
}

class JobPlacement extends teamMember {
  designation = 'Job Placement';
  team = 'Web Team';
  region;

  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }

  provideResume(feature) {
    console.log(`Please Develop the ${feature}`);
  }
  prepareStudent(version) {
    console.log(`Please Release the version ${version}`);
  }
}

const sabbir = new Developer('Sabbir Hossain', 'Savar', 'React.Js');
console.log(sabbir);
sabbir.provideFeedback('Awesome');

const zarin = new JobPlacement('Umme Salma Zarin', 'Dhaka', 'Bangladesh');
console.log(zarin);
