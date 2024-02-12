import React from 'react';
import { render, screen, waitForElementToBeRemoved } from 'test-utils';

import Message from '~/routes/Message';

describe('Message', () => {
  it('should render properly', async () => {
    render(<Message />);
    expect(screen.getByTestId('Message')).toMatchSnapshot();
  });
});
