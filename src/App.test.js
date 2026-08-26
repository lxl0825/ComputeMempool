// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ComputeMempool title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ComputeMempool/i);
    expect(titleElement).toBeInTheDocument();
});
