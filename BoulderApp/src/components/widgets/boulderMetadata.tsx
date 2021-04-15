import React from "react";
import { View, Image } from "react-native";
import { Badge,Icon } from "react-native-elements";
import BText from "../widgets/text";
import LayoutStyle from "../../styles/utils/layout";
import TextStyle from "../../styles/text";
import styles from "../../styles/detailBoulder";
import { IBoulder } from "../../data/entities/Boulder";
import { getColor, getDifficulty } from "../../data/lookupValues/boulderDetailValues";
import getLocation from "../../data/service/LocationService";

interface BoulderMetaProps {
  style?: any;
  boulder: IBoulder;
  handleLikeClick:Function

}

const BoulderMetadata: React.FC<BoulderMetaProps> = (props: any) => {
  const { style, boulder, handleLikeClick} = props;
  const location = getLocation(boulder.location_id);
  const difficulty = getDifficulty(boulder.difficulty);
  
  

  console.log(boulder)

  return (
    <View>
      <View >
        <View style={LayoutStyle.containerRow}>
          <BText style={[TextStyle.title,{flex:10}]}>{boulder.title}</BText>
          { boulder.like 
            ?
              <View style={{flex:1,marginTop:10}}>
                <Icon  name="star" onPress={handleLikeClick} color="#FFD700"></Icon>

              </View>
            :
              <></>
          }
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
          <View style={styles.column}>
            <View style={[LayoutStyle.containerRow]}>
              <View style={[styles.column]}>
                <BText style={[styles.row]}>Difficulty: </BText>
                <BText style={[styles.row]}>Country: </BText>
                <BText style={[styles.row]}>Region: </BText>
                <BText style={[styles.row]}>City: </BText>
              </View>
              <View>
                <BText style={[styles.row]}>{difficulty.name}</BText>
                <BText style={[styles.row]}>{location.country}</BText>
                <BText style={[styles.row]}>{location.region}</BText>
                <BText style={[styles.row]}>{location.city}</BText>
              </View>
            </View>
          </View>
          
      
        </View>
      </View>
                
    </View>
  );
};

export default BoulderMetadata;

