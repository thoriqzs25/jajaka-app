export const imageSource = (name: string) => {
  switch (name) {
    case 'logo':
      return require('@src/assets/images/logo.webp');
    case 'bongbolongan-logo':
      return require('@src/assets/images/bongbolongan-logo.webp');
    case 'ngajarkeun-logo':
      return require('@src/assets/images/ngajarkeun-logo.webp');
    case 'news-dummy-image':
      return require('@src/assets/images/news-dummy-image.webp');
    case 'character-1-logo':
      return require('@src/assets/images/character-1-logo.webp');
    case 'character-2-logo':
      return require('@src/assets/images/character-2-logo.webp');
    case 'character-3-logo':
      return require('@src/assets/images/character-3-logo.webp');
    case 'map-marker':
      return require('@src/assets/images/map-marker.webp');
    case 'map-marker-active':
      return require('@src/assets/images/map-marker-active.webp');
    case 'location-dummy':
      return require('@src/assets/images/location-dummy.webp');
    case 'dummy-user':
      return require('@src/assets/images/dummy-user.webp');
    case 'dummy-user-2':
      return require('@src/assets/images/dummy-user-2.webp');
    case 'dummy-user-3':
      return require('@src/assets/images/dummy-user-3.webp');
    case 'empty-chat':
      return require('@src/assets/images/empty-chat.webp');
    default:
      return undefined;
  }
};
