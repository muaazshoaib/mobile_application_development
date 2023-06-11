// MAD ASSIGNMENT 03
// Muhammad Muaaz Shoaib
// FA20-BCS-074
// SigninScreen.js

import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SigninScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
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
        style={styles.SignInButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.SignInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ForgotPasswordButton} onPress={() => {}}>
        <Text style={styles.ForgotPasswordButtonText}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.SignInWithFacebookButton}
        onPress={() => {}}>
        <Text style={styles.SignInWithFacebookButtonText}>
          Sign In With Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.SignInWithGoogleButton}
        onPress={() => {}}>
        <Text style={styles.SignInWithGoogleButtonText}>
          Sign In With Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.CreateOneButton} onPress={() => {}}>
        <Text style={styles.CreateOneText}>
          Don't have an account? Create One
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 48,
    borderRadius: 5,
    backgroundColor: '#FFF',
    shadowColor: '#000',
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
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
  },
  SignInButton: {
    width: '80%',
    height: 48,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  ForgotPasswordButton: {
    width: '80%',
    height: 48,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  SignInWithFacebookButton: {
    width: '80%',
    height: 48,
    borderRadius: 5,
    backgroundColor: '#E7E9F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  SignInWithGoogleButton: {
    width: '80%',
    height: 48,
    borderRadius: 5,
    backgroundColor: '#F3E9EA',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  SignInButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ForgotPasswordButtonText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
  },
  SignInWithFacebookButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  SignInWithGoogleButtonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  CreateOneButton: {
    width: '80%',
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  CreateOneText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SigninScreen;
