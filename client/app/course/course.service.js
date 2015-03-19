'use strict';

angular.module('buildingApp')
  .service('CourseService', function(_) {

    this.getCourse = function() {

      var courses = [
	{ name: "Pattern Discovery",
	  url: "https://www.coursera.org/course/patterndiscovery",
	  completed: 7,
	  university: 'Illinois',
	  provider: 'Coursera' },
	{ name: "Machine Learning",
	  url: "",
	  completed: 140,
	  university: 'Stanford',
	  provider: 'Coursera' },
	{ name: "Cluster Analysis",
	  url: "https://www.coursera.org/course/clusteranalysis",
	  completed: 0,
	  university: 'Illinois',
	  provider: 'Coursera' },
	{ name: "Neural Networks",
	  url: "https://www.coursera.org/course/neuralnets",
	  completed: 80,
	  university: 'Toronto',
	  provider: 'Coursera' },
	{ name: "Practical Machine Learning",
	  url: "https://www.coursera.org/course/predmachlearn",
	  completed: 15,
	  university: 'Johns Hopkins',
	  provider: 'Coursera' },
	{ name: "Process Mining",
	  url: "https://www.coursera.org/course/procmin",
	  completed: 5,
	  university: 'Eindhoven',
	  provider: 'Coursera' }
      ];

      var sorted = _.sortBy(courses, function(course) {
	return -(course.completed);
      });

      return sorted;
    };
    
    this.getCategory = function () {
      // https://api.coursera.org/api/catalog.v1/categories 
      var categories = [{"id":5,"name":"Mathematics","shortName":"math","links":{}},{"id":10,"name":"Biology & Life Sciences","shortName":"biology","links":{}},{"id":24,"name":"Chemistry","shortName":"chemistry","links":{}},{"id":25,"name":"Energy & Earth Sciences","shortName":"energy","links":{}},{"id":14,"name":"Education","shortName":"education","links":{}},{"id":20,"name":"Social Sciences","shortName":"socsci","links":{}},{"id":1,"name":"Computer Science: Theory","shortName":"cs-theory","links":{}},{"id":6,"name":"Humanities ","shortName":"humanities","links":{}},{"id":21,"name":"Law","shortName":"law","links":{}},{"id":9,"name":"Physical & Earth Sciences","shortName":"physical","links":{}},{"id":13,"name":"Business & Management","shortName":"business","links":{}},{"id":2,"name":"Economics & Finance","shortName":"economics","links":{}},{"id":17,"name":"Computer Science: Artificial Intelligence","shortName":"cs-ai","links":{}},{"id":22,"name":"Arts","shortName":"arts","links":{}},{"id":12,"name":"Computer Science: Software Engineering","shortName":"cs-programming","links":{}},{"id":3,"name":"Medicine","shortName":"medicine","links":{}},{"id":18,"name":"Music, Film, and Audio","shortName":"music","links":{}},{"id":16,"name":"Statistics and Data Analysis","shortName":"stats","links":{}},{"id":11,"name":"Computer Science: Systems & Security","shortName":"cs-systems","links":{}},{"id":26,"name":"Teacher Professional Development","shortName":"teacherpd","links":{}},{"id":23,"name":"Physics","shortName":"physics","links":{}},{"id":8,"name":"Health & Society","shortName":"health","links":{}},{"id":19,"name":"Food and Nutrition","shortName":"food","links":{}},{"id":4,"name":"Information, Tech & Design","shortName":"infotech","links":{}},{"id":15,"name":"Engineering","shortName":"ee","links":{}}];

      var plucked = _.pluck(categories, 'name');
      return plucked; 
    };
  });
