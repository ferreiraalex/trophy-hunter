import { FC } from 'react';
import styled from '@emotion/styled';
import SettingsButton from './SettingsButton';
import Toggle from '../common/Toggle';
import usePersistentState from '../../hooks/usePersistentState';
import useHotkey from '../../hooks/useHotkey';
import { i18n } from '../../lib/i18n/i18n';

const Row = styled.div`
  display: flex;
  overflow: auto;
`;

const Col = styled.div`
  padding: 0px 12px;
  min-width: 240px;
`;

const Divider = styled.div`
  width: 1px;
  min-width: 1px;
  background: #3f3e43;
  margin: 0px 12px;
`;

const Setting = styled.label`
  margin: 8px 0px;
  display: flex;
  justify-content: space-between;

  > * {
    margin-left: 4px;
  }
`;

const SettingsLink = styled(SettingsButton.withComponent('a'))`
  text-decoration: none;
`;

const Settings: FC = () => {
  const showTrophyHunterHotkey = useHotkey('show_trophy_hunter');
  const nextPageHotkey = useHotkey('next_page_trophy_hunter');
  const toggleMonitorHotkey = useHotkey('toggle_monitor_trophy_hunter');
  const [autoLaunch, setAutoLaunch] = usePersistentState('autoLaunch', true);
  const [trophyNearCompletion, setTrophyNearCompletion] = usePersistentState(
    'trophyNearCompletion',
    true
  );
  const [trophyCompleted, setTrophyCompleted] = usePersistentState(
    'trophyCompleted',
    true
  );
  const [changelogUpdates, setChangelogUpdates] = usePersistentState(
    'changelogUpdates',
    true
  );

  return (
    <>
      <h2>{i18n('Settings')}</h2>
      <Row>
        <Col>
          <h3>{i18n('General')}</h3>
          <Setting>
            {i18n('Show / Hide hotkey')}
            <SettingsLink href="overwolf://settings/games-overlay?hotkey=show_trophy_hunter&gameId=5426">
              {showTrophyHunterHotkey}
            </SettingsLink>
          </Setting>
          <Setting>
            {i18n('Auto Launch')}
            <Toggle
              checked={autoLaunch}
              onChange={(event) => {
                setAutoLaunch(event.target.checked);
              }}
            />
          </Setting>
          <Setting>
            {i18n('Changelog Updates')}
            <Toggle
              checked={changelogUpdates}
              onChange={(event) => {
                setChangelogUpdates(event.target.checked);
              }}
            />
          </Setting>
        </Col>
        <Divider />
        <Col>
          <h3>{i18n('In-Game Notifications')}</h3>
          <Setting>
            {i18n('Trophy near completion')}
            <Toggle
              checked={trophyNearCompletion}
              onChange={(event) => {
                setTrophyNearCompletion(event.target.checked);
              }}
            />
          </Setting>
          <Setting>
            {i18n('Trophy completed')}
            <Toggle
              checked={trophyCompleted}
              onChange={(event) => {
                setTrophyCompleted(event.target.checked);
              }}
            />
          </Setting>
        </Col>
        <Divider />
        <Col>
          <h3>{i18n('Second Screen')}</h3>
          <Setting>
            {i18n('Next page hotkey')}
            <SettingsLink href="overwolf://settings/games-overlay?hotkey=next_page_trophy_hunter&gameId=5426">
              {nextPageHotkey}
            </SettingsLink>
          </Setting>
          <Setting>
            {i18n('Toggle monitor hotkey')}
            <SettingsLink href="overwolf://settings/games-overlay?hotkey=toggle_monitor_trophy_hunter&gameId=5426">
              {toggleMonitorHotkey}
            </SettingsLink>
          </Setting>
        </Col>
      </Row>
    </>
  );
};

export default Settings;
