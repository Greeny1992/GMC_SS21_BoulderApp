import moment from "moment";
import React from "react";
import { GestureResponderEvent, Image, Text, TouchableOpacity, View } from "react-native";
import { Badge } from "react-native-elements";
import { IBoulder } from "../../../data/entities/Boulder";
import { getColor, getDifficulty } from "../../../data/lookupValues/boulderDetailValues";
import BoulderListStyle from "../../../styles/BoulderList/boulderList";
import LayoutStyle from "../../../styles/utils/layout";
import BText from "../utils/text";

interface BoulderListItemProps {
    style?: any;
    item:IBoulder;
    onPress: any 
  }
const BoulderListItem: React.FC<BoulderListItemProps> = (props: BoulderListItemProps) => {
    const {style,item,onPress} = props;
    let formattedDate = item.lastChangeTimestamp ? (moment(item.lastChangeTimestamp)).format('DD.MM.YYYY') :"";
    const difficulty = getDifficulty(item.difficulty)?.name
    return (
      <TouchableOpacity onPress={onPress} style={[BoulderListStyle.item, style]}>
        <View style={[LayoutStyle.containerRow]}>
          <BText style={BoulderListStyle.title}>{item.title}</BText>
          <View style={BoulderListStyle.itemsgroup}>
            <View style={BoulderListStyle.badge}>
              <Badge badgeStyle={{width:25,height:25,borderRadius:25, backgroundColor:getColor(item.color).value, alignItems: 'center',}}/>
            </View>
          </View>

        </View>
        <View style={[LayoutStyle.containerRow, BoulderListStyle.detailRow]}>
          <Text style={[BoulderListStyle.details,BoulderListStyle.difficulty]}>Difficulty: {difficulty}</Text>
          <Text style={[BoulderListStyle.details,BoulderListStyle.date]}>{formattedDate}</Text>
        </View>
        
      </TouchableOpacity>
    );
  };
  export default BoulderListItem
  