import { useState, FC, useCallback, useEffect } from 'react';
import Discord from '../icons/Discord';
import Support from '../icons/Support';
import styled from '@emotion/styled';
import Feedback from '../icons/Feedback';
import Share from '../icons/Share';
import FeedbackModal from '../modals/FeedbackModal';
import Grow from '../common/Grow';
import AfterMatch from '../matches/AfterMatch';
import HeaderButton from './HeaderButton';
import Status from '../common/Status';
import { useAccount } from '../../contexts/account';
import QuestionModal from '../guides/QuestionModal';
import Header from './Header';
import ErrorBoundary from '../common/ErrorBoundary';
import ShareModal from '../guides/ShareModal';
import SizeButton from './SizeButton';
import ExitButton from './ExitButton';
import MinimizeButton from './MinimizeButton';
import ChangelogModal from '../guides/ChangelogModal';
import { isAppUpdated } from '../../lib/overwolf';
import { getLocalStorageItem } from '../../lib/utils/storage';
import { dict, i18n } from '../../lib/i18n/i18n';
import LocaleModal from '../i18n/LocaleModal';
import GitHub from '../icons/GitHub';

const ButtonLink = HeaderButton.withComponent('a');
const ButtonLinkGitHub = styled(ButtonLink)`
  padding: 6px;
`;

const WriteUsFeedback = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.92rem;
  text-transform: uppercase;
  padding: 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
  background-color: none;

  &:hover {
    background: linear-gradient(158.54deg, #ef1acd -1.09%, #efb31a 109.64%);
  }

  &:hover > svg {
    fill: #ffffff;
  }
`;

const InnerToolbar = styled.div`
  display: flex;
  min-width: 440px;
`;

export type ModalName =
  | 'feedback'
  | 'question'
  | 'share'
  | 'changelog'
  | 'locale';
const AppHeader: FC = () => {
  const { loading, account } = useAccount();
  const [modal, setModal] = useState<ModalName>(null);
  const closeModal = useCallback(() => setModal(null), []);
  const openModal = useCallback((name: ModalName) => () => setModal(name), []);

  useEffect(() => {
    isAppUpdated().then((isUpdated) => {
      const changelogUpdates = getLocalStorageItem('changelogUpdates', true);
      if (isUpdated && changelogUpdates) {
        setModal('changelog');
      }
    });
  }, []);

  return (
    <>
      <Header>
        <ErrorBoundary>
          <Status />
          {account && !loading && <AfterMatch />}
        </ErrorBoundary>
        <Grow />
        <InnerToolbar>
          <ErrorBoundary>
            <WriteUsFeedback onClick={openModal('feedback')}>
              <Feedback />
              {i18n('Write us a feedback')}
            </WriteUsFeedback>
            <Grow />
          </ErrorBoundary>
          <HeaderButton
            active={modal === 'locale'}
            onClick={openModal('locale')}
            data-tooltip-id="locale"
          >
            <img src={`/build/flags/${dict.locale}.png`} alt="Locale" />
          </HeaderButton>
          <ButtonLinkGitHub
            href="https://github.com/lmachens/trophy-hunter"
            target="_blank"
          >
            <GitHub />
          </ButtonLinkGitHub>
          <ButtonLink href="https://discord.gg/NTZu8Px" target="_blank">
            <Discord />
          </ButtonLink>
          <HeaderButton
            active={modal === 'share'}
            onClick={openModal('share')}
            data-tooltip-id="share"
          >
            <Share active={modal === 'share'} />
          </HeaderButton>
          <HeaderButton
            active={modal === 'question'}
            onClick={openModal('question')}
            data-tooltip-id="question"
          >
            <Support />
          </HeaderButton>
          <MinimizeButton />
          <SizeButton />
          <ExitButton windowName="background" />
        </InnerToolbar>
      </Header>
      {modal === 'feedback' && <FeedbackModal onClose={closeModal} />}
      {modal === 'share' && <ShareModal onClose={closeModal} />}
      {modal === 'question' && (
        <QuestionModal
          onClose={closeModal}
          onSelect={(modal) => setModal(modal)}
        />
      )}
      {modal === 'locale' && <LocaleModal onClose={closeModal} />}
      {modal === 'changelog' && <ChangelogModal onClose={closeModal} />}
    </>
  );
};

export default AppHeader;
