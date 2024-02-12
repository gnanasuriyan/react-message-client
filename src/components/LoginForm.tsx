import { useDispatch } from 'react-redux';
import { Box, Button, Field, Form, FormProps, Spacer} from '@gilbarbara/components';
import { login } from '~/actions';

interface FormData {
  username: string;
  password: string;
}

function LoginFormFn({ formMethods }: FormProps<FormData>) {
  const { formState: { isDirty }, handleSubmit, } = formMethods;

  const dispatch = useDispatch();

  const handleFormSubmit: any = (formData: any) => {
    dispatch(login(formData));
  };

  return (
    <Box as="form" method="POST" onSubmit={handleSubmit(handleFormSubmit)} width={500}>
      <Field label="Username" name="username" placeholder="Username" required type="text" />
      <Field label="Password" name="password" placeholder="Password" required type="password" />
      <Spacer
        direction="horizontal"
        distribution="start"
        gap="sm"
        verticalAlign="center"
        wrap
      >
        <Button disabled={!isDirty} type="submit" data-component-name="Login">Login</Button>
        <Button bg="primary" as={'a'} size="md" type="button" href='/signup'>Signup</Button>
      </Spacer>
    </Box>
  );
}

export default function LoginForm() {
  return (
    <Form defaultValues={{ username: '', password: '' }}>{LoginFormFn}</Form>
  );
}
