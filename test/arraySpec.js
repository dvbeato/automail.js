
describe('Array', function() {
  describe('contains', function() {
    it('should be true when contains a element in array', function() {
      expect([1,2,3].contains(2)).toBeTruthy();
    });

    it('should be false when not contains a element in array', function() {
      expect([1,2,3].contains(4)).toBeFalsy();
    });
  });

  describe('first', function() {
    it('should return first element of array', function() {
      expect([1].first()).toBe(1);
      expect([1,2].first()).toBe(1);
      expect([1,2,3].first()).toBe(1);
    });

    it('should return null when array be empty', function() {
      expect([].first()).toBeNull();
    });
  });

  describe('last', function() {
    it('should return last element of array', function() {
      expect([1].last()).toBe(1);
      expect([1,2].last()).toBe(2);
      expect([1,2,3].last()).toBe(3);
    });

    it('should return null when array be empty', function() {
      expect([].last()).toBeNull();
    });
  });

  describe('size', function() {
    it('should return the size of array', function() {
      expect([].size()).toBe(0);
      expect([1].size()).toBe(1);
      expect([1,2].size()).toBe(2);
      expect([1,2,3].size()).toBe(3);
    });
  });

  describe('isEmpty', function() {
    it('should return true when array has no element', function() {
      expect([].isEmpty()).toBeTruthy();
    });

    it('should return false when array has one or more elements', function() {
      expect([1].isEmpty()).toBeFalsy();
      expect([1,2].isEmpty()).toBeFalsy();
      expect([1,2,3].isEmpty()).toBeFalsy();
    });
  });

  describe('removeAt', function() {
    it('should remove an element from array by index', function() {
      var array;

      array = [1,2,3];
      expect(array.removeAt(0)).toBe(1);
      expect(array).toEqual([2,3]);

      array = [1,2,3];
      expect(array.removeAt(1)).toBe(2);
      expect(array).toEqual([1,3]);

      array = [1,2,3];
      expect(array.removeAt(2)).toBe(3);
      expect(array).toEqual([1,2]);

      array = [1,2,3];
      expect(array.removeAt(-1)).toBe(3);
      expect(array).toEqual([1,2]);

      array = [1,2,3];
      expect(array.removeAt(-2)).toBe(2);
      expect(array).toEqual([1,3]);

      array = [1,2,3];
      expect(array.removeAt(-3)).toBe(1);
      expect(array).toEqual([2,3]);

      array = [1,2,3];
      expect(array.removeAt(9)).toBeUndefined();
      expect(array).toEqual([1,2,3]);
    });
  });

  describe('remove', function() {
    it('should remove an element from array', function() {
      var array;

      array = [1,2,3];
      expect(array.remove(1)).toBe(1);
      expect(array).toEqual([2,3]);

      array = [1,2,3];
      expect(array.remove(2)).toBe(2);
      expect(array).toEqual([1,3]);

      array = [1,2,3];
      expect(array.remove(3)).toBe(3);
      expect(array).toEqual([1,2]);

      array = [1,2,3];
      expect(array.remove(4)).toBeUndefined();
      expect(array).toEqual([1,2,3]);
    });
  });

});
