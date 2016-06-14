(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    console.log('articles controller');
    Projects.fetchall(projectView.initIndexPage);

    $('#about').hide();
    $('#projects').show();

  };

  module.projectsController = projectsController;
})(window);
