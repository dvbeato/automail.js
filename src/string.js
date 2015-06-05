(function () {
  'use strict';

  String.prototype.capitalize = String.prototype.captalize || function() {
    return this.charAt( 0 ).toUpperCase() + this.substring( 1 ).toLowerCase();
  }

  String.prototype.contains = String.prototype.contains || function(string, caseInsensitive) {
    if(caseInsensitive) return this.toLowerCase().indexOf(string.toLowerCase()) > -1;
    return this.indexOf(string) > -1;
  }

})();
