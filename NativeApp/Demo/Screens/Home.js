import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; // Add Image to the import statement
import { StyleSheet,Button, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'
import setdata from '../helpers/asyncStorageSetItem';
import getdata from "../helpers/asyncStorageGetItem"

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email'),
    // .required('Email is required'),
  password: Yup.string()
    .min(3, 'Password must be at least 6 characters')
    // .required('Password is required'),
});



export default  function Home({navigation}){
  
  const initialValues = {
    email: '',
    password: '',
  };

  const handleFormSubmit = async(values) => {
    // Handle form submission logic here
    console.log('Form submitted with values:', values);
    const res=await axios.post('http://localhost:8080/auth/login',{email:"abc1@gmail.com",password:"aaaa"})
    if(res.status!=200)
    console.log("server error")
    else{
      await setdata(res.data)
      navigation.navigate("MainHome")
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyApp</Text>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {
          ({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <View style={styles.buttonContainer}>
              <Button title="Login" onPress={handleSubmit} />
              <Button title="Register" onPress={()=>navigation.navigate("Register")} />

            </View>
          </View>
          )
        }
      </Formik>

      
    </View>
  );
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