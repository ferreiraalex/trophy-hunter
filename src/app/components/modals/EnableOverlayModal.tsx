import { useEffect, useState } from 'react';
import Modal from './Modal';
import styled from '@emotion/styled';
import { LOL_ID } from '../../lib/overwolf/constants';
import { i18n } from '../../lib/i18n/i18n';

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`;

const Text = styled.p`
  text-align: center;
`;

const TitleContainer = styled.div`
  display: grid;
  column-gap: 5px;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 24px;
    text-transform: uppercase;
  }
`;

const EnableOverlayModal = () => {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    overwolf.settings.games.getOverlayEnabled(LOL_ID, (event) =>
      setClosed(event.enabled)
    );

    const handleOverlayEnablementChanged = (
      event: overwolf.settings.games.OverlayEnablementChangedEvent
    ) => {
      if (event.gameId === LOL_ID) {
        setClosed(event.enabled);
      }
    };

    overwolf.settings.games.onOverlayEnablementChanged.addListener(
      handleOverlayEnablementChanged
    );

    return () => {
      overwolf.settings.games.onOverlayEnablementChanged.removeListener(
        handleOverlayEnablementChanged
      );
    };
  }, []);

  if (closed) {
    return null;
  }
  return (
    <Modal>
      <Container>
        <TitleContainer>
          <h3>{i18n('Overlay is disabled!')}</h3>
        </TitleContainer>
        <Text>
          {i18n(
            'Trophy Hunter requires you to enable the Overlay for League of Legends in the Overwolf settings to detect your account and matches.'
          )}
        </Text>
        <a href="overwolf://settings">{i18n('Open Settings')}</a>
        <img src={`/build/overlay.jpg`} alt="Overwolf overlay settings" />
        <a
          href="https://support.overwolf.com/en/support/solutions/articles/9000178795-overwolf-game-settings"
          target="_blank"
          rel="noreferrer"
        >
          {i18n('Read more about Overlay Game settings')}
        </a>
      </Container>
    </Modal>
  );
};

export default EnableOverlayModal;
