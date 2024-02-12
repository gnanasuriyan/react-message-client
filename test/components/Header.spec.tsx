import React from 'react';
import { fireEvent, render, screen } from 'test-utils';

import { logOut } from '~/actions';

import Header from '~/components/Header';

const mockDispatch = vi.fn();

describe('Header', () => {
  it('should render properly', () => {
    render(<Header isAuthenticated={true} name={"some name"}/>);

    expect(screen.getByRole('banner')).toMatchSnapshot();
  });

  it('should handle clicks', async () => {
    render(<Header isAuthenticated={true} name={"some name"} />, { mockDispatch });
    fireEvent.click(screen.getByRole('button')!);

    expect(mockDispatch).toHaveBeenCalledWith(logOut());
  });
});
