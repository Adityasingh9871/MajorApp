import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; // Add Image to the import statement
import { StyleSheet,Button, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
export default function Register({navigation})
{
  const initialValues = {
    name: '',
    email: '',
    password: '',
    rpassword: '',
  };
  
  const handleFormSubmit = (values) => {
    // Handle form submission logic here
    console.log('Form submitted with values:', values);
    // navigation.navigate("DashBoard"); // Navigate to Dashboard or handle navigation as needed
  };

    return (
        <View style={styles.container}>
          <Text style={styles.title} >Welcome to MyApp</Text>
          <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >

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
        placeholder="Confirm Password"
        onChangeText={(text) => setRpassword(text)}
        value={rpassword}
        secureTextEntry
      />






<View style={styles.buttonContainer}>
            <Button title="Login"
            // style={[styles.button, { backgroundColor: 'red' }]}
            onPress={()=>navigation.navigate("DashBoard")}
            />
            <Button title="Register"
            onPress={()=>navigation.navigate("Register")}
            />
            <Button title="TestScreen"
            onPress={()=>navigation.navigate("TestScreen")}
            />

            </View>

            {Object.values(errors).map((error, index) => (
                <Text key={index} style={styles.error}>
                    {error}
                </Text>
            ))}
            </Formik>
            
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