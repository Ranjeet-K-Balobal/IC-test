// HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight,ImageBackground,ScrollView } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        {/* <View style={styles.header}>
             <Text>{{}}</Text>
        </View> */}
    <ImageBackground source={require('../assets/Home.jpg')}style={styles.BGImage}> 
     <ScrollView>
      <Text style={styles.title}>Grow Guide</Text>
      <Text style={styles.description}>
      Welcome to Grow Guide - Your Farming Advisor!
      </Text>
      <Text style={styles.description}>
      Elevate your farming experience with Grow Guide,the app designed for farmers, by Team of students from Sahaydri.
      </Text>
      {/*  */}<Text style={styles.description}>
      Input your soil details, receive a quick report, and get actionable insights to optimize your crop yields.
      </Text>
      <Text style={styles.description}> Farm smarter with Grow Guide! 🌱📲 #FarmingMadeEasy #GrowGuideApp</Text>

      <TouchableHighlight
        style={styles.buttonStyles}
        onPress={() => navigation.navigate('FormPage')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableHighlight>
      </ScrollView>
      </ImageBackground>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:1,
   
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 300,
    marginTop:10,
    textAlign:'center',
  },
  description: {
    textAlign: 'center',
    fontWeight:'500',
    fontSize:20,
    marginBottom: 35,
    marginHorizontal:15,
 
  },
  buttonStyles:{
    backgroundColor: '#34bca7',
    padding: 10,
    borderRadius: 15,
    marginVertical: 10,
    alignItems:'center',
    marginHorizontal:50,
    marginBottom:50,

  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'light',
    textAlign:'center',
  },
  BGImage:{
    width:"100%",
    height:"100%",
   
 
  },
  header:{

  }
});

export default HomeScreen;
