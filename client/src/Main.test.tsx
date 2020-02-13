
import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';


test('should render', () => {
    const { getByTestId } = render(<Main />);
    expect(getByTestId('app-container')).toBeDefined();
});