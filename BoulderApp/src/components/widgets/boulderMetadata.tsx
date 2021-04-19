import React from "react";
import { View, Image } from "react-native";
import { Badge,Icon } from "react-native-elements";
import BText from "./utils/text";
import LayoutStyle from "../../styles/utils/layout";
import TextStyle from "../../styles/utils/text";
import styles from "../../styles/widgets/boulderMetadata";
import { IBoulder } from "../../data/entities/Boulder";
import { getColor, getDifficulty } from "../../data/lookupValues/boulderDetailValues";
import getLocation from "../../data/service/LocationService";
import BIcon from "./utils/icon";

interface BoulderMetaProps {
  style?: any;
  boulder: IBoulder;
  handleLikeClick:Function;
  handleEditClick: Function

}

const BoulderMetadata: React.FC<BoulderMetaProps> = (props: any) => {
  const { style, boulder, handleLikeClick, handleEditClick} = props;
  const location = getLocation(boulder.location_id);
  const difficulty = getDifficulty(boulder.difficulty);
  
  

  console.log(boulder)

  return (
    <View style={LayoutStyle.fullWidth}>
      <View >
        <View style={LayoutStyle.containerRow}>

          <BText style={[TextStyle.title, {flex:8}]}>{boulder.title}</BText>
          <BIcon icon="favorite" onPress={handleLikeClick} style={{flex:2}}
                  color={ boulder.like ? 'gold':'grey'}/>
        </View>
      
        <View style={[LayoutStyle.containerRow]}>
          <View>
            <Image source={{ uri: boulder.img }} style={[styles.image]}></Image>
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
                <BText style={[styles.row]}>City: </BText>
              </View>
              <View style={styles.column}>
                <BText style={[styles.row]}>{difficulty.name}</BText>
                <BText style={[styles.row]}>{location.country}</BText>
                <BText style={[styles.row]}>{location.region}</BText>
                <BText style={[styles.row]}>{location.city}</BText>
              </View>
            </View>

          </View>
          
      
        </View>
            <View style={[LayoutStyle.containerRow,{justifyContent:'flex-end'}]}>

              <BIcon icon="edit" onPress={handleEditClick} style={styles.icon}/>

            </View>
      </View>
                
    </View>
  );
};

export default BoulderMetadata;

