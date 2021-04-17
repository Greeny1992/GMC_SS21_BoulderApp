
import React from "react";
import { View } from "react-native";
import BoulderListStyle from "../../../styles/BoulderList/boulderList";
import BText from "../utils/text";

interface BoulderListHeaderProps {
    style?: any;
  }
const BoulderListHeader: React.FC<BoulderListHeaderProps> = (props: BoulderListHeaderProps) => {
    return (
            <View style={BoulderListStyle.itemheader}>
                <BText style={BoulderListStyle.headlinesectiontitle}>Name</BText>
                <BText style={BoulderListStyle.headlinesectionlocation}>Location</BText>
                <BText style={BoulderListStyle.headlinesectiondifficulty}>Difficulty</BText>
                <BText style={BoulderListStyle.headlinesectiondate}>Date</BText>
                <BText style={BoulderListStyle.headlinesectioncolor}>Color</BText>
              </View>
    )
  };
export default BoulderListHeader