(function () {
  'use strict';

  Array.prototype.contains = Array.prototype.contains || function (element) {
    return this.indexOf(element) > -1;
  };

  Array.prototype.first = Array.prototype.first || function () {
    return this[0] || null;
  };

  Array.prototype.last = Array.prototype.last || function () {
    return this[this.size() - 1] || null;
  };

  Array.prototype.size = Array.prototype.size || function () {
    return this.length;
  };

  Array.prototype.isEmpty = Array.prototype.isEmpty || function() {
    return this.length == 0;
  };

  Array.prototype.removeAt = Array.prototype.removeAt || function (index) {
    return this.splice(index, 1)[0];
  };

  Array.prototype.remove = Array.prototype.remove || function (object) {
    if (!this.contains(object)) {
      return undefined;
    }

    var index = this.indexOf(object);
    return this.removeAt(index);
  };

})();
;(function () {
  'use strict';
  //NOT IMPLEMENTED YET!!
})();
;(function () {
  'use strict';
  //NOT IMPLEMENTED YET!!
})();
;(function () {
  'use strict';

  String.prototype.capitalize = String.prototype.captalize || function() {
    return this.charAt( 0 ).toUpperCase() + this.substring( 1 ).toLowerCase();
  }

  String.prototype.contains = String.prototype.contains || function(string, caseInsensitive) {
    if(caseInsensitive) return this.toLowerCase().indexOf(string.toLowerCase()) > -1;
    return this.indexOf(string) > -1;
  }

  String.prototype.startsWith = String.prototype.startsWith || function(string, caseInsensitive) {
    if (caseInsensitive) return this.toLowerCase().indexOf(string.toLowerCase()) === 0;
    return this.indexOf(string) === 0;
  }

})();
