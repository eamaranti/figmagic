import { setupSpacingTokens } from '../bin/functions/setupSpacingTokens';

import { spacingFrame } from '../testdata/spacingFrame.mjs';

/*
test('It should normalize the unit, given a width, px basis, and a conversion type', () => {
  expect(setupSpacingTokens(400, 'px', 'rem')).toBe('25rem');
});
*/

test('It should throw an error if no parameter is provided', () => {
  expect(() => {
    setupSpacingTokens();
  }).toThrow();
});

test('It should return valid JSON for spacing elements, using "rem" spacing conversion', () => {
  expect(setupSpacingTokens(spacingFrame, 'rem')).toEqual(
    expect.objectContaining({
      huge: '5rem',
      large: '4.375rem',
      medium: '3.125rem',
      small: '1.5rem',
      tiny: '0.75rem'
    })
  );
});
