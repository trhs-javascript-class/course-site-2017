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
      route: 'arrays',
      name: 'arrays',
      moduleId: 'resources/lessons/arrays',
      title: '3. Arrays',
      nav: true
    }, {
      route: 'loops',
      name: 'loops',
      moduleId: 'resources/lessons/loops',
      title: '4. Loops',
      nav: true
    }, {
      route: 'functions',
      name: 'functions',
      moduleId: 'resources/lessons/functions',
      title: '5. Functions',
      nav: true
    }, {
      route: 'html-basics',
      name: 'html-basics',
      moduleId: 'resources/lessons/html-basics',
      title: '6. HTML Basics',
      nav: true
    }, {
      route: 'html-more',
      name: 'html-more',
      moduleId: 'resources/lessons/html-more',
      title: '7. More HTML',
      nav: true
    }, {
      route: 'css-and-selectors',
      name: 'css-and-selectors',
      moduleId: 'resources/lessons/css-and-selectors',
      title: '8. CSS and Selectors',
      nav: true
    }, {
      route: 'jquery',
      name: 'jquery',
      moduleId: 'resources/lessons/jquery',
      title: '9. Using jQuery',
      nav: true
    }]);
  }
}
