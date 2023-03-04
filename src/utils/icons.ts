import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '@src/assets/fonts/icons/selection.json';

export type IconType =
  | 'fluent_home'
  | 'fluent_person'
  | 'person'
  | 'fab'
  | 'forum'
  | 'notification_custom'
  | 'user-solid-circle'
  | 'user1'
  | 'notifications-outline'
  | 'cheveron-right'
  | 'cheveron-left'
  | 'search1'
  | 'bullhorn'
  | 'eye'
  | 'eye-blocked'
  | 'checkmark1'
  | 'spoon-knife'
  | 'coin-dollar'
  | 'light-bulb'
  | 'notification'
  | 'chat-bubble-dots'
  | 'service'
  | 'checkmark-outline'
  | 'send-alt'
  | 'star-full'
  | 'lock-closed'
  | 'help_outline'
  | 'settings'
  | 'sticky_note'
  | 'logout'
  | 'edit-pencil';

export default createIconSetFromIcoMoon(icoMoonConfig, 'icomoon');

// selection.json scripts
// let data = {DATA}

// const iconsArr = []

// for (let i=0 ; i < data.icons.length; i++) {
//   const val = data.icons[i].properties
//   const prop = {
//     properties: {
//       name: val.name,
//       code: val.code
//     }
//   }
//   iconsArr.push(prop)
// }

// const res = {
//   icons: iconsArr
// }

// console.log(res)
// document.querySelector('#header').innerHTML = JSON.stringify(res)
