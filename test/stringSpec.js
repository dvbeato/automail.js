
describe('String', function() {
  describe('captalize', function() {
    it('should capitalize a text', function() {
      expect('automail'.capitalize()).toBe('Automail');
      expect('Automail'.capitalize()).toBe('Automail');
      expect('AUTOMAIL'.capitalize()).toBe('Automail');
      expect('aUTOMAIL'.capitalize()).toBe('Automail');
      expect('AuToMaIl'.capitalize()).toBe('Automail');
      expect('a'.capitalize()).toBe('A');
      expect(''.capitalize()).toBe('');
    });
  });

  describe('contains', function() {
    it('should return true when string contains another string', function() {
      expect('automail'.contains('mail')).toBeTruthy();
      expect('automail'.contains('text')).toBeFalsy();
      expect('automail'.contains('')).toBeTruthy();
      expect('automail'.contains(undefined)).toBeFalsy();
      expect('AutoMail'.contains('mail')).toBeFalsy();
    });
    it('should be case insensitive', function() {
      expect('AutoMail'.contains('mail', true)).toBeTruthy();
    });
  });
});
