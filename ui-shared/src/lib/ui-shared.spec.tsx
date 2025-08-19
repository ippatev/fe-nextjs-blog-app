import { render } from '@testing-library/react';

import BlogUiShared from './ui-shared';

describe('BlogUiShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogUiShared />);
    expect(baseElement).toBeTruthy();
  });
});
