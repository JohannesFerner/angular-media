'use strict';
angular.module('angular.media', ['debounce']).run(['$rootScope', '$media', function ($rootScope, $media) {
  $rootScope.$media = $media;
}]);