import React, { useState } from "react";
import IBoulderInteraction from "../../entities/BoulderInteraction"
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
  ImageComponent,
} from "react-native";
import {
  SearchBar,
  Badge,
} from "react-native-elements";
import BOULDER_DATA, { IBoulder } from "../../entities/Boulder";
import BoulderListStyle from "../../styles/boulderList";
import {getColor,getDifficulty} from '../../entities/boulderDetailValues';

import { Icon, ListItem } from 'react-native-elements';
import getCurrentBoulderInteraction from '../../entities/BoulderInteraction';
import BoulderInteractionListStyle from  '../../styles/boulderInteractionList';
import TextStyle from "../../styles/text";

interface BoulderInteractionListProps {
    boulder_id:string,   
    user_id:string, 
    title: string,
    status:number,
    comment:string,
    icon: string,
    created: Date,
    creator_id:string,
}

const BoulderInteractionList: React.FC<BoulderInteractionListProps[]> = (props: any) => {
    const {boulder_id, user_id} = props;
    const boulder_interaction = getCurrentBoulderInteraction(boulder_id,user_id);
    const [boulder_interaction_data, setBoulder_interaction_data] = useState(getCurrentBoulderInteraction(boulder_id,user_id));





    return (
        <View>
            {
                boulder_interaction.map((interaction, i) => (
                <ListItem key={i} bottomDivider>
                    <View style={BoulderInteractionListStyle.item}>
                        <View style={BoulderInteractionListStyle.box}>
                            <Image style={BoulderInteractionListStyle.icon} source={require('../../assets/images/user.png')}></Image>
                        </View>
                        <View style={BoulderInteractionListStyle.box}>
                            <Text style={BoulderInteractionListStyle.title}>{interaction.title}</Text>
                        </View>
                        <View style={BoulderInteractionListStyle.box}>
                            <Text style={BoulderInteractionListStyle.comment}>{interaction.comment}</Text>
                        </View>
                        <View style={BoulderInteractionListStyle.box}>
                        <Text>{interaction.created.toDateString()}</Text>
                        </View>
                    </View>
                </ListItem>
                ))
            }
            </View>
    );
        
}

export default BoulderInteractionList




/**
 * <View>
            {
                boulder_interaction.map((interaction, i) => (
                <ListItem key={i} bottomDivider>
                    <Icon name={interaction.icon}></Icon>
                    <ListItem.Content>
                    <ListItem.Title>{interaction.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                ))
            }
            </View>


            <Text style={BoulderInteractionListStyle.title}>{item.title}</Text>

        <View style={BoulderInteractionListStyle.itemsgroup}>
          <View style={BoulderInteractionListStyle.location}>
            <Image style={BoulderInteractionListStyle.icon} source={require('../../assets/images/location.svg')}></Image>
            <Text style={BoulderInteractionListStyle.location}>{item.comment}</Text>
          </View>
        </View>

        <Text style={BoulderListStyle.difficulty}>{item.created}</Text>

        <Text style={BoulderListStyle.date}>{item.created.toDateString()}</Text>

        <View style={BoulderListStyle.itemsgroup}>
          <View style={BoulderListStyle.badge}>
            <Badge badgeStyle={{width:25,height:25,borderRadius:25, backgroundColor:getColor(item.status).value, alignItems: 'center',}}/>
          </View>
        </View>





**************************************

    //Rendering List Items
  const BoulderInteractionListItem = ({
    item,
    onPress,
    style,
  }: {
    item: BoulderInteractionListProps;
    onPress: any;
    style: any;
  }) => {
    return (
        {
            item.map((interaction, i) => (
            <ListItem key={i} bottomDivider>
                <Icon name={interaction.icon}></Icon>
                <ListItem.Content>
                <ListItem.Title>{interaction.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            ))
        }
    );
  };
  

  //Rendering Items
  const renderItem = ({ item }: { item: BoulderInteractionListProps }) => {
    const backgroundColor = "#c0e6ff";

    return (
      <BoulderInteractionListItem
        item={item}
        onPress={() => console.log('Hello')}
        style={{ backgroundColor }}
      />
    );
  };


  <SafeAreaView style={BoulderListStyle.container}>
            <FlatList
                data={boulder_interaction_data}
                renderItem={renderItem}
            />
    </SafeAreaView>
    );



















 */