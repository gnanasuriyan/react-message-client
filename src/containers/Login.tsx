import {
  Box,
} from '@gilbarbara/components';

import LoginForm from '~/components/LoginForm';

function LoginContainer() {
  return (
    <div key="LoginContainer" data-component-name="LoginContainer">
      <Box flexBox justify="center">
          <LoginForm />
      </Box>
    </div>
  );
}

export default LoginContainer;
