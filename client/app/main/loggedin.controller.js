angular.module('buildingApp')
  .controller('LoggedinCtrl', function($scope,
				       $window,
				       CourseService,
				       LanguageService) {

    $scope.people = [
      { ranking: "01",
	avatarUrl: "https://avatars3.githubusercontent.com/u/1558742?v=3&s=192",
	githubUrl: "https://github.com/insanehong",
	name: "insanehong",
	active: 7,
	influential: 85 
      },
      { ranking: "02",
	avatarUrl: "https://avatars0.githubusercontent.com/u/518869?v=3&s=192",
	name: "daclouds",
	githubUrl: "https://github.com/daclouds",
	active: 37,
	influential: 27 
      },
      { ranking: "03",
	avatarUrl: "https://avatars2.githubusercontent.com/u/8074890?v=3&s=192",
	name: "urstory",
	githubUrl: "https://github.com/urstory",
	active: 17,
	influential: 35 
      },
      { ranking: "04",
	avatarUrl: "https://avatars0.githubusercontent.com/u/1144643?v=3&s=192",
	githubUrl: "https://github.com/NohSeho",
	name: "NohSeho",
	active: 27,
	influential: 13
      },
      { ranking: "05",
	avatarUrl: "https://avatars0.githubusercontent.com/u/4968473?v=3&s=192",
	githubUrl: "https://github.com/1ambda",
	profileUrl: "/profile",
	name: "1ambda",
	active: 47,
	influential: 7 
      },
      { ranking: "06",
	avatarUrl: "https://avatars1.githubusercontent.com/u/7099266?v=3&s=192",
	githubUrl: "https://github.com/ChoDuk",
	name: "ChoDuk",
	active: 5,
	influential: 11
      },
      { ranking: "07",
	avatarUrl: "https://avatars2.githubusercontent.com/u/11022719?v=3&s=192",
	githubUrl: "https://github.com/torreswoo",
	name: "toresswoo",
	active: 25,
	influential: 19 
      },
      { ranking: "08",
	avatarUrl: "https://avatars3.githubusercontent.com/u/11022697?v=3&s=192",
	githubUrl: "https://github.com/nyybb",
	name: "nyybb",
	active: 7,
	influential: 17 
      },
      { ranking: "09",
	avatarUrl: "https://avatars1.githubusercontent.com/u/6346314?v=3&s=192",
	githubUrl: "https://github.com/yjk891",
	name: "yjk891",
	active: 7,
	influential: 1
      },
      { ranking: "10",
	avatarUrl: "https://avatars1.githubusercontent.com/u/11022692?v=3&s=192",
	githubUrl: "https://github.com/TheGreatCho",
	name: "TheGreatCho",
	active: 10,
	influential: 0 
      }
    ];

    $scope.goGithub = function(url) {
      $window.open(url, '_blank');
    };
    
    $scope.langs = LanguageService.getLanguages();
    $scope.selected = undefined;
    $scope.courses = CourseService.getCourse();
  });
