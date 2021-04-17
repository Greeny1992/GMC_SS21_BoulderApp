import React, {useContext, useState} from "react";
import {
  Alert,
  ImageBackground,
  TextInput,
  View,
} from "react-native";
import { AuthContext } from "../../contexts/auth_context";
import styles from '../../styles/login';
import BButton from "../widgets/utils/button";
import BText from "../widgets/utils/text";

export default function Login({ loggedInHandler }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);

  const loginHandler = () => {
    authContext.verify(true);
  };

  const createAlert = () =>
  Alert.alert(
    "Passwort vergessen",
    "HAHA, du solltest dir besser dein Passwort merken! ;)",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]
  );
  const bg = require('../../assets/images/background.jpg');
  return (
    <ImageBackground source={bg} style={styles.image}>
      <View style={styles.inputView}>
        
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email: string) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password: string) => setPassword(password)}
        />
      </View>
      <BButton onPress={createAlert}>
        <BText>Forgot Password?</BText>
      </BButton>
      <BButton onPress={loginHandler}>
        <BText>LOGIN</BText>
      </BButton>
    </ImageBackground>
  );
}

