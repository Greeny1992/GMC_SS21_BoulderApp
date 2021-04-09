import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
import BOULDER_DATA, { IBoulder } from '../../entities/Boulder';

const test = ()=>{}
const ListItem = ( title : string) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const BoulderList = () => {
  const _renderItem = ({item}:{item: IBoulder}) => (
    <View style={styles.item}>
        <Image style={styles.thumbnail}
                source={{ uri:item.img}} />
        <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={BOULDER_DATA}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  thumbnail:{
      width: 50,
      height: 50,
  }
});

export default BoulderList;