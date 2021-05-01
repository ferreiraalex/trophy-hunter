import Modal from './Modal';
import styled from '@emotion/styled';
import FancyButton from '../common/FancyButton';
import { Trophy } from '../trophies/types';
import TrophyStats from '../trophies/TrophyStats';
import { useQuery } from 'react-query';
import { getTrophyStats } from '../../api/stats';
import Percentage from '../common/Percentage';
import Squid from '../icons/Squid';
import getConfig from 'next/config';
import { getRecentVersion } from '../../api/riot';
import { Tooltip } from '../tooltip';

const { publicRuntimeConfig } = getConfig();

const Container = styled.div`
  display: grid;
  place-items: center;
  align-items: baseline;
  height: 100%;
  grid-template-rows: auto auto 1fr auto;

  p {
    margin: 0.4em 0;
  }
  section {
    text-align: center;
  }
`;

const Text = styled.p`
  text-align: center;
`;

const Stats = styled.p`
  display: grid;
  grid-auto-flow: column;
  gap: 0.5em;
  justify-content: center;
  align-items: center;
  img {
    width: 2em;
    height: 2em;
  }
`;

interface TrophyModalProps {
  trophy: Trophy;
  onClose(): void;
}

const Title = styled.h3`
  margin: 20px;
  text-transform: uppercase;
`;

const TrophyModal = ({ trophy, onClose }: TrophyModalProps) => {
  const { data: trophyStats, isLoading } = useQuery(
    ['trophyStats', trophy.name],
    () => getTrophyStats(trophy.name)
  );
  const { data: version } = useQuery('version', getRecentVersion);

  return (
    <Modal onClose={onClose}>
      <Container>
        <Title>
          {trophy.name} <TrophyStats trophyName={trophy.name} />
        </Title>
        <Text>{trophy.description}</Text>
        <section>
          {isLoading && <p>Loading stats...</p>}
          {!isLoading && !trophyStats && (
            <>
              <p>No stats available</p>
              <Squid />
            </>
          )}
          {trophyStats && (
            <>
              <p>
                Successful in{' '}
                <Percentage
                  value={trophyStats.totalCount}
                  max={trophyStats.totalChecks}
                />{' '}
                of all matches.
              </p>
              <h4>Top combination</h4>
              {trophyStats.top.map(({ championId, mapId, count, checks }) => (
                <Stats key={`${mapId}-${championId}`}>
                  <Tooltip text="Map" placement="top">
                    <img
                      src={`https://ddragon.leagueoflegends.com/cdn/${version.riot}/img/map/map${mapId}.png`}
                    />
                  </Tooltip>
                  <Tooltip text="Champion" placement="top">
                    <img
                      src={`${publicRuntimeConfig.API_ENDPOINT}/api/champions/${championId}/img`}
                    />
                  </Tooltip>
                  <Tooltip text="Success Rate" placement="top">
                    <Percentage value={count} max={checks} />
                  </Tooltip>
                </Stats>
              ))}
            </>
          )}
        </section>
        <FancyButton onClick={onClose}>Close</FancyButton>
      </Container>
    </Modal>
  );
};

export default TrophyModal;
