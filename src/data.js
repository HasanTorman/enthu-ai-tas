import audio_1 from './assets/sounds/sound-1.mp3'
import audio_2 from './assets/sounds/sound-2.mp3'
import audio_3 from './assets/sounds/sound-3.mp3'

import bar_chartIcon from './assets/images/bar_chart_FILL0_wght400_GRAD0_opsz24.png'
import calenderIcon from './assets/images/calendar_today_FILL0_wght400_GRAD0_opsz24.png'
import callIcon from './assets/images/call_log_FILL0_wght400_GRAD0_opsz24.png'
import fILLIcon from './assets/images/description_FILL0_wght400_GRAD0_opsz24.png'
import lineIcon from './assets/images/earthquake_FILL0_wght400_GRAD0_opsz24.png'
import addPersonIcon from './assets/images/person_add_FILL0_wght400_GRAD0_opsz24.png'
import expandedIcon from './assets/images/expand_more_FILL0_wght400_GRAD0_opsz24.png'

import moment from 'moment/moment'

const callsData = [
  {
    id: 1,
    callTime: '13 Jan 2023 , 05:43 pm',
    duration: '00:31',
    callerType: 'NA',
    agent: 'John',
    team: 'Sales team',
    from: '078999',
    to: '079999999',
    type: 'Inbound',
    moments: '1 15',
    scriptComp: '17%',
    action: 'reviewed',
    callTrack: { audio_1 },
    evaluation: 0.65,
  },
  {
    id: 2,
    callTime: '14 Nov 2023 , 05:43 pm',
    duration: '01:55',
    callerType: 'NA',
    agent: 'Jean',
    team: 'Sales team',
    from: '078888888',
    to: '0799999999',
    type: 'Outbound',
    moments: '....',
    scriptComp: '19%',
    action: 'reviewed',
    callTrack: { audio_2 },
    evaluation: 0.7,
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
    type: 'Inbound',
    moments: '....',
    scriptComp: '20%',
    action: 'reviewed',
    callTrack: { audio_3 },
    evaluation: 0.8,
  },
  {
    id: 4,
    callTime: '14 Nov 2023 , 05:40 pm',
    duration: '01.00',
    callerType: 'NA',
    agent: 'hasan',
    team: 'Sales team',
    from: '078888888',
    to: '079999999',
    type: 'Inbound',
    moments: '....',
    scriptComp: '20%',
    action: 'reviewed',
    callTrack: { audio_3 },
    evaluation: 0.8,
  },
]

// sort calls by date
export const callsDetailes = callsData.sort(
  (a, b) => moment(a.callTime) - moment(b.callTime),
)

export const iconArray = [
  { id: 1, icon: expandedIcon },
  { id: 1, icon: callIcon },
  { id: 1, icon: bar_chartIcon },
  { id: 1, icon: lineIcon },
  { id: 1, icon: calenderIcon },
  { id: 1, icon: fILLIcon },
  { id: 1, icon: addPersonIcon },
]
export const filterData = [
  {
    id: 1,
    filterBy: 'Teams',
    filterOptions: ['All', 'Sales team'],
    name: 'by_teams',
  },
  {
    id: 2,
    filterBy: 'Agents',
    filterOptions: ['All', 'John', 'Jean', 'Adam'],
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
    filterOptions: ['All', 'Inbound', 'Outbound'],
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


// dammy Agent chat
export const agentChat = [
  {
    id: 1,
    client: 'Hello',
    agent: 'Hi , How can i help you',
  },
  {
    id: 2,
    client: 'I Have a Quastion',
    agent: 'Sure',
  },
  {
    id: 3,
    client: 'I want to know ... ',
    agent: 'Yes you can ...',
  },
]
