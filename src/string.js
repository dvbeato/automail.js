(function () {
  'use strict';

  String.prototype.capitalize = String.prototype.captalize || function() {
		return this.charAt( 0 ).toUpperCase() + this.substring( 1 ).toLowerCase();
	}

})();
