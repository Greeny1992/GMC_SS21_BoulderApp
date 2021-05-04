
import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import BoulderListStyle from "../../../styles/BoulderList/boulderList";
import BText from "../utils/text";

interface BoulderListHeaderProps {
    style?: any;
    title: string;
  }
const BoulderSectionListHeader: React.FC<BoulderListHeaderProps> = (props: BoulderListHeaderProps) => {
  const {title, style} = props;
    return (
            <View style={BoulderListStyle.sectionheader}>
              <Text style={BoulderListStyle.textsectionheader}>{title}</Text>
            </View>
    )
  };
export default BoulderSectionListHeader