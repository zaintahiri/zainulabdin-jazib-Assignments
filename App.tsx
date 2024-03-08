/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import ExStyle from './assets/images/Css/ExStyle';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import {TextInput, TouchableOpacity  } from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}
function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={[
      styles.container,
      {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
      },
    ]}>
      <View>
          <View style={{ flexDirection: 'row',marginTop:5,padding:10,borderWidth:1, borderColor:'gray'}}>
            <View style={{flex:1,marginEnd:5}}>
                <Button color="red" title='Profile' onPress={()=>{
                    navigation.navigate("Profile");
                }}/>
              </View>    
            
              <View style={{flex:1,marginEnd:5}}>
                <Button color="red" title='Settings' onPress={()=>{
                  // Alert.alert('Settings is called')
                  navigation.navigate("Settings"); //navigate("ProfileScreen");
                  //adsfasfsafsaddfsfasdfsd
                }}/>
            </View>
          </View>
      </View>
     
      <View style={[{marginTop:5,marginBottom:5,flexDirection:'column',
                      borderRadius:2,borderWidth:1,borderColor:'gray',flex:8,backgroundColor:'white'}]}>
        <View style={[{ width: "100%", margin: 10}]}>
          <Text style={{color:'red',fontSize:30,textAlign:'center'}}>Home Screen</Text>
          <Text style={{color:'gray',fontSize:20,fontFamily: 'fontFamily-bold', fontWeight: 'bold'}}>Assignment by:</Text>
          <Text style={{color:'gray',fontSize:15,marginStart:100,marginTop:10,fontFamily: 'fontFamily-bold', fontWeight: 'bold'}}>Zain ul Abdin and Jazib Sohail</Text>


          
        </View>
      </View>
      {/* <View style={{flex:8,flexDirection:'row',backgroundColor:'gray'}}>

      </View> */}
      
      
    </View>
    
  );
}


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  
  
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

       
    // AssignmentTwo()
    // AssignmentOne()
    // WorkingWithCss()
  );
}

const WorkingWithCss= () => {
  const [username,setName]=useState('zain')
  function useStatWork(){
    setName('Hi this First Text View')
  }
  return(
    <ScrollView>
      <View>
          <Text style={[ExStyle.text,{fontSize:20}]} 
                onPress={()=>{
                  Alert.alert('Hi this First Text View')
                  useStatWork()
                  }}>
            {username}
          </Text>
          <Text style={[ExStyle.text,{fontSize:15}]}>Hi this Two Text View</Text>
          <Text style={[ExStyle.text,{fontSize:20}]}>Hi this Three Text View</Text>
          <Text style={[ExStyle.text,{fontSize:25}]}>Hi this Four Text View</Text>
          <Text style={[ExStyle.text,{fontSize:30}]}>Hi this Five Text View</Text>

          <Text style={[ExStyle.text,{fontSize:10}]}>Hi this Six Text View</Text>
          <Text style={[ExStyle.text,{fontSize:15}]}>Hi this Seven Text View</Text>
          <Text style={[ExStyle.text,{fontSize:20}]}>Hi this Eight Text View</Text>
          <Text style={[ExStyle.text,{fontSize:25}]}>Hi this Nine Text View</Text>
          <Text style={[ExStyle.text,{fontSize:30}]}>Hi this Ten Text View</Text>

      </View>
      </ScrollView>

  )
}





const AssignmentOne = () => {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText('Zain ul abdin and jazi Sohail');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayText}</Text>
      <Button title="Click me" onPress={handleButtonClick} />
    </View>
  );
};


//
const AssignmentTwo = () => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
         {/* backgroundColor: 'red' */}
      <View style={styles.fixToText}>
           {/* <Button title='Next' color='red'/>
           <Button title='Previous' color='red'/> */}

           <View style={{margin:10}}>
              {/* <Button  title="Button 1" /> */}
              {/* <Image source={{uri: 'https://reactjs.org/logo-og.png'}} */}

              {/* <TouchableOpacity onPress={() => Alert.alert('Back is pressed')} > */}
              <TouchableOpacity>
                  <Image source={require('./assets/images/arrow.png')}
                    style={{width: 20, height: 20}} />
                </TouchableOpacity>             
            </View>
            <View style={{marginHorizontal: 10}}>
              <Text style={styles.titleText}>
                  Hello!
                </Text>
            </View>
          
      </View>
      <View style={[styles.verticalFix,{flex: 8, justifyContent:'center'}]}>
            
            <View style={[{ width: "90%", margin: 10}]}>
              <Text style={styles.titleText}>Janzib Sohail, my assignment-2.1</Text>
            </View>
           
            <View style={[{ width: "90%", margin: 10, backgroundColor: "gold" }]}>
              <Button title="Next" color="blue"/>
          </View>      
            
        </View>
      {/* <View style={{flex: 1, backgroundColor: 'green'}}>
          <View style={{marginHorizontal: 10}}>
              <Text style={styles.titleText}>
                  Welcome to My First APP (Zain)
                </Text>
            </View>
        </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  fixToText: {
    backgroundColor:'blue',
    flexDirection: 'row',
  },
  verticalFix: {
    flexDirection: 'column',
    padding:10,
  },

  titleText: {
    fontSize: 20,    
    color: '#a9a9a9'
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  text: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default App;
