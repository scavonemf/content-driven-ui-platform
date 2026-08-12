import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the title', () => {
    render(<Hero title="Welcome to our website" />);

    expect(
      screen.getByRole('heading', {
        name: 'Welcome to our website',
      })
    ).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(
      <Hero
        title="Welcome to our website"
        description="We provide the best services."
      />
    );

    expect(
      screen.getByText('We provide the best services.')
    ).toBeInTheDocument();
  });

  it('renders the CTA link', () => {
    render(
      <Hero
        title="Welcome to our website"
        ctaText="Get Started"
        ctaHref="/get-started"
      />
    );

    const link = screen.getByRole('link', {
      name: 'Get Started',
    });

    expect(link).toHaveAttribute('href', '/get-started');
  });

  it('does not render the CTA when ctaHref is missing', () => {
    render(<Hero title="Welcome to our website" ctaText="Get Started" />);

    expect(
      screen.queryByRole('link', {
        name: 'Get Started',
      })
    ).not.toBeInTheDocument();
  });
});
