// MAD ASSIGNMENT 03
// Muhammad Muaaz Shoaib
// FA20-BCS-074
// SigninScreen.js

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

const SigninScreen = ({ navigation, routes }) => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
          if (userName == null || password == null) {
            alert("Please fill out all fields.");
            return;
          }

          try {
            var userInformation = await AsyncStorage.getItem("@storage_Key");
            userInformation = JSON.parse(userInformation);
            console.log(userInformation);
            console.log(userInformation["email"]);
            console.log(userInformation["password"]);
            console.log(userInformation["userName"]);

            navigation.navigate("Profile", {
              Name: userInformation["userName"],
              Email: userInformation["email"],
              Password: userInformation["password"],
            });
          } catch (e) {
            // error reading value
            alert("ERROR in SignIn Screen.");
          }
        }}
      >
        <Text style={styles.ButtonText}>Sign In</Text>
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
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 24,
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

export default SigninScreen;
