

// NOTE: MOST OF THE FUNCTIONS AND JQUERY STRUCTURE THAT I USED ARE HEAVILY
// BASED-ON THE PAIR-PROGRAMMING PROJECT TEMPLATE. I REWROTE ALL OF IT BY HAND TO LEARN,
// OMITTED ELEMENTS NOT NECESSARY TO THIS PORTFOLIO, ALTERED MOST NAMING SYSTEMS
// AS WELL AS ADDED NEW ELEMENTS AND PROPERTIES AS NEEDED.
(function (module) {
  Projects.all = [];

  function Projects(input) {
    this.title = input.title;
    this.role = input.role;
    this.projectUrl = input.projectUrl;
    this.completionDate = input.completionDate;
    this.body = input.body;

  }

  Projects.prototype.toHtml = function() {
  // var $newProject = $('article.template').clone();

    var articleTemplate = $('#template').html();
    var compiledTemplate = Handlebars.compile(articleTemplate);

    this.daysAgo = parseInt((new Date() - new Date(this.completionDate)) / 60 / 60 / 24 / 1000);
    this.publishStatus = this.completionDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

    return compiledTemplate(this);

  };


  Projects.loadAll = function(datas) {
    Projects.all = datas.map(function(i) {
      return new Projects(i);
    });
  };

  Projects.fetchall = function(callBack) {

    if (localStorage.rawData) {
      Projects.loadAll(
         JSON.parse(localStorage.getItem('rawData'))
          );
      // projectView.initIndexPage();
      callBack();
    }
    else {
      $.getJSON('data/blogobjects.json', function(datas) {
        localStorage.setItem('rawData', JSON.stringify(datas));
        Projects.loadAll(datas);
        // projectView.initIndexPage();
        callBack();
      });

    }
  };

  // Projects.allHours = function() {
  //   return Projects.all.map(function(project) {
  //     return project.Hours;
  //   })
  //   .reduce(function(accumulator, theProject) {
  //     return accumulator + theProject.Hours;
  //   }, 0);// Don't forget to read the docs on map and reduce!
  // };
  
  //  "Days to complete": 14,


  module.Projects = Projects;
})(window);
