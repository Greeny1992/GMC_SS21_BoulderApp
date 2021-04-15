import React, {useState} from "react";
import {
  Alert,
  TextInput,
  View,
} from "react-native";
import styles from '../../styles/login';
import BButton from "../widgets/utils/button";
import BText from "../widgets/utils/text";

export default function Login({ loggedInHandler }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    loggedInHandler();
  };

  const createTwoButtonAlert = () =>
  Alert.alert(
    "Passwort vergessen",
    "HAHA, du solltest dir besser dein Passwort merken! ;)",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]
  );

  return (
    <React.Fragment>
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
      <BButton onPress={createTwoButtonAlert}>
        <BText>Forgot Password?</BText>
      </BButton>
      <BButton onPress={loginHandler}>
        <BText>LOGIN</BText>
      </BButton>
    </React.Fragment>
  );
}

