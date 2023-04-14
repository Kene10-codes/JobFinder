import React from 'react';
import {useRouter} from 'expo-router';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import styles from './nearbyjobs.style';
import {COLORS} from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

const Nearbyjobs = () => {
  return (
    <View style={styles.container}>
      <Text>Nearby Jobs</Text>
    </View>
  );
};

export default Nearbyjobs;
