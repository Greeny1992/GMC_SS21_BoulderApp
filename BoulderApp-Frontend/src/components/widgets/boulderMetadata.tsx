import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Badge } from "react-native-elements";
import BText from "../widgets/text";
import LayoutStyle from "../../styles/layout";
import { AntDesign } from "@expo/vector-icons";
import TextStyle from "../../styles/text";
import styles from "../../styles/detailBoulder";

import BButton from "../widgets/button";

import { IBoulder } from "../../entities/Boulder";
import ButtonStyles from "../../styles/button";
import { getColor, getDifficulty } from "../../entities/boulderDetailValues";
import getLocation from "../../entities/location";
import BoulderMetadataStyle from "../../styles/widgets/boulderMetadata";

interface BoulderMetaProps {
  style?: any;
  boulder: IBoulder;
  navigation: Navigator;
}

const BoulderMetadata: React.FC<BoulderMetaProps> = (props: any) => {
  const { style,  boulder, navigation } = props;
  
  const location = getLocation(boulder.location_id);
  const difficulty = getDifficulty(boulder.difficulty)
  const handlePress = (id: string) => {
    navigation.navigate("AddBoulderScreen", {
      boulderID: id,
    });
  };

  const handleLikePress = (id : string) => {
    console.log("LIKE ID: " +id)
    
}

  return (
    <View>
      <View style={LayoutStyle.containerRow}>
        <BText style={[TextStyle.title]}>{boulder.title}</BText>
        
      </View>
      <View style={[LayoutStyle.containerRow, styles.column]}>
        <View>
          <Image source={{ uri: boulder.img }} style={[styles.image]}></Image>
          <View
            style={styles.badgeContainer}
          >
            <Badge
              badgeStyle={[styles.badge,{backgroundColor: getColor(boulder.color).value}]}
            />
          </View>
        </View>
        <View style={styles.column}>
            <View style={[LayoutStyle.containerRow]}>
                <View style={[ styles.column]}>
                    <BText style={[ styles.row]}>Difficulty: </BText>
                    <BText style={[ styles.row]}>Country: </BText>
                    <BText style={[ styles.row]}>Region: </BText>
                    <BText style={[ styles.row]}>City: </BText>
                </View>
                <View>
                    <BText style={[ styles.row]}>{difficulty.name}</BText>
                    <BText style={[ styles.row]}>{location.country}</BText>
                    <BText style={[ styles.row]}>{location.region}</BText>
                    <BText style={[ styles.row]}>{location.city}</BText>
                </View>
            </View>

        </View>
        
      </View>
      <View style={LayoutStyle.containerRowSpace}>
                <BButton
                style={[ButtonStyles.btn,BoulderMetadataStyle.btn]}
                onPress={() => handlePress(boulder.id)}
                >
                <AntDesign
                    name="edit"
                    size={20}
                    style={ButtonStyles.btnIcon}
                />
                </BButton>
                <BButton
                style={[ButtonStyles.btn,BoulderMetadataStyle.btn]}
                onPress={() => handleLikePress(boulder.id)}
                >
                <AntDesign
                    name="star"
                    size={20}
                    style={ButtonStyles.btnIcon}
                />
                </BButton>

            </View>
    </View>
  );
};

export default BoulderMetadata;
