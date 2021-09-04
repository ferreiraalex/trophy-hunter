import styled from '@emotion/styled';
import { i18n } from '../../lib/i18n/i18n';
import HeartSquid from '../icons/HeartSquid';
import CopyLink from './CopyLink';

const Container = styled.section`
  display: grid;
  justify-items: center;

  svg {
    margin: 30px 0;
  }
`;

const SpreadTheLove = () => {
  return (
    <Container>
      <h2>{i18n('Spread the love <3')}</h2>
      <p>{i18n('Let your friends join the fun as well!')}</p>
      <HeartSquid />
      <CopyLink />
    </Container>
  );
};

export default SpreadTheLove;
