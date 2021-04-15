import React from "react";
import { GestureResponderEvent, Image, TouchableOpacity, View } from "react-native";
import { Badge } from "react-native-elements";
import { IBoulder } from "../../../data/entities/Boulder";
import { getColor } from "../../../data/lookupValues/boulderDetailValues";
import BoulderListStyle from "../../../styles/BoulderList/boulderList";
import BText from "../text";

interface BoulderListItemProps {
    style?: any;
    item:IBoulder;
    onPress: any 
  }
const BoulderListItem: React.FC<BoulderListItemProps> = (props: BoulderListItemProps) => {
    const {style,item,onPress} = props;
    console.log(item)
    return (
      <TouchableOpacity onPress={onPress} style={[BoulderListStyle.item, style]}>
        <BText style={BoulderListStyle.title}>{item.title}</BText>

        <View style={BoulderListStyle.itemsgroup}>
          <View style={BoulderListStyle.location}>
            <Image style={BoulderListStyle.icon} source={require('../../../assets/images/location.svg')}></Image>
            <BText style={BoulderListStyle.location}>{item.location_id}</BText>
          </View>
        </View>

        <BText style={BoulderListStyle.difficulty}>{item.difficulty}</BText>

        <BText style={BoulderListStyle.date}>{item.created.toDateString()}</BText>

        <View style={BoulderListStyle.itemsgroup}>
          <View style={BoulderListStyle.badge}>
            <Badge badgeStyle={{width:25,height:25,borderRadius:25, backgroundColor:getColor(item.color).value, alignItems: 'center',}}/>
          </View>
        </View>
        
      </TouchableOpacity>
    );
  };
  export default BoulderListItem