import {
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {useState, useCallback} from 'react';
import {useRouter, useSearchParams, Stack} from 'expo-router';

import {SIZES, COLORS, icons} from '../../constants';
import {
  ScreenHeaderBtn,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
} from '../../components';
import useFetch from '../../hook/useFetch';

const tabs = ['About', 'Qualifications', 'Responsibilites'];

const JobDetails = () => {
  const params = useSearchParams ();
  const router = useRouter ();

  const {error, isLoading, refetch, data} = useFetch ('job-details', {
    job_id: params.id,
  });

  const [refreshing, setRefreshing] = useState (false);
  const [activeTab, setActiveTab] = useState (tabs[0]);

  onRefresh = () => {};
  return (
    <SafeAreaView style={{flex: 1, background: COLORS.lightWhite}}>
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.back}
              dimension="60%"
              handlePress={() => router.back ()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: '',
        }}
      />

      <ScrollView
        showVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      {isLoading
        ? <ActivityIndicator size="large" color={COLORS.primary} />
        : error
            ? <Text>Something is wrong</Text>
            : data.length === 0
                ? <Text>No data</Text>
                : <View style={{paddingBottom: 100, padding: SIZES.medium}}>
                    <Company
                      companyLogo={data[0].employer_logo}
                      jobTitle={data[0].job_title}
                      companyName={data[0].employer_name}
                      location={data[0].job_country}
                    />
                    <JobTabs tabs={tabs} setActiveTab={setActiveTab} />
                  </View>}
    </SafeAreaView>
  );
};
export default JobDetails;
