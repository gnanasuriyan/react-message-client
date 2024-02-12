import { getMessageList, getMessageListFailure, getMessageListSuccess } from '~/actions';

import reducer from '~/store/slices/message';

describe('slices/message', () => {
  describe('actions', () => {
    it('getMessageList', () => {
      expect(getMessageList()).toMatchSnapshot();
    });
  });

  describe('reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, { type: '', payload: {} })).toMatchSnapshot();
    });

    describe('getMessageList', () => {
      it('should handle REQUEST', () => {
        expect(reducer(undefined, getMessageList())).toMatchSnapshot();
      });

      it('should handle SUCCESS', () => {
        const initialState = reducer(undefined, getMessageList());

        expect(
          reducer(initialState, {
            type: getMessageList.type,
            payload: {
              data: [{ name: 'one' }],
            },
            meta: {
              query: 'react',
              updatedAt: 1234567890,
            },
          }),
        ).toMatchSnapshot();
      });

      it('should handle FAILURE', () => {
        const initialState = reducer(undefined, getMessageList('react'));

        expect(
          reducer(initialState, {
            type: getMessageList.type,
            payload: {
              message: 'Something failed',
            },
            meta: {
              query: 'react',
            },
          }),
        ).toMatchSnapshot();
      });
    });
  });
});
