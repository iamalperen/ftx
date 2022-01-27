import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('<Header />', () => {
  test('it should mount', () => {
    const switchTheme = (): void => {};

    render(<Header switchTheme={switchTheme} />);

    const header = screen.getByTestId('Header');

    expect(header).toBeInTheDocument();
  });
});
