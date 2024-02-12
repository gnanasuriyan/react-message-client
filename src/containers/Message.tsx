import styled from '@emotion/styled';
import {
  Box,
} from '@gilbarbara/components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMessageList } from '~/actions';
import MessageGrid from '~/components/MessageGrid';
import NewMessageForm from '~/components/NewMessage';
import { useAppSelector } from '~/modules/hooks';
import { selectMessage } from '~/selectors';

const MessageRoot = styled.div`
  width: 100%;
  height: 600px;
`;

function MessageContainer() {
  const dispatch = useDispatch();
  const messageState = useAppSelector(selectMessage);
  const { messages = []} = messageState;
  useEffect(() => {
    dispatch(getMessageList());
  }, [dispatch]);
  
  return (
    <MessageRoot key="MessageContainer" data-component-name="MessageContainer">
      <Box width="100%" margin={"xs"}>
          <NewMessageForm />
      </Box>
      <Box width="100%" margin={"xs"}>
          <MessageGrid messages={messages}/>
      </Box>
    </MessageRoot>
  );
}

export default MessageContainer;
