import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; // Add Image to the import statement
import { StyleSheet,Button, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
export default function Home({navigation})
{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


  useEffect(() => {
  
    // Trigger form validation when name, 
    // email, or password changes
    validateForm();
}, [ name,email, password,rpassword]);

const validateForm = () => {
    let errors = {};


    // Validate email field
    if (!email) {
        errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid.';
    }

    // Validate password field
    if (!password) {
        errors.password = 'Password is required.';
    } else if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters.';
    }

    if(password!=rpassword)
    {
        errors.rpassword='Password didnt match';
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Welcome to MyApp</Text>
      <TextInput
      style={styles.input}
      placeholder="Name"
      onChangeText={(text) => setName(text)}
      value={name}
      secureTextEntry
  />

      <TextInput
      style={styles.input}
      placeholder="Email"
      onChangeText={(text) => setEmail(text)}
      value={email}

  />
      <TextInput
      style={styles.input}
      placeholder="Password"
      onChangeText={(text) => setPassword(text)}
      value={password}
      secureTextEntry
  />

    <TextInput
      style={styles.input}
      placeholder="Repeat Password"
      onChangeText={(text) => setRpassword(text)}
      value={rpassword}
      secureTextEntry
    />

    <View style={styles.buttonContainer}>
      <Button title="Register"
      onPress={()=>navigation.navigate("Register")}
      />

    </View>

    {Object.values(errors).map((error, index) => (
        <Text key={index} style={styles.error}>
            {error}
        </Text>
    ))}
          
  </View>
  )
}

//styles
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#333',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: width * 0.8,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
  },
  button: {
    width: '48%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  error: {
    color: 'red',
    fontSize: 10,
    marginBottom: 12,
},

});