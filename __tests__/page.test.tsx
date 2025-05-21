import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

describe('Home page', () => {
  it('renders Korean dashboard text', () => {
    render(<Home />);
    expect(screen.getByText('대시보드!!')).toBeInTheDocument();
  });
});
