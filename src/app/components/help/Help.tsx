import styled from '@emotion/styled';
import { i18n } from '../../lib/i18n/i18n';

const Container = styled.section`
  margin-top: 48px;
  padding: 15px 30px;

  summary::-webkit-details-marker,
  li::marker {
    color: #77777a;
  }

  details[open] > summary::-webkit-details-marker {
    color: #eaeaea;
  }
`;

const Content = styled.section`
  display: grid;
  grid-row-gap: 0.7em;
  overflow: auto;
  max-height: calc(100% - 48px);
  padding-right: 200px;
`;

const CombatSummary = styled.summary`
  color: var(--combat-color);
`;
const SkillsSummary = styled.summary`
  color: var(--skills-color);
`;
const TeamplaySummary = styled.summary`
  color: var(--teamplay-color);
`;
const ObjectivesSummary = styled.summary`
  color: var(--objectives-color);
`;
const EpicSummary = styled.summary`
  color: var(--epic-color);
`;

const Help = () => {
  return (
    <Container>
      <h2>{i18n('Welcome to Trophy Hunter!')}</h2>
      <Content>
        <h3>{i18n('What is Trophy Hunter?')}</h3>
        <p>
          {i18n(
            'Trophy Hunter is a new achievement app for League of Legends, it allows you to hunt for new crystals on Hunteria Islands, challenge yourself and strive to rule over them all, become the ultimate Trophy Hunter!'
          )}
        </p>
        <p>
          {i18n(
            'Each challenge island has 5 difficulty levels, from beginner to pro. Find the best for you, you may find that your emotional and intellectual skills improve along with your core abilities.'
          )}
        </p>
        <details>
          <CombatSummary>{i18n('Main Features')}</CombatSummary>
          <ul>
            <li>
              {i18n(
                'Over 200 different trophies to achieve, all with unique abilities and skills.'
              )}
            </li>
            <li>
              {i18n(
                'Over 80 live progress trophies, so that you never miss a trophy you hunt that’s near completion.'
              )}
            </li>
            <li>{i18n('Special trophies to add extra fun to your journey')}</li>
            <li>
              {i18n(
                'An epic island to challenge the best of the best. Are you up for a challenge?'
              )}
            </li>
            <li>{i18n('Tons of gameplay, plus lots of challenges.')}</li>
            <li>{i18n('Suitable for both casual and hardcore players.')}</li>
            <li>
              {i18n(
                'Keeping it fair! We do not support challenges that change your playstyle for the worse!!'
              )}
            </li>
          </ul>
        </details>
        <details>
          <SkillsSummary>{i18n('How it works')}</SkillsSummary>
          <p>
            {i18n(
              'Simple! Play LoL Summoner’s Rift or ARAM and wait for Trophy Hunter to analyze your match. After each match, you will get a list of obtained trophies and you can always see your progress and plan your path in the app.'
            )}
          </p>
        </details>
        <details>
          <TeamplaySummary>{i18n('Follow Us On Social')}</TeamplaySummary>
          <p>
            <a
              href="https://discord.gg/NTZu8Px"
              target="_blank"
              rel="noreferrer"
            >
              Discord
            </a>
            <br />
            <a
              href="https://github.com/lmachens/trophy-hunter"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        </details>
        <details>
          <ObjectivesSummary>
            {i18n('Do I need to log in to the app?')}
          </ObjectivesSummary>
          <p>
            {i18n(
              'The app will sync between your Riot account and the TH app automatically. You only have to log into LoL and run Trophy Hunter.'
            )}
          </p>
        </details>
        <details>
          <EpicSummary>
            {i18n('What games are supported by the app?')}
          </EpicSummary>
          <p>{i18n('We currently support League of Legends.')}</p>
        </details>
        <details>
          <CombatSummary>
            {i18n('Which game modes do you support?')}
          </CombatSummary>
          <p>
            {i18n(
              'Trophy Hunter Reforged officially supports Ranked Solo/Duo, Normal, Flex and ARAM game modes.'
            )}
          </p>
        </details>
        <details>
          <SkillsSummary>
            {i18n('Which regions does Trophy Hunter Reforged support?')}
          </SkillsSummary>
          <p>
            {i18n(
              'Trophy Hunter Reforged supports all regions except PBE and Garena.'
            )}
          </p>
        </details>
        <details>
          <TeamplaySummary>
            {i18n(
              'Why does Trophy Hunter Reforged not support Garena servers (Philippines, Singapore and Malaysia, Indonesia, Thailand, Taiwan, Vietnam)?'
            )}
          </TeamplaySummary>
          <p>
            {i18n(
              'Currently, Riot API does not support Garena, hence we cannot also.'
            )}
          </p>
        </details>
        <details>
          <ObjectivesSummary>
            {i18n('Will I see the progress of other players?')}
          </ObjectivesSummary>
          <p>{i18n('Yes, take a look at the leaderboards')}</p>
        </details>
        <details>
          <EpicSummary>
            {i18n(
              'What else do you do with those summoner names and progress?'
            )}
          </EpicSummary>
          <p>
            {i18n(
              'Nothing else. We use the information Riot provides all its partners through the API and present it to you.'
            )}
          </p>
        </details>
        <details>
          <CombatSummary>{i18n('How can I send you logs?')}</CombatSummary>
          <p>
            {i18n(
              "It's quite simple and takes just a few steps, please follow the instructions"
            )}{' '}
            <a
              href="https://support.overwolf.com/support/solutions/articles/9000176827-how-to-get-your-overwolf-logs"
              target="_blank"
              rel="noreferrer"
            >
              {i18n('here')}
            </a>
            .
          </p>
        </details>
      </Content>
    </Container>
  );
};

export default Help;
