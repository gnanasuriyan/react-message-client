import { Box,H3,Page} from '@gilbarbara/components';
import MessageContainer from '~/containers/Message';

function Message() {
  return (
    <Page key="Message" data-component-name="Message">
      <Box textAlign="center">
        <H3 mb={0}>Messages</H3>
      </Box>
      <MessageContainer />
    </Page>
  );
}

export default Message;
