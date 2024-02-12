import { useDispatch } from 'react-redux';
import { Box, Button, Field, Form, FormProps, Spacer} from '@gilbarbara/components';
import { postMessage } from '~/actions';

interface FormData {
  username: string;
  password: string;
}

function NewMessageFormFn({ formMethods }: FormProps<FormData>) {
  const { formState: { isDirty }, handleSubmit, } = formMethods;

  const dispatch = useDispatch();

  const handleFormSubmit: any = (formData: any) => {
    dispatch(postMessage(formData));
  };

  return (
    <Box as="form" method="POST" onSubmit={handleSubmit(handleFormSubmit)} width={500}>
      <Spacer
        direction="horizontal"
        distribution="start"
        gap="sm"
        verticalAlign="center"
        wrap
      >
        <Field label="Message" name="content" placeholder="Enter your message!" required type="text" />
        <Button disabled={!isDirty} type="submit">Post</Button>
      </Spacer>
    </Box>
  );
}

export default function NewMessageForm() {
  return (
    <Form defaultValues={{content: '' }}>{NewMessageFormFn}</Form>
  );
}
