
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

  describe('startsWith', function() {
    it('should return true when string starts with another string', function() {
      expect('automail'.startsWith('auto')).toBeTruthy();
      expect('automail'.startsWith('text')).toBeFalsy();
      expect('automail'.startsWith('')).toBeTruthy();
      expect('automail'.startsWith(undefined)).toBeFalsy();
      expect('AutoMail'.startsWith('auto')).toBeFalsy();
    });
    it('should be case insensitive', function() {
      expect('AutoMail'.startsWith('auto', true)).toBeTruthy();
    });
  });
});
