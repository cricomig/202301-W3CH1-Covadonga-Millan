import { Character } from './character';

describe('Given an interface Character', () => {
  describe('When we define a character', () => {
    test('Then if the character is 2 years old', () => {
      const randomCharacter = Character('Cova', 'Millan', 2, 'alive');
      expect(randomCharacter).toHaveProperty('age');
    });
  });
});
