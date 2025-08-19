import { render } from '@testing-library/react';

import BlogSecondShared from './second-shared';

describe('BlogSecondShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogSecondShared />);
    expect(baseElement).toBeTruthy();
  });
});
