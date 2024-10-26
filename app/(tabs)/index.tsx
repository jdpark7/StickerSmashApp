import { Text, View, StyleSheet } from 'react-native';
/* @tutinfo Import <CODE>Link</CODE> component from <CODE>expo-router</CODE>. */ import { Link } from 'expo-router'; 
import { Image } from 'expo-image';
import Button from '@/components/Button';
import ImageViewer from "@/components/ImageViewer";
import { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
  },
  text: {
    color: '#fff',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  /* @tutinfo Add the style of <CODE>fontSize</CODE>, <CODE>textDecorationLine</CODE>, and <CODE>color</CODE> to <CODE>Link</CODE> component. */
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
