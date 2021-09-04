import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import TrophyListItem from './components/trophies/TrophyListItem';
import overwolf, { closeCurrentWindow, getAppVersion } from './lib/overwolf';
import { getLocalStorageItem, setLocalStorageItem } from './lib/utils/storage';
import trophies from './components/trophies/client';
import Timer from './components/common/Timer';
import { TrophyClient } from './components/trophies/types';
import NotificationHeader from './components/notifications/NotificationHeader';
import NotificationTitle from './components/notifications/NotificationTitle';
import NotificationContainer from './components/notifications/NotificationContainer';
import { log } from './lib/logs';
import App from './App';
import { i18n } from './lib/i18n/i18n';

getAppVersion().then((version) => log(`Running ${version}`));

const ListItem = styled(TrophyListItem)`
  background-image: ${(props) =>
    `url(./notifications/${props.trophy.island}.png)`};
  background-position: bottom right;
  background-repeat: no-repeat;
  flex-grow: 1;
`;

const Notification = () => {
  const [notification, setNotification] = useState<{
    trophyName: string;
    progress: number;
  }>(null);

  const loadNotification = () => {
    const notifications = getLocalStorageItem('notifications', []);
    if (
      !notifications ||
      notifications.length === 0 ||
      !Array.isArray(notifications)
    ) {
      closeCurrentWindow();
      setNotification(null);
      return;
    }
    setNotification(notifications[0]);
    setLocalStorageItem('notifications', notifications.slice(1));
  };

  useEffect(() => {
    loadNotification();
  }, []);

  if (!notification) {
    return null;
  }

  const trophy: TrophyClient = trophies[notification.trophyName];
  return (
    <NotificationContainer>
      <NotificationHeader
        onMouseDown={() =>
          overwolf.windows.getCurrentWindow((result) => {
            overwolf.windows.dragMove(result.window.id);
          })
        }
      >
        <NotificationTitle>
          {notification.progress === 1
            ? i18n('Trophy completed!')
            : i18n('Trophy near completion!')}
        </NotificationTitle>
        <Timer onDone={loadNotification} />
      </NotificationHeader>
      <ListItem trophy={trophy} progress={notification.progress} />
    </NotificationContainer>
  );
};

ReactDOM.render(
  <StrictMode>
    <App>
      <Notification />
    </App>
  </StrictMode>,
  document.querySelector('#root')
);
