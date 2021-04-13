import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Badge } from "react-native-elements";
import BText from "../widgets/text";
import LayoutStyle from "../../styles/utils/layout";
import TextStyle from "../../styles/text";
import styles from "../../styles/detailBoulder";

import BButton from "../widgets/button";

import { IBoulder, toggleLike } from "../../entities/Boulder";
import ButtonStyles from "../../styles/button";
import { getColor, getDifficulty } from "../../entities/boulderDetailValues";
import getLocation from "../../entities/Location";
import BoulderMetadataStyle from "../../styles/widgets/boulderMetadata";

interface BoulderMetaProps {
  style?: any;
  boulder: IBoulder;
  navigation: any;
  handlelikeToggle: Function
}

const BoulderMetadata: React.FC<BoulderMetaProps> = (props: any) => {
  const { style, boulder, navigation,handlelikeToggle} = props;
  const location = getLocation(boulder.location_id);
  const difficulty = getDifficulty(boulder.difficulty);
  
  const handlePress = (id: string) => {
    navigation.navigate("AddBoulderScreen", {
      boulderID: id,
    });
  };



  return (
    <View>
      <View style={LayoutStyle.containerRow}>
        <BText style={[TextStyle.title]}>{boulder.title}</BText>
        <BButton
          style={[
            ButtonStyles.btn,
            BoulderMetadataStyle.btn,
            {
              backgroundColor: boulder.like ? "#ffffff" : "#147aff",
              border: boulder.like ? "1px solid #147aff" : "",
              marginTop: 5,
              
            },
          ]}
          onPress={handlelikeToggle}
        >
          <BText>{boulder.like ? "liked": "not liked"}</BText>
        </BButton>
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
        <View style={[LayoutStyle.containerCentered, {justifyContent:'flex-end'}]}>
            <BButton
            style={[ButtonStyles.btn, BoulderMetadataStyle.btn]}
            onPress={() => handlePress(boulder.id)}
            >
            <BText>Edit</BText>
            </BButton>
            

        </View>
    
      </View>
    </View>
  );
};

export default BoulderMetadata;

