import React, { useState } from "react";
import styles from '../../styles/boulderListContainer';
import ButtonStyles from "../../styles/button";
import BText from "../widgets/text";
import BButton from "../widgets/button";
import {AntDesign} from "@expo/vector-icons";
import {
  SafeAreaView,
  View,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  SearchBar,
  Badge,
} from "react-native-elements";
import BOULDER_DATA, { IBoulder } from "../../entities/Boulder";
import BoulderListStyle from "../../styles/boulderList";
import {getColor,getDifficulty} from '../../entities/boulderDetailValues';
import { Value } from "react-native-reanimated";

const BoulderList = ({navigation}: {navigation:any}) => {
  const [boulder_data, setBoulder_data] = useState(BOULDER_DATA);
  const [selectedId, setSelectedId] = useState("");
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(BOULDER_DATA);
  const [masterDataSource, setMasterDataSource] = useState(BOULDER_DATA);

  const handlePress = (id:string) => {
    setSelectedId(id);
    navigation.navigate('DetailBoulderScreen', {
        boulderID:id,
    })
}


  
  //Searching for Boulders
  const searchBoulderList: any = (input: string) => {
    if(input) {
      const filteredData = BOULDER_DATA.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
        const textData = input.toUpperCase();
        return itemData.indexOf(textData) > -1;
        }
      );
      setFilteredDataSource(filteredData);
      setSearch(input);
    }
    else {
      setFilteredDataSource(masterDataSource);
      setSearch(input);
    }
  };


  //Rendering List Items
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
      <TouchableOpacity onPress={onPress} style={[BoulderListStyle.item, style]}>
        <Text style={BoulderListStyle.title}>{item.title}</Text>

        <View style={BoulderListStyle.itemsgroup}>
          <View style={BoulderListStyle.location}>
            <Image style={BoulderListStyle.icon} source={require('../../assets/images/location.svg')}></Image>
            <Text style={BoulderListStyle.location}>{item.location_id}</Text>
          </View>
        </View>

        <Text style={BoulderListStyle.difficulty}>{item.difficulty}</Text>

        <Text style={BoulderListStyle.date}>{item.created.toDateString()}</Text>

        <View style={BoulderListStyle.itemsgroup}>
          <View style={BoulderListStyle.badge}>
            <Badge badgeStyle={{width:25,height:25,borderRadius:25, backgroundColor:getColor(item.color).value, alignItems: 'center',}}/>
          </View>
        </View>
        
      </TouchableOpacity>
    );
  };

  //Rendering Items
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

  //Rendering Headersection
  const renderHeader = () => {
    return <View style={BoulderListStyle.header}>
              <View style={BoulderListStyle.searchbox}>
                <SearchBar inputContainerStyle={BoulderListStyle.textInputStyle}
                containerStyle={BoulderListStyle.textInputContainerStyle} round searchIcon={{ size: 24 }}
                onChangeText={(text) => searchBoulderList(text)}
                onClear ={(text) => searchBoulderList('')}
                value={search}
                placeholder="Enter a name..."/>
              </View>
              <View style={BoulderListStyle.addbuttoncontainer}>
                <BButton style={[BoulderListStyle.btn]}  onPress={handlePress}>
                    <BText style={styles.buttonText}>
                        <AntDesign name="plus" size={20} color="#ffffff" />
                        Add
                    </BText>
                </BButton>
              </View>
              <View style={BoulderListStyle.item}>
                <Text style={BoulderListStyle.headlinesectiontitle}>Name</Text>
                <Text style={BoulderListStyle.headlinesectionlocation}>Location</Text>
                <Text style={BoulderListStyle.headlinesectiondifficulty}>Difficulty</Text>
                <Text style={BoulderListStyle.headlinesectiondate}>Date</Text>
                <Text style={BoulderListStyle.headlinesectioncolor}>Color</Text>
              </View>
            </View>
  };

  return (
    <SafeAreaView style={BoulderListStyle.container}>
  
      <FlatList
        data={filteredDataSource}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        ListHeaderComponent={renderHeader()}
        stickyHeaderIndices={[0]}
      />
    </SafeAreaView>
  );
};

export default BoulderList;
