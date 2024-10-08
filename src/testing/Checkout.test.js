import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Checkout from '../components/Checkout/Checkout';



test('renders the heading', () => {
    render(<Checkout />);
    const headingElement = screen.getByText(/Checkout page+/i);
    expect(headingElement).toBeInTheDocument()
  }); 