import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Hero } from './Hero';

const defaultProps = {
  type: 'hero' as const,
  id: 'hero-test',
  title: 'Welcome to our website',
  description: 'This is our website description.',
  cta: {
    label: 'Get Started',
    href: '/get-started',
  },
};

describe('Hero', () => {
  it('renders the title', () => {
    render(<Hero {...defaultProps} />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Welcome to our website',
      })
    ).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Hero {...defaultProps} />);

    expect(
      screen.getByText('This is our website description.')
    ).toBeInTheDocument();
  });

  it('renders the CTA link', () => {
    render(<Hero {...defaultProps} />);

    const link = screen.getByRole('link', {
      name: 'Get Started',
    });

    expect(link).toHaveAttribute('href', '/get-started');
  });

  it('does not render the CTA when it is not provided', () => {
    render(<Hero {...defaultProps} cta={undefined} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
