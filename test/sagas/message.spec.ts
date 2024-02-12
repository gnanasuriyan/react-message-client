import { expectSaga } from 'redux-saga-test-plan';
import { mergeState } from 'test-utils';

import { getMessageList } from '~/actions';
import message, { getMessageListSaga } from '~/sagas/message';

import messageReducer from '~/store/slices/message';

import messageListResponse from 'test/__fixtures__/message-response.json';

describe('message', () => {
  it('should have the expected watchers', () =>
    expectSaga(message)
      .run({ silenceTimeout: true })
      .then(result => {
        expect(result.toJSON()).toMatchSnapshot();
      }));

  // describe('getMessageList', () => {
  //   const initialAction = getMessageList();
  //   const initialState = () => ({ message: messageReducer(undefined, initialAction) });

  //   it('should handle SUCCESS', async () => {
  //     fetchMock.mockResponse(JSON.stringify({ items: messageListResponse}));

  //     const result = await expectSaga(getMessageListSaga, initialAction).withReducer(initialState).run();

  //     expect(result.toJSON()).toMatchSnapshot();
  //   });
  // });
});
