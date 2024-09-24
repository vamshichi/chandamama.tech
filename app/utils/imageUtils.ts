 function getImagePath(imagePath: string): string {
    if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
      return imagePath
    }
  
    // For local images, ensure they start with a forward slash
    return imagePath.startsWith('/') ? imagePath : `/${imagePath}`
  }

  export default getImagePath;