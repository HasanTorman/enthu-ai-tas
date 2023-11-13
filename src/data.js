import audio_1 from './assets/sounds/sound-1.mp3'
import audio_2 from './assets/sounds/sound-2.mp3'
import audio_3 from './assets/sounds/sound-3.mp3'
import phoneIcon from './assets/images/phone_forwarded_FILL0_wght400_GRAD0_opsz24.png'
import moment from 'moment/moment'

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

const callsData = [
  {
    id: 1,
    callTime: '13 Jan 2023 , 05:43 pm',
    duration: '00:31',
    callerType: 'NA',
    agent: 'John',
    team: 'Sales team',
    from: '078888888',
    to: '079999999',
    type: { phoneIcon },
    moments: '1 15',
    scriptComp: '17%',
    action: 'reviewed',
    callTrack: { audio_1 },
  },
  {
    id: 2,
    callTime: '14 Nov 2023 , 05:43 pm',
    duration: '00:40',
    callerType: 'NA',
    agent: 'Jean',
    team: 'Sales team',
    from: '078888888',
    to: '0799999999',
    type: { phoneIcon },
    moments: '....',
    scriptComp: '19%',
    action: 'reviewed',
    callTrack: { audio_2 },
  },
  {
    id: 3,
    callTime: '10 Nov 2023 , 05:43 pm',
    duration: '01.30',
    callerType: 'NA',
    agent: 'Adam',
    team: 'Sales team',
    from: '078888888',
    to: '079999999',
    type: { phoneIcon },
    moments: '....',
    scriptComp: '20%',
    action: 'reviewed',
    callTrack: { audio_3 },
  },
]

// sort calls by date
export const callsDetailes = callsData.sort(
  (a, b) => moment(a.callTime) - moment(b.callTime),
)

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
