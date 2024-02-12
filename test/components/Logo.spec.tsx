import React from 'react';
import { render } from 'test-utils';

import Logo from '~/components/Logo';

describe('Logo', () => {
  it('should render properly', () => {
    const { container } = render(<Logo name={"Some test name"}/>);

    expect(container).toMatchSnapshot();
  });
});
