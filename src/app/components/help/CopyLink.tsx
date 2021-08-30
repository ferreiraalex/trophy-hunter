import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { copyTextToClipboard } from '../../lib/utils/clipboard';
import FancyButton from '../common/FancyButton';
import { i18n } from '../../lib/i18n/i18n';

const CopyContainer = styled.div`
  min-width: 270px;
  margin-top: 20px;
  display: flex;
  background: #3f3e43;

  a {
    margin: 8px;
    flex-grow: 1;
    color: #eaeaea;
  }

  button {
    margin: 0;
    padding: 8px 16px;
    min-width: 6.5em;
  }
`;

const URL = 'https://th.gl';
const CopyLink = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timeoutId = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [copied]);

  const handleClick = () => {
    if (copyTextToClipboard(URL)) {
      setCopied(true);
    }
  };

  return (
    <CopyContainer>
      <a href={URL} target="_blank" rel="noreferrer">
        {URL}
      </a>
      <FancyButton onClick={handleClick}>
        {copied ? i18n('Copied!') : i18n('Copy')}
      </FancyButton>
    </CopyContainer>
  );
};

export default CopyLink;
