(function () {

  'use strict';

  function trackDigests($rootScope) {
    function link($scope, $element, $attrs) {
      var count = 0;
      function countDigests() {
        count++;
        $element[0].innerHTML = '$digests: ' + count;
      }
      $rootScope.$watch(countDigests);
    }
    return {
      link: link
    };
  }

  trackDigests.$inject = ['$rootScope'];

  angular
    .module('voux.trackDigests', [])
    .directive('trackDigests', trackDigests);

})();
