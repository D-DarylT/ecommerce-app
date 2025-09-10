import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ResponsiveImage from '../components/ui/ResponsiveImage';

describe('ResponsiveImage', () => {
  it('renders with alt text', () => {
    render(<ResponsiveImage src="/test.jpg" alt="Test Image" />);
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
  });
});
