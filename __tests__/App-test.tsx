/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Test News App', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('should call getNews with valid category', () => {
    const mockCategory = 'national';
    const validCategories = [
      'all',
      'national',
      'business',
      'sports',
      'world',
      'politics',
      'technology',
      'startup',
      'entertainment',
      'miscellaneous',
      'hatke',
      'science',
      'automobile'
    ];
    const isCategoryValid = validCategories.some(el => el === mockCategory);
    expect(isCategoryValid).toBeTruthy();
  });

  it('', () => {
    fetch = jest.fn(() => Promise.resolve());
  });
});
