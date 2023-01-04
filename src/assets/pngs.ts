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
    default:
      return undefined;
  }
};
