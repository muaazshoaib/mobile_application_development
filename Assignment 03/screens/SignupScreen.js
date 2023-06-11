// MAD ASSIGNMENT 03
// Muhammad Muaaz Shoaib
// FA20-BCS-074
// SignupScreen.js

import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SignupScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
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
          secureTextEntry
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
        style={styles.SignUpButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.SignUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TermsofUseButton} onPress={() => {}}>
        <Text style={styles.TermsofUseText}>
          By registering, you confirm that you accept our Terms of Use and
          Privacy Policy.
        </Text>
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
      <TouchableOpacity style={styles.SignInButton} onPress={() => {}}>
        <Text style={styles.SignInButtonText}>Have an account? Sign In</Text>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 24,
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
  input: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
  },
  SignUpButton: {
    width: '80%',
    height: 48,
    borderRadius: 5,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
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
  SignUpButtonText: {
    color: '#FFF',
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
  TermsofUseButton: {
    width: '80%',
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  TermsofUseText: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
  },
  SignInButton: {
    width: '80%',
    height: 48,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  SignInButtonText: {
    color: 'grey',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignupScreen;
