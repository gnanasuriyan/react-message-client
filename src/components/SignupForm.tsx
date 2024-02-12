import { useDispatch } from 'react-redux';
import { Box, Button, Field, Form, FormProps} from '@gilbarbara/components';
import { signup } from '~/actions';

interface FormData {
  username: string;
  password: string;
  confirmpassword: string;
}

function SignupFormFn({ formMethods }: FormProps<FormData>) {
  const dispatch = useDispatch();
  const { formState: { isDirty }, handleSubmit, } = formMethods;

  const handleFormSubmit: any = (formData: any) => {
    dispatch(signup(formData));
  };

  return (
    <Box as="form" method="POST" onSubmit={handleSubmit(handleFormSubmit)} width={500}>
      <Field label="Username" name="username" placeholder="Username" required type="text" />
      <Field label="Password" name="password" placeholder="Password" required type="password" />
      <Field label="Confirm Password" name="confirm_password" placeholder="Confirm Password" required type="password" />
      <Button disabled={!isDirty} type="submit">Signup</Button>
    </Box>
  );
}

export default function SignupForm() {
  return (
    <Form defaultValues={{ username: '', password: '', confirm_password: '' }}>{SignupFormFn}</Form>
  );
}
