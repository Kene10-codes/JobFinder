import {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import {Stack, useRouter} from 'expo-router';

import {SIZES, COLORS, icons, images} from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';

export default function Page () {
  const router = useRouter ();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
          ),
          headerTitle: '',
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main} />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  main: {
    flex: 1,
    padding: SIZES.medium,
  },
});
