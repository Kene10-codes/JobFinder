import {useRouter} from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import styles from './nearbyjobs.style';
import {COLORS} from '../../../constants'; 

import NearbyJobCard
  from '../../../components/common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {
  const router = useRouter ();
 const {error, isLoading, refetch, data} = useFetch("search", {
  query: 'Mobile Developer', page: '1', num_pages: '1',
 })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Nearby Jobs</Text>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading
          ? <ActivityIndicator size="large" colors={COLORS.primary} />
          : error
              ? <Text>Something is wrong</Text>
              : data?.map(job => (
                <NearbyJobCard job={job} key={`nearby-job-${job?.job_id}`} handleNavigate={() => router.push( `/job-details/${job?.job_id}`)}/>
              ))}
      </View>
    </View>
  );
};

export default Nearbyjobs;
