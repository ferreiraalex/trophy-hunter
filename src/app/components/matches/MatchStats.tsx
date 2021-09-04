import { useMemo, useState } from 'react';
import { TrophyProgress } from '../../lib/matches';
import ProgressBar from '../common/ProgressBar';
import trophies from '../trophies/client';
import styled from '@emotion/styled';
import TrophyModal from '../modals/TrophyModal';
import { TrophyClient } from '../trophies/types';
import { i18n } from '../../lib/i18n/i18n';

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  thead {
    text-align: center;
  }
  tbody {
    overflow: auto;
    tr {
      height: 2.2em;
      cursor: pointer;
      :hover {
        background: #616165;
      }
    }
  }
`;

type MatchStatsProps = {
  allTrophiesProgress: TrophyProgress[];
};
const MatchStats = ({ allTrophiesProgress }: MatchStatsProps): JSX.Element => {
  const [trophyDetails, setTrophyDetails] = useState<TrophyClient | null>(null);

  const trophyStats = useMemo(
    () =>
      allTrophiesProgress
        .map((trophyProgress) => {
          const trophy = trophies[trophyProgress.trophyName];

          const progress =
            typeof trophyProgress.progress === 'number'
              ? trophyProgress.progress
              : trophyProgress.progress.progress;
          return { trophy, progress };
        })
        .filter(
          (stats) =>
            stats.progress > 0 &&
            stats.trophy &&
            !stats.trophy.maxProgress &&
            stats.trophy.name !== 'playstyle'
        )
        .sort((a, b) => b.progress - a.progress),
    [allTrophiesProgress]
  );

  return (
    <Table>
      <thead>
        <tr>
          <th>{i18n('Trophy')}</th>
          <th>{i18n('Progress')}</th>
        </tr>
        <tr>
          <td colSpan={2}>
            <strong>{i18n('Trophies you would have progress in.')}</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        {trophyStats.map(({ trophy, progress }) => (
          <tr key={trophy.name} onClick={() => setTrophyDetails(trophy)}>
            <td>{trophy.title}</td>
            <td>
              <ProgressBar
                progress={progress}
                max={trophy.maxProgress}
                category={trophy.category}
                percentage={!trophy.maxProgress}
                hideMessage
              />
            </td>
          </tr>
        ))}
      </tbody>
      {trophyDetails && (
        <TrophyModal
          trophy={trophyDetails}
          onClose={() => setTrophyDetails(null)}
        />
      )}
    </Table>
  );
};

export default MatchStats;
