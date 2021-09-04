import * as combat from './combat/client';
import * as epic from './epic/client';
import * as hub from './hub/client';
import * as objectives from './objectives/client';
import * as skills from './skills/client';
import * as special from './special/client';
import * as teamwork from './teamwork/client';

const trophies = {
  ...combat,
  ...epic,
  ...hub,
  ...objectives,
  ...skills,
  ...special,
  ...teamwork,
};
export default trophies;

export const allTrophies = Object.values(trophies);
// @ts-ignore
window.allTrophies = allTrophies;
