import React from 'react';
import { render } from '@testing-library/react';

import Title from '~/components/Title';

describe('Title component', () => {
  it('should to show default text title', () => {
    const { getByText } = render(<Title />);

    expect(getByText('React-Seed', { exact: true })).toBeInTheDocument();
  });

  it('should to show informed text in title', () => {
    const { getByText } = render(<Title>Testing</Title>);

    expect(getByText('Testing', { exact: true })).toBeInTheDocument();
  });
});
