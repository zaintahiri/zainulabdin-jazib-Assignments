/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Alert,
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import { UseDispatch } from 'react-redux';
//useDispatch
import { addToCart } from './redux/actions';
import { useDispatch } from 'react-redux';
import { decrementAction, incrementAction } from './components/redux/actions';
import ShowIncreementDecreement from './ShowIncreementDecreement';

const Assignment2_3 = (props) => {
    // const prod=props.item
    // // console.warn(item);
    // const dispatch=useDispatch()
    // const  handleAddToCart =(prod)=>{
    //     dispatch(addToCart(prod))
    //     // console.warn("Product",prod)
    // }

    const prod=props.item
    // console.warn(item);
    const dispatch=useDispatch()
    const  handlerIncrementAction =(prod)=>{
        dispatch(incrementAction(prod))
        // console.warn("Product",prod)
    }

    const  handlerDecrementAction =(prod)=>{
      dispatch(decrementAction(prod))
      // console.warn("Product",prod)
    }
    return (
        <View style={[styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: 'column',
          }]}>
          
    
            <View style={{flexDirection:'row',marginTop:10}}>
    
              <View style={{flex:1,marginStart:10,marginEnd:10}}>
                    <Button title='Decrement' onPress={()=>{
                                                          handlerDecrementAction(prod)
                                                        }}/>
              </View>
              <ShowIncreementDecreement/>
              <View style={{flex:1,marginEnd:10}}>
                    <Button title='Increement' onPress={()=>{
                                                        handlerIncrementAction(prod)
                                                      }}/>
              </View>
            </View>
            
      </View>
    
        
      );
}

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
export default Assignment2_3;