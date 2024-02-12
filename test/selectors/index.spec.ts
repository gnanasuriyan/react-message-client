import { selectApp, selectMessage, selectUser } from '~/selectors';
import { configStore } from '~/store';

describe('selectors', () => {
  const store = configStore();

  describe('selectApp', () => {
    it('should return the app', () => {
      expect(selectApp(store.getState())).toMatchSnapshot();
    });
  });

  describe('selectMessage', () => {
    it('should return the github', () => {
      expect(selectMessage(store.getState())).toMatchSnapshot();
    });
  });

  describe('selectUser', () => {
    it('should return the user', () => {
      expect(selectUser(store.getState())).toMatchSnapshot();
    });
  });
});
