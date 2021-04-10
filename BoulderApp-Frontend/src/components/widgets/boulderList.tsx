import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import BOULDER_DATA, { IBoulder } from "../../entities/Boulder";

const BoulderList = ({navigation}: {navigation:any}) => {
  const [boulder_data, setBoulder_data] = useState(BOULDER_DATA);
  const [selectedId, setSelectedId] = useState("");

  const handlePress = (id:string) => {
    setSelectedId(id);
    navigation.navigate('DetailBoulderScreen', {
        boulderID:id,
    })
}

  const BoulderListItem = ({
    item,
    onPress,
    style,
  }: {
    item: IBoulder;
    onPress: any;
    style: any;
  }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Image style={styles.thumbnail} source={{ uri: item.img }} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }: { item: IBoulder }) => {
    const backgroundColor = item.id === selectedId ? "#147aff" : "#c0e6ff";

    return (
      <BoulderListItem
        item={item}
        onPress={() => handlePress(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
  
      <FlatList
        data={boulder_data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#c0e6ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  thumbnail: {
    width: 50,
    height: 50,
  },
});

export default BoulderList;
