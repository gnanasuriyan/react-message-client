import { Box, Page} from '@gilbarbara/components';
import SignupContainer from '~/containers/Signup';

function Signup() {
  
  return (
    <Page key="Login" data-component-name="Login">
      <Box mb="md" align="center">
        <SignupContainer />
      </Box>
    </Page>
  );
}

export default Signup;
