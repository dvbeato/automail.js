
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
});
