import audio_1 from './assets/sounds/sound-1.mp3'
import audio_2 from './assets/sounds/sound-2.mp3'
import audio_3 from './assets/sounds/sound-3.mp3'

export const sidebarData = [
  {
    id: 1,
    filterBy: 'Teams',
    filterOptions: ['All', 'Sales team'],
    name: 'by_teams',
  },
  {
    id: 2,
    filterBy: 'Agents',
    filterOptions: ['All', 'john', 'jane'],
    name: 'by_agents',
  },
  {
    id: 3,
    filterBy: 'Groups',
    filterOptions: ['All'],
    name: 'by_groups',
  },
  {
    id: 4,
    filterBy: 'Moments',
    filterOptions: ['All'],
    name: 'by_moments',
  },
  {
    id: 5,
    filterBy: 'Call Type',
    filterOptions: ['All'],
    name: 'by_type',
  },
  {
    id: 6,
    filterBy: 'Call Duraion',
    name: 'by_callDurtion',
  },
  {
    id: 7,
    filterBy: 'Calls Reviwes',
    filterOptions: ['All'],
    name: 'by_action',
  },
]

export const callsDetailes = [
  {
    id: 1,
    callTime: '28 Jan 2021 - 02:29 PM',
    duration: '00:31',
    callerType: 'NA',
    agent: 'John',
    team: 'Sales team',
    from: '078888888',
    to: '079999999',
    type: 'icon',
    moments: '1 15',
    scriptComp: '17%',
    action: 'reviewed',
    callTrack: { audio_1 },
  },
  {
    id: 2,
    callTime: '28 Jan 2021 - 02:29 PM',
    duration: '...',
    callerType: '....',
    agent: '....',
    team: '....',
    from: '078888888',
    to: '0799999999',
    type: '....',
    moments: '....',
    scriptComp: '...',
    action: '....',
    callTrack: { audio_2 },
  },
  {
    id: 3,
    callTime: 'test',
    duration: '...',
    callerType: '....',
    agent: '....',
    team: '....',
    from: '078888888',
    to: '079999999',
    type: '....',
    moments: '....',
    scriptComp: '...',
    action: '....',
    callTrack: { audio_3 },
  },
]

export const tableHead = [
  'Call date/time',
  'Duration (mm:ss)',
  'Caller Type',
  'Agent',
  'Team',
  'To/From',
  'Type',
  'Moments',
  'Script Compliance',
  'Action',
]
