// MAD ASSIGNMENT 03
// Muhammad Muaaz Shoaib
// FA20-BCS-074
// SignupScreen.js

import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Feather name="user" size={24} color="#999" />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#999"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Feather name="mail" size={24} color="#999" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Feather name="lock" size={24} color="#999" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.Button}
        onPress={async () => {
          if (userName == null || email == null || password == null) {
            alert("Please fill out all fields.");
            return;
          }

          try {
            const userInformation = {
              userName: userName,
              email: email,
              password: password,
            };
            await AsyncStorage.setItem(
              "@storage_Key",
              JSON.stringify(userInformation)
            );
            console.log("Data is saved!");
            console.log(userInformation);

            navigation.navigate("Home");
          } catch (e) {
            // saving error
            alert("ERROR in SignUp Screen.");
          }
        }}
      >
        <Text style={styles.ButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    height: 48,
    borderRadius: 5,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
  },
  Button: {
    width: "80%",
    height: 48,
    borderRadius: 5,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },

  ButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignupScreen;
