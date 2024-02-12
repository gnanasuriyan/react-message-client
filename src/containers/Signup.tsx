import {
  Box,
} from '@gilbarbara/components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UseTreeChanges from 'tree-changes-hook';

import SignupForm from '~/components/SignupForm';
import { STATUS } from '~/literals';
import { useAppSelector } from '~/modules/hooks';
import { selectSignup } from '~/selectors';

function SignupContainer() {
  const dispatch = useDispatch();
  const signupState = useAppSelector(selectSignup);
  const { changed } = UseTreeChanges(signupState);
  const navigate = useNavigate();
  useEffect(() => {
    if (changed('status', STATUS.RUNNING)) {
      navigate('/');
    }
  }, [dispatch, changed]);

  return (
    <div key="LoginContainer" data-component-name="LoginContainer">
      <Box flexBox justify="center">
          <SignupForm />
      </Box>
    </div>
  );
}

export default SignupContainer;
