import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; // Add Image to the import statement
import { StyleSheet,Button, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import getdata from '../helpers/asyncStorageGetItem';
import setdata from '../helpers/asyncStorageSetItem';
import removedata from '../helpers/asyncStorageRemoveItem'


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email'),
    // .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    // .required('Password is required'),
});

export default function Register({navigation})
{
  const initialValues = {
    name: '',
    email: '',
    password: '',
    rpassword: '',
  };
  
  const handleFormSubmit = async(values) => {
    // Handle form submission logic here
    await axios.post("http://localhost:8080/auth/register",{email:"abc5@gmail.com",password:"abb"})
    .then(async(response)=>{
      // console.log(response.data)
      await removedata("accessToken")
      await removedata("refreshToken")
      await setdata(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })

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
            {
              ({ handleChange, handleBlur, handleSubmit, values, errors })=>(
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={handleChange('password')}
                    value={initialValues.name}
                    secureTextEntry
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    value={initialValues.email}

                  />
                  {errors.email && <Text style={styles.error}>{errors.email}</Text>}
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={initialValues.password}
                    secureTextEntry
                  />
                  {errors.password && <Text style={styles.error}>{errors.password}</Text>}
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    onChangeText={(text) => setRpassword(text)}
                    value={initialValues.rpassword}
                    secureTextEntry
                  />

                  <View style={styles.buttonContainer}>
                    {/* <Button title="Login"
                    // style={[styles.button, { backgroundColor: 'red' }]}
                    onPress={()=>navigation.navigate("DashBoard")}
                    /> */}
                    <Button title="Register"
                    onPress={handleSubmit}
                    />
                    {/* <Button title="TestScreen"
                    onPress={()=>navigation.navigate("TestScreen")}
                    /> */}

                  </View>

                  {/* {Object.values(initialValues.errors).map((error, index) => (
                      <Text key={index} style={styles.error}>
                          {error}
                      </Text>
                  ))} */}

                </View>
              )
            }

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