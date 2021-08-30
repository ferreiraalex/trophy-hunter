import styled from '@emotion/styled';
import { FC } from 'react';
import { dicts, setDict } from '../../lib/i18n/i18n';
import SmallModal from '../modals/SmallModal';

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  background: #77777a;
  text-align: right;
  min-width: 100px;

  li {
    padding: 8px 10px;
    cursor: pointer;
    display: grid;
    place-items: center;

    img {
      width: 100px;
      height: 53px;
    }

    :hover {
      background: #8e8e91;
    }

    :not(:first-child) {
      border-top: 1px solid rgba(234, 234, 234, 0.2);
    }
  }
`;

interface LocaleModalProps {
  onClose(): void;
}

const LocaleModal: FC<LocaleModalProps> = ({ onClose }) => {
  return (
    <SmallModal onClose={onClose} targetId="locale">
      <List>
        {dicts.map((dict) => (
          <li
            key={dict.locale}
            onClick={() => {
              setDict(dict.locale);
              location.reload();
            }}
          >
            <img src={`/build/flags/${dict.locale}.png`} alt="Locale" />{' '}
            {dict.title}
          </li>
        ))}
      </List>
    </SmallModal>
  );
};

export default LocaleModal;
