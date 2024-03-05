// @vitest-environment jsdom
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import CharacterList from './CharacterList';
import { Character } from '../types/Character';

describe('CharacterList component', () => {
  test('should not render anything when character list is empty', () => {
    const characters: Character[] = [];
    render(<CharacterList characters={characters} />);
    expect(document.getElementsByTagName('ol')).toBeDefined();
    expect(Array.from(document.querySelectorAll('li'))).toHaveLength(0);
  });

  test('should render given characters', () => {
    const characters: Character[] = [
      {
        id: 1,
        name: 'Name1',
        gender: 'male',
        image: '',
        created: new Date().toString(),
      },
      {
        id: 2,
        name: 'Name2',
        gender: 'female',
        image: '',
        created: new Date().toString(),
      },
    ];
    render(<CharacterList characters={characters} />);
    expect(document.getElementsByTagName('ol')).toBeDefined();
    expect(Array.from(document.querySelectorAll('li'))).toHaveLength(2);
  });
});
