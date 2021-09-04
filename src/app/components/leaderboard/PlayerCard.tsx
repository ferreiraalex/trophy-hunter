import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { getRecentVersion } from '../../lib/riot';
import IslandIcons from './IslandIcons';
import { css } from '@emotion/react';
import { Ranking } from '../../lib/accounts';
import { loadingStyle } from '../../styles/animations';
import { Link } from 'react-router-dom';
import { i18n } from '../../lib/i18n/i18n';

type Loadable = {
  isLoading: boolean;
};

const Rank = styled.div`
  grid-area: rank;
`;

const Avatar = styled.img<Loadable>`
  grid-area: avatar;
  height: auto;
  width: auto;
  object-fit: contain;
  ${(props) => props.isLoading && loadingStyle}
`;

const SummonerName = styled.div<Loadable>`
  font-family: 'Lato', sans-serif;
  min-width: 100px;
  grid-area: summoner-name;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(props) => props.isLoading && loadingStyle}
  ${(props) => props.isLoading && 'max-width: 70%;'}
`;

const TrophiesCount = styled.div<Loadable>`
  grid-area: trophies-count;
  ${(props) => props.isLoading && loadingStyle}
  ${(props) => props.isLoading && 'max-width: 90%;'}

  span {
    color: #77777a;
  }
`;

const Islands = styled.div`
  grid-area: islands;
  color: #77777a;
  font-size: 16px;
`;

const IslandsCompleted = styled(IslandIcons)`
  grid-area: islands-completed;
`;

type CardProps = {
  size: 'L' | 'M' | 'S';
};

const sizes = {
  L: css`
    column-gap: 15px;

    padding: 24px;
    grid-template-areas:
      'rank avatar summoner-name'
      'rank avatar trophies-count'
      'rank avatar islands-completed';
    grid-template-columns: auto auto 1fr;
    grid-template-rows: auto 1fr auto;
    flex: 2.3;
    min-width: 350px;

    .rank {
      font-size: 28px;
    }

    .avatar {
      height: 121px;
      width: 121px;
    }

    .trophiesCount {
      font-size: 16px;
    }
  `,
  M: css`
    column-gap: 6px;
    padding: 17px 12px;

    grid-template-areas:
      'rank avatar summoner-name islands'
      'rank avatar trophies-count islands-completed';
    grid-template-columns: auto auto 1fr minmax(158px, 1fr);
    flex: 3;
    .rank {
      font-size: 18px;
      color: #77777a;
    }

    .avatar {
      height: 50px;
      width: 50px;
    }

    .trophiesCount {
      font-size: 16px;
    }
  `,
  S: css`
    column-gap: 10px;

    padding: 20px 15px;

    grid-template-areas: 'rank avatar summoner-name trophies-count islands islands-completed';
    grid-template-columns: auto auto 150px 130px auto auto 1fr;

    .summonerName {
      color: inherit;
    }

    .rank {
      font-size: 18px;
      color: #77777a;
    }

    .avatar {
      height: 50px;
      width: 50px;
    }

    .trophiesCount,
    .islands {
      border-left: 1px solid #616165;
      align-self: stretch;
      display: flex;
      align-items: center;
      padding-left: 16px;
    }

    .trophiesCount span {
      color: #77777a;
      margin-left: 0.5em;
    }

    .islandsCompleted svg {
      height: 28px;
      width: 28px;
    }
  `,
};

const CardLink = styled.a<CardProps>`
  background: #3f3e43;
  display: grid;
  font-size: 16px;
  align-items: center;
  row-gap: 6px;
  text-decoration: none;

  :active {
    text-decoration: none;
  }

  :hover {
    background: #616165;
  }

  ${(props) => sizes[props.size]};
`;

type Props = {
  size: 'L' | 'M' | 'S';
  ranking: Ranking;
  rank?: number;
};
const PlayerCard = ({ size, rank, ranking }: Props) => {
  const { data: version } = useQuery('version', getRecentVersion);

  return (
    <Link
      to={`/?subpage=profile&summonerName=${ranking?.summonerName}&platformId=${ranking?.platformId}`}
    >
      <CardLink size={size}>
        {rank && <Rank className="rank">#{rank}</Rank>}
        <Avatar
          className="avatar"
          isLoading={!ranking}
          src={
            version && ranking?.profileIconId
              ? `https://ddragon.leagueoflegends.com/cdn/${version.riot}/img/profileicon/${ranking?.profileIconId}.png`
              : "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"
          }
          alt=""
        />
        <SummonerName className="summonerName" isLoading={!ranking}>
          {ranking?.summonerName}
        </SummonerName>
        {(size !== 'S' || ranking) && (
          <TrophiesCount className="trophiesCount" isLoading={!ranking}>
            {ranking && (
              <>
                {ranking?.trophiesCompleted} <span>{i18n('Trophies')}</span>
              </>
            )}
          </TrophiesCount>
        )}
        {ranking && size !== 'L' && (
          <Islands className="islands">{i18n('Completed')}</Islands>
        )}
        {ranking?.islands && (
          <IslandsCompleted
            className="islandsCompleted"
            islands={ranking.islands || []}
          />
        )}
      </CardLink>
    </Link>
  );
};

export default PlayerCard;
