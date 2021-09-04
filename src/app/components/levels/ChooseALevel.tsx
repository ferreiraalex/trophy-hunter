import styled from '@emotion/styled';
import { FC } from 'react';
import { i18n } from '../../lib/i18n/i18n';

const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #3f3e43;
  text-align: center;
  width: 100%;
  padding-bottom: 30px;
`;

const ChooseALevel: FC = () => {
  return (
    <Container>
      <img src={`/build/select.svg`} />
      <h3>{i18n('Choose a level')}</h3>
      <p>{i18n('to see full trophy description and progress')}</p>
    </Container>
  );
};

export default ChooseALevel;
