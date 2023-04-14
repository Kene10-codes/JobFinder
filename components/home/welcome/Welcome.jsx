import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useRouter} from 'expo-router';

import styles from './welcome.style';
import {SIZES, icons, images} from '../../../constants';

const jobTypes = ['Full-time', 'part-time', 'Contract'];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState ();
  const router = useRouter ();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userName}>Nwobodo Kenechukwu </Text>
        <Text style={styles.welcomeMessage}>Find your perfect job here...</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What type of job are looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />

        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab (activeJobType, item)}
              onPress={() => {
                setActiveJobType (item);
                router.push (`/search/${item}`);
              }}
            >
              <Text style={styles.tabText (activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
