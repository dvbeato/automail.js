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
    var index = this.indexOf(object);
    return this.removeAt(index);
  };

})();
