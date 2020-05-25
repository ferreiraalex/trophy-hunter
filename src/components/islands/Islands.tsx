import styled from '@emotion/styled';
import { FC } from 'react';
import { SpecialGradients } from '../levels/special';

const Container = styled.div`
  flex-grow: 1;
  margin-top: 48px;
  overflow: hidden;
  position: relative;
`;

interface IslandsProps {
  onClick(): void;
}

const Islands: FC<IslandsProps> = ({ children, onClick }) => {
  return (
    <Container onClick={onClick}>
      <SpecialGradients />
      {children}
    </Container>
  );
};

export default Islands;
