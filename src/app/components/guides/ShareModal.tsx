import { FC } from 'react';
import SmallModal from '../modals/SmallModal';
import styled from '@emotion/styled';
import CopyLink from '../help/CopyLink';
import { i18n } from '../../lib/i18n/i18n';

const WideSmallModal = styled(SmallModal)`
  padding: 15px;
  min-width: 300px;
`;

interface ShareModalProps {
  onClose(): void;
}

const ShareModal: FC<ShareModalProps> = ({ onClose }) => {
  return (
    <WideSmallModal
      onClose={onClose}
      title={i18n('Spread the love <3')}
      targetId="share"
    >
      <p>{i18n('Let your friends join the fun as well!')}</p>
      <CopyLink />
    </WideSmallModal>
  );
};

export default ShareModal;
