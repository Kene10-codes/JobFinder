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

import PopularJobCard
  from '../../../components/common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter ();
 const {error, isLoading, refetch, data} = useFetch("search", {
  query: 'Mobile Developer', page: '1', num_pages: '1',
 })
 const [selectedJob, setSelectedJob] = useState()

 const handleCardPress = (item) => {
  router.push(`/job-details/${item.job_id}`)
  setSelectedJob(item.job_id)
 }

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
          : error
              ? <Text>Something is wrong</Text>
              : <FlatList
                  data={data}
                  renderItem={({item}) => <PopularJobCard item={item} handleCardPress={handleCardPress} />}
                  keyExtractor={item => item?.job_id}
                  contentContainerStyle={{columnGap: SIZES.medium}}
                  horizontal
                />}
      </View>
    </View>
  );
};

export default Popularjobs;
