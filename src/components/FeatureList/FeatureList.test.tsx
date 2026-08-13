import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { FeatureList } from './FeatureList';

describe('FeatureList', () => {
  const props = {
    type: 'feature-list' as const,
    id: 'features',
    title: 'Why this platform?',
    items: [
      'Reusable UI components',
      'Accessible interfaces',
      'Performance focused',
    ],
  };

  it('renders the section title', () => {
    render(<FeatureList {...props} />);

    expect(
      screen.getByRole('heading', {
        name: 'Why this platform?',
      })
    ).toBeInTheDocument();
  });

  it('renders all feature items', () => {
    render(<FeatureList {...props} />);

    expect(screen.getByText('Reusable UI components')).toBeInTheDocument();

    expect(screen.getByText('Accessible interfaces')).toBeInTheDocument();

    expect(screen.getByText('Performance focused')).toBeInTheDocument();
  });

  it('renders the features as a list', () => {
    render(<FeatureList {...props} />);

    expect(screen.getByRole('list')).toBeInTheDocument();

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
