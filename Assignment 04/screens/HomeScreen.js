// MAD ASSIGNMENT 03
// Muhammad Muaaz Shoaib
// FA20-BCS-074
// HomeScreen.js

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Signin")}
      >
        <Text style={styles.ButtonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Signup")}
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

  Button: {
    width: "80%",
    height: 48,
    borderRadius: 5,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  ButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
