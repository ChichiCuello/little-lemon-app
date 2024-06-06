import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Main from './Main';

describe('Main Component', () => {
  test('renders the form', () => {
    const { getByText, getByLabelText } = render(<Main />);

    // Test that form elements are rendered
    expect(getByText('Reservation')).toBeInTheDocument();
    expect(getByLabelText('Reservation Date:')).toBeInTheDocument();
    expect(getByLabelText('Number of Diners:')).toBeInTheDocument();
    // Add more similar assertions for other form elements

    // Test form submission
    fireEvent.click(getByText('Book'));
    // Add assertions for modal appearance after form submission
  });

  // Add more test cases as needed
});
