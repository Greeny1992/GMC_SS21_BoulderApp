import React from "react";
import { View, Image, Text } from "react-native";
import { Badge } from "react-native-elements";
import BText, { BTitle } from "./utils/text";
import LayoutStyle from "../../styles/utils/layout";
import styles from "../../styles/widgets/boulderMetadata";
import { IBoulder } from "../../data/entities/Boulder";
import { getColor, getDifficulty } from "../../data/lookupValues/boulderDetailValues";
import getLocation from "../../data/service/LocationService";
import BIcon from "./utils/icon";
import ColorTheme from "../../styles/theme/Color";
import moment from "moment";

interface BoulderMetaProps {
  style?: any;
  boulder: IBoulder;
  handleLikeClick:Function;
  handleEditClick: Function

}

const BoulderMetadata: React.FC<BoulderMetaProps> = (props: any) => {
  const { boulder, handleLikeClick, handleEditClick} = props;
  let formattedDate = boulder.created ? (moment(boulder.created)).format('DD.MM.YYYY') : "";
  const location = getLocation(boulder.location_id);
  const difficulty = getDifficulty(boulder.difficulty);
  const boulderImage = require('../../assets/images/boulder.jpeg');


  return (
    <View style={LayoutStyle.fullWidth}>
      <View >
        <View style={LayoutStyle.containerRow}>
          <BTitle label={boulder.title} style={[{flex:8}]}/>

          <BIcon icon="favorite" onPress={handleLikeClick} style={{flex:2}}
                  color={ boulder.like ? ColorTheme.like : ColorTheme.primary_light }
                  />
          <BIcon icon="edit" onPress={handleEditClick} style={styles.icon}/>

        </View>
      
        <View style={[LayoutStyle.containerRow]}>
          <View>
            <Image source={ boulderImage} style={[styles.image]}></Image>
            <View style={styles.badgeContainer}>
              <Badge
                badgeStyle={[
                  styles.badge,
                  { backgroundColor: getColor(boulder.color).value },
                ]}
              />
            </View>
          </View>
          <View style={[styles.column,styles.details]}>
            <View style={[LayoutStyle.containerRow]}>
              <View style={[styles.column]}>
                <BText style={[styles.row]}>Difficulty: </BText>
                <BText style={[styles.row]}>Country: </BText>
                <BText style={[styles.row]}>Region: </BText>
                <BText style={[styles.row]}>Created: </BText>
              </View>
              <View style={styles.column}>
                <BText style={[styles.row]}>{difficulty.name}</BText>
                <BText style={[styles.row]}>{location.country}</BText>
                <BText style={[styles.row]}>{location.region}</BText>
                <BText style={[styles.row]}>{formattedDate}</BText>
              </View>
            </View>
            

          </View>

          
      
         </View>
      </View> 
                
    </View>
  );
};

export default BoulderMetadata;

