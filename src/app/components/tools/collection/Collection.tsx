import { FC } from 'react';
import styled from '@emotion/styled';
import CollectionItem from './CollectionItem';
import CombatProgress from '../../trophies/combat/CombatProgress';
import HubProgress from '../../trophies/hub/HubProgress';
import SkillsProgress from '../../trophies/skills/SkillsProgress';
import TeamworkProgress from '../../trophies/teamwork/TeamworkProgress';
import ObjectivesProgress from '../../trophies/objectives/ObjectivesProgress';
import EpicProgress from '../../trophies/epic/EpicProgress';
import SpecialProgress from '../../trophies/special/SpecialProgress';
import { useAccount } from '../../../contexts/account';
import * as combatTrophies from '../../trophies/combat/client';
import * as epicTrophies from '../../trophies/epic/client';
import * as hubTrophies from '../../trophies/hub/client';
import * as objectivesTrophies from '../../trophies/objectives/client';
import * as skillsTrophies from '../../trophies/skills/client';
import * as specialTrophies from '../../trophies/special/client';
import * as teamworkTrophies from '../../trophies/teamwork/client';
import trophies from '../../trophies/client';
import { i18n } from '../../../lib/i18n/i18n';

const Items = styled.div`
  display: flex;
  font-family: 'Roboto Mono', monospace;
  overflow: auto;
`;

const Collection: FC = () => {
  const { account } = useAccount();
  const completedTrophies =
    account?.trophies.filter((accountTrophy) => accountTrophy.progress === 1) ||
    [];

  return (
    <>
      <h2>{i18n('My Collection')}</h2>
      <Items>
        <CollectionItem
          title={i18n('Origin')}
          Progress={HubProgress}
          trophiesMax={Object.keys(hubTrophies).length}
          trophiesCount={
            completedTrophies.filter(
              (accountTrophy) =>
                accountTrophy.progress === 1 &&
                trophies[accountTrophy.name].category === 'hub'
            ).length
          }
        />
        <CollectionItem
          title={i18n('Combat')}
          Progress={CombatProgress}
          trophiesMax={Object.keys(combatTrophies).length}
          trophiesCount={
            completedTrophies.filter(
              (accountTrophy) =>
                trophies[accountTrophy.name].category === 'combat'
            ).length
          }
        />
        <CollectionItem
          title={i18n('Skills')}
          Progress={SkillsProgress}
          trophiesMax={Object.keys(skillsTrophies).length}
          trophiesCount={
            completedTrophies.filter(
              (accountTrophy) =>
                trophies[accountTrophy.name].category === 'skills'
            ).length
          }
        />
        <CollectionItem
          title={i18n('Teamwork')}
          Progress={TeamworkProgress}
          trophiesMax={Object.keys(teamworkTrophies).length}
          trophiesCount={
            completedTrophies.filter(
              (accountTrophy) =>
                trophies[accountTrophy.name].category === 'teamwork'
            ).length
          }
        />
        <CollectionItem
          title={i18n('Objectives')}
          Progress={ObjectivesProgress}
          trophiesMax={Object.keys(objectivesTrophies).length}
          trophiesCount={
            completedTrophies.filter(
              (accountTrophy) =>
                trophies[accountTrophy.name].category === 'objectives'
            ).length
          }
        />
        <CollectionItem
          title={i18n('Epic')}
          Progress={EpicProgress}
          trophiesMax={Object.keys(epicTrophies).length}
          trophiesCount={
            completedTrophies.filter(
              (accountTrophy) =>
                trophies[accountTrophy.name].category === 'epic'
            ).length
          }
        />
        <CollectionItem
          title={i18n('Special')}
          Progress={SpecialProgress}
          trophiesMax={Object.keys(specialTrophies).length}
          trophiesCount={
            completedTrophies.filter(
              (accountTrophy) =>
                trophies[accountTrophy.name].category === 'special'
            ).length
          }
        />
      </Items>
    </>
  );
};

export default Collection;
