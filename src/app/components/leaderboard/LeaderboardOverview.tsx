import styled from '@emotion/styled';
import { useMemo } from 'react';
import ProgressBar from '../common/ProgressBar';
import IslandIcons from './IslandIcons';
import { allTrophies } from '../trophies/client';
import { getSeasonAccount } from '../../lib/accounts';
import { useQuery } from 'react-query';
import useVersion from '../../hooks/useVersion';
import { useAccount } from '../../contexts/account';
import useQueryParams from '../../hooks/useQueryParams';
import { i18n } from '../../lib/i18n/i18n';

const Container = styled.div`
  background: #2b2a30;
  padding: 15px;

  > * + * {
    margin-top: 20px;
  }

  h3 {
    text-transform: uppercase;
    margin-top: 0;
    font-size: 18px;
  }

  h4,
  label {
    display: block;
    font-family: Roboto Mono;
    font-size: 15px;
    color: #77777a;

    > * {
      margin-top: 4px;
    }
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  font-size: 16px;
  line-height: 21px;

  > :nth-child(2) {
    border-left: 1px solid #77777a;
    padding-left: 16px;
  }

  > :not(:first-child) div {
    margin-top: 8px;
  }
`;

const Rank = styled.div`
  font-size: 35px;
  line-height: normal;
`;

const IslandsCompleted = styled(IslandIcons)`
  justify-content: space-between;

  svg {
    background: none;
    height: 40px;
    width: 40px;
  }
`;

const numberOfTrophies = allTrophies.length;

const LeaderboardOverview = () => {
  const { account: ownAccount } = useAccount();
  const queryParams = useQueryParams();
  const { season: currentSeason } = useVersion();
  const season = queryParams.get('season') || currentSeason;
  const activeSeason = typeof season === 'string' ? season : null;

  const { data: seasonAccount } = useQuery(
    `accountSeason-${activeSeason}`,
    () => (season !== currentSeason ? getSeasonAccount(activeSeason) : null)
  );
  const account = season !== currentSeason ? seasonAccount : ownAccount;

  const trophiesCount = useMemo(
    () => account?.trophiesCompleted || 0,
    [account]
  );
  const islandsCompleted = useMemo(
    () =>
      account?.islands
        .filter((island) => island.status === 'done')
        .map((island) => island.name) || [],
    [account]
  );

  return (
    <Container>
      <h3>
        {i18n('Season')} {season}
      </h3>
      <Stats>
        <div>
          <h4>{i18n('Your Place')}</h4>
          <Rank>#{account?.rank}</Rank>
        </div>
        <div>
          <h4>{i18n('Trophies')}</h4>
          <div>{trophiesCount}</div>
        </div>
        <div>
          <h4>{i18n('Trophies left')}</h4>
          <div>{numberOfTrophies - trophiesCount}</div>
        </div>
      </Stats>
      <label>
        {i18n('Trophies completion')}
        <ProgressBar
          progress={trophiesCount / numberOfTrophies}
          max={numberOfTrophies}
          category="special"
          percentage
        />
      </label>
      <label>
        {i18n('Islands completed')}
        <IslandsCompleted islands={islandsCompleted} />
      </label>
    </Container>
  );
};

export default LeaderboardOverview;
