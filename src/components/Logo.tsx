import styled from '@emotion/styled';
import { H3 } from '@gilbarbara/components';

export const Wrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  font-size: 0;

  h3 {
    color: #fff;
  }
`;

interface Props {
  name: String;
}

function Logo({name}: Props) {
  return (
    <Wrapper>
      <H3>{name}</H3>
    </Wrapper>
  );
}

export default Logo;
