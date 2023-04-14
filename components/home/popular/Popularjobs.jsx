import {useState} from 'react';
import {useRouter} from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import styles from './popularjobs.style';
import {SIZES, COLORS} from '../../../constants';

// import popularJobCards from '../../../';

const Popularjobs = () => {
  const router = useRouter ();
  const isLoading = false;
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading
          ? <ActivityIndicator size="large" colors={COLORS.primary} />
          : error ? <Text>Something is wrong</Text> : <FlatList />}
      </View>
    </View>
  );
};

export default Popularjobs;
