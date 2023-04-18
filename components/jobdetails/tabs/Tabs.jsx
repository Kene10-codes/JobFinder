import {useState} from 'react';
import {TouchableOpacity, FlatList, Text, View} from 'react-native';

import styles from './tabs.style';
import {SIZES} from '../../../constants';

function TabButton({name, activeTab, onHandleSearchType}) {
  return (
    <TouchableOpacity>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({item}) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearch={() => setActiveTab (item)}
          />
        )}
      />
    </View>
  );
};

export default Tabs;
