import {useState, useEffect, useCallback} from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './footer.style';
import {icons} from '../../../constants';

const Footer = ({url}) => {
  const [liked, setLiked] = useState (true);

  // const storeLike = async liked => {
  //   try {
  //     const value = await AsyncStorage.setItem ('@storage_Key', liked);
  //   } catch (e) {
  //     console.log (e);
  //   }
  // };

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem ('@storage_Key');

  //     return value;
  //   } catch (e) {
  //     // error reading value
  //     console.log (e);
  //   }
  // };

  // useEffect (
  //   () => {
  //     getData ();
  //   },
  //   [liked]
  // );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={liked ? styles.likeBtn : styles.likedBtn}
        onPress={() => {
          setLiked (!liked);
        }}
      >
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL (url)}
      >
        <Text style={styles.applyBtnText}>
          Apply for Job
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
