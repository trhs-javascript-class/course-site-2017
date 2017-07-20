export class LessonsIndex {
  configureRouter(config, router) {
    this.router = router;

    config.map([{
      route: ['', 'setup'],
      name: 'setup',
      moduleId: 'resources/lessons/setup',
      title: '1. Setup',
      nav: true
    }, {
      route: 'variables',
      name: 'variables-conditionals',
      moduleId: 'resources/lessons/variables-conditionals',
      title: '2. Variables & Conditionals',
      nav: true
    }, {
      route: 'loops',
      name: 'loops',
      moduleId: 'resources/lessons/loops',
      title: '3. Loops',
      nav: true
    }, {
      route: 'functions',
      name: 'functions',
      moduleId: 'resources/lessons/functions',
      title: '4. Functions',
      nav: true
    }, {
      route: 'html-css',
      name: 'html-css',
      moduleId: 'resources/lessons/html-css',
      title: '5. HTML & CSS',
      nav: true
    }, {
      route: 'jquery',
      name: 'jquery',
      moduleId: 'resources/lessons/jquery',
      title: '6. Using jQuery',
      nav: true
    }, {
      route: 'clock-project',
      name: 'clock-project',
      moduleId: 'resources/lessons/clock-project',
      title: '7. Clock Project',
      nav: true
    }]);
  }
}