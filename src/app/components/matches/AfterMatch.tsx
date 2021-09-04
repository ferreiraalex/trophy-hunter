import styled from '@emotion/styled';
import { FC, useState, useEffect } from 'react';
import Backdrop from '../common/Backdrop';
import SandClock from '../icons/SandClock';
import { Tooltip } from '../tooltip';
import ModalButton from '../modals/ModalButton';
import { postCheck } from '../../lib/accounts';
import { useQueryClient, useMutation } from 'react-query';
import { flashUntilFocus } from '../../lib/overwolf';
import TrophiesModal from './TrophiesModal';
import IslandsModal from './IslandsModal';
import usePersistentState from '../../hooks/usePersistentState';
import { i18n } from '../../lib/i18n/i18n';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 10px;
  }
`;

const Message = styled.div`
  text-transform: uppercase;
  font-family: Roboto Mono;
  font-size: 1.2rem;
`;

interface AfterMatchProps {
  className?: string;
}

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 15px 10px 10px;
`;

let tryAgainTime = 0;
const AfterMatch: FC<AfterMatchProps> = ({ className }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showUnlockedIslandNames, setShowUnlockedIslandNames] = useState(false);
  const [checkGameId, , unsetCheckGameId] = usePersistentState(
    'checkGameId',
    null
  );
  const queryClient = useQueryClient();

  const {
    mutate: check,
    data: match,
    status,
    reset,
  } = useMutation(postCheck, {
    onMutate: () => {
      setShowModal(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries('account');
      queryClient.invalidateQueries('matches');
      tryAgainTime = 0;
      flashUntilFocus('desktop');
    },
    onError: (error: Response) => {
      if (error.status === 403) {
        unsetCheckGameId();
      } else {
        tryAgainTime += 10000;
        setTimeout(() => {
          if (checkGameId) {
            check(parseInt(checkGameId));
          }
        }, tryAgainTime);
      }
    },
  });
  const loading = status === 'loading';

  useEffect(() => {
    if (checkGameId) {
      setTimeout(() => {
        check(parseInt(checkGameId));
      }, 5000);
    }
  }, [checkGameId]);

  useEffect(() => {
    if (!loading) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setShowTooltip(true);
      setShowModal(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [loading]);

  return (
    <>
      {(loading || match) && (
        <SandClock
          className={className}
          data-tooltip-id="sandClock"
          onClick={() => setShowModal(true)}
          loading={loading}
        />
      )}
      {!showModal && showTooltip && (
        <Tooltip
          title={
            loading ? i18n('Loading Trophies...') : i18n('Trophies are ready!')
          }
          onClick={() => setShowTooltip(false)}
          text={
            loading ? (
              i18n(
                'It may take a few moments.. we’re loading and concluding your last match to show your progress.'
              )
            ) : (
              <>
                <div>
                  {i18n('All set, want to see the progress you’ve made?')}
                </div>
                <ButtonContainer>
                  <ModalButton onClick={() => setShowModal(true)}>
                    {i18n('Check now!')}
                  </ModalButton>
                </ButtonContainer>
              </>
            )
          }
          placement="topLeft"
          targetId="sandClock"
          pointerEvents
        />
      )}
      {showModal && loading && (
        <Backdrop onClick={() => setShowModal(false)}>
          <Container>
            <img src={`/build/logo.png`} />
            <Message>{i18n('Loading Trophies...')}</Message>
          </Container>
        </Backdrop>
      )}
      {showModal && match && !showUnlockedIslandNames && (
        <TrophiesModal
          onClose={() => {
            if (match.unlockedIslandNames.length > 0) {
              setShowUnlockedIslandNames(true);
            } else {
              setShowTooltip(false);
              setShowModal(false);
              reset();
            }
          }}
          trophyNames={[...match.trophyNames, ...match.missionTrophyNames]}
          allTrophiesProgress={match.allTrophiesProgress}
        />
      )}
      {showModal && match && showUnlockedIslandNames && (
        <IslandsModal
          onClose={() => {
            setShowTooltip(false);
            setShowModal(false);
            setShowUnlockedIslandNames(false);
            reset();
          }}
          unlockedIslandNames={match.unlockedIslandNames}
        />
      )}
    </>
  );
};

export default AfterMatch;
