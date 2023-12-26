import {launchImageLibrary} from 'react-native-image-picker';

const pickImage = async () => {
  try {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    return result;
  } catch (error) {
    console.log('error::', error);
  }
};

export default pickImage;
