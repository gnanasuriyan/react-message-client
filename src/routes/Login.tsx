import { Box, Page} from '@gilbarbara/components';
import LoginContainer from '~/containers/Login';

function Login() {
  
  return (
    <Page key="Login" data-component-name="Login">
      <Box mb="md" align="center">
        <LoginContainer />
      </Box>
    </Page>
  );
}

export default Login;
