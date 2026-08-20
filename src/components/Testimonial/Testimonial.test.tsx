import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Testimonial } from './Testimonial';

describe('Testimonial', () => {
  const props = {
    type: 'testimonial' as const,
    id: 'testimonial',
    quote: 'The platform helped us build better experiences.',
    author: 'Jane Smith',
    role: 'Product Designer',
  };

  it('renders the quote', () => {
    render(<Testimonial {...props} />);

    expect(
      screen.getByText('“The platform helped us build better experiences.”')
    ).toBeInTheDocument();
  });

  it('renders the author', () => {
    render(<Testimonial {...props} />);

    expect(
      screen.getByRole('heading', {
        name: 'Jane Smith',
      })
    ).toBeInTheDocument();
  });

  it('renders the role when provided', () => {
    render(<Testimonial {...props} />);

    expect(screen.getByText('Product Designer')).toBeInTheDocument();
  });

  it('does not render the role when it is not provided', () => {
    render(<Testimonial {...props} role={undefined} />);

    expect(screen.queryByText('Product Designer')).not.toBeInTheDocument();
  });
});
