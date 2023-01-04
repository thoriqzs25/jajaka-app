import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '@src/assets/fonts/icons/selection.json';

export type IconType = 'home1' | 'user1' | 'notifications-outline' | 'cheveron-right'
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