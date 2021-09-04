import { Tooltip } from '../tooltip';
import { useAccount } from '../../contexts/account';
import styled from '@emotion/styled';
import { bounce } from '../../styles/animations';
import useTargetLevel from '../../hooks/useTargetLevel';
import { i18n } from '../../lib/i18n/i18n';

const WelcomeTooltip = styled(Tooltip)`
  animation: ${bounce} 2s ease infinite;
`;

const WelcomeGuide = () => {
  const { account } = useAccount();
  const { level, targetLevel } = useTargetLevel();

  const showGuide =
    account?.levels.find((level) => level.name === 'welcome')?.status ===
    'active';
  if (!showGuide) {
    return null;
  }
  return (
    <>
      {!level && (
        <WelcomeTooltip
          title={i18n('Welcome to Trophy Hunter!')}
          text={i18n(
            'Click on the first levels to open the trophies shelf and view trophies, description and progress.'
          )}
          placement="bottom"
          targetId="hub"
          offset={10}
        />
      )}
      {targetLevel?.islandName === 'hub' &&
        targetLevel?.level.name === 'welcome' && (
          <Tooltip
            title={i18n('It’s all about you :)')}
            text={i18n(
              'This is your time to conquer the world! Play one game of Summoner’s Rift or ARAM with the trophy hunter app to begin your journey!'
            )}
            placement="top"
            targetId="playstyle"
          />
        )}
    </>
  );
};

export default WelcomeGuide;
