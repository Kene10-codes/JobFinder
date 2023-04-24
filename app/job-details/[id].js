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

const tabs = ['About', 'Qualifications', 'Responsibilities'];

const JobDetails = () => {
  const params = useSearchParams ();
  const router = useRouter ();

  const {error, isLoading, refetch, data} = useFetch ('job-details', {
    job_id: params.id,
  });

  const [refreshing, setRefreshing] = useState (false);
  const [activeTab, setActiveTab] = useState (tabs[0]);

  const onRefresh = useCallback (() => {
    setRefreshing (true);
    refetch ();
    setRefreshing (false);
  }, []);

  const displayTabContent = () => {
    switch(activeTab) {
      case "Qualifications": 
     return <Specifics title="Qualifications" points={data[0].job_highlights?.Qualifications ?? ["N/A"]} />
      break;
      case "About" : 
      return <JobAbout info={data[0].job_description ?? "No data provided"} />
      break;
      case "Responsibilities":
        return <Specifics title="Responsibilities" points={data[0].job_highlights?.Responsibilities ?? ["N/A"]} />
        break;

    }
  }

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
      >
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
                    <JobTabs
                      tabs={tabs}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                    {displayTabContent()}
                  </View>}
                  </ScrollView>
                  <JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jpbs/results'} />
    </SafeAreaView>
  );
};
export default JobDetails;
