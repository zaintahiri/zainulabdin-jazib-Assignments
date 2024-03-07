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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  
  
  return (
    AssignmentTwo()
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
    setDisplayText('Syed Muhammad Hasan');
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
              <Text style={styles.titleText}>Zain ul abdin</Text>
            </View>
           
            <View style={[{ width: "90%", margin: 10, backgroundColor: "gold" }]}>
              <Button title="Next" color="green" onPress={()=>{Alert.alert('HI ZAIN  WELCOME TO HERE')}}/>
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
    backgroundColor:'green',
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
