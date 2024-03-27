import React, {} from 'react';
import {Icon, TextInput } from 'react-native-paper';


import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
import { TouchableOpacity} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();

const PasswordScreen=()=>{
    return (
      <ScrollView>
           <View style={{padding:10,margin:20}}>
        
        <View style={{marginTop:30}}>              
              
        {/* <View style={{backgroundColor:'lightgray',borderRadius: 5,borderWidth: 1, borderColor: '#aaa', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
            <Icon   source={require('../assets/images/back.png')} size={20}  color="gray"/>
            <TextInput     placeholder="Username" style={{backgroundColor:'lightgray',   flex: 1 }}
            />
      </View> */}
              <Text style={{color:'black',marginTop:30,fontSize:20,fontWeight:'bold'}}>Current Password</Text>
              <TextInput label="Password"
                            secureTextEntry
                            mode='outlined'                            
                            left={<TextInput.Icon icon={require('../assets/images/locker.png')}/>}
                            right={<TextInput.Icon icon={require('../assets/images/eye.png')} />} style={[{backgroundColor:'lightgray'}]}
                                 placeholder='Current Password'></TextInput>
              
              <Text style={{color:'black',marginTop:30,fontSize:20,fontWeight:'bold'}}>New Password</Text>
              <TextInput left={<TextInput.Icon icon={require('../assets/images/locker.png')}/>}
                            right={<TextInput.Icon icon={require('../assets/images/eye.png')} />} label="New Password" mode='outlined'  style={[{backgroundColor:'lightgray'}]}
                                 placeholder='New Password'></TextInput>
              <Text style={{color:'black',marginTop:10,fontSize:15}}>Add Multiple Designations</Text>

              <Text style={{color:'black',marginTop:30,fontSize:20,fontWeight:'bold'}}>Confirm Password</Text>
              <TextInput left={<TextInput.Icon icon={require('../assets/images/locker.png')}/>}
                            right={<TextInput.Icon icon={require('../assets/images/eye.png')} />}
                             label="Confirm Password" mode='outlined' style={[{backgroundColor:'lightgray'}]}
                                 placeholder='Confirm Password'></TextInput>

              <TouchableOpacity>
                <Text style={[styles.Button,{verticalAlign:'middle'}]} onPress={()=>{
                      Alert.alert('HI')
                   }}
                   >Update Password</Text>
              </TouchableOpacity>
              
        </View>
      </View>    

      </ScrollView>
      
  
    );
  }

  const styles = StyleSheet.create({

    TextInputStyle:{
      color:'black',fontSize:20,marginTop:10,
      backgroundColor:'lightgray',padding:20,
      borderRadius:10

    },
    RowStyle:{
      color:'black',fontSize:20,
      borderRadius:10
    },   
    Button: {
      marginTop:30,marginBottom:30,height:'25%',
      fontWeight:'bold',fontSize:20,borderRadius:10,
      color:'white',backgroundColor:'dodgerblue',textAlign:'center',
      verticalAlign:'middle'} 

  })

  export default PasswordScreen;