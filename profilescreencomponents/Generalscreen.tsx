import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
import { TouchableOpacity} from 'react-native';
import {Icon, TextInput } from 'react-native-paper';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';
import { MultiSelect } from 'react-native-element-dropdown';
const Stack = createNativeStackNavigator();

const Generalscreen=()=>{

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  const data = [
    { label: 'MBBS', value: '1' },
    { label: 'PHD', value: '2' },
    { label: 'Director Health', value: '3' },
    { label: 'SM-1', value: '4' },
    { label: 'SM-2', value: '5' },
    { label: 'VP-1', value: '6' },
    { label: 'VP-2', value: '7' },
    { label: 'AVP', value: '8' },
  ];
  const [selected, setSelected] = useState([]);
    return (
      <ScrollView>
           <View style={{padding:10,margin:20}}>
        <View style={{alignContent:'center',alignItems:'center'}}>
          <Image
                source={require('../assets/images/zainpf.png')}
                style={{backgroundColor:'red',width: 100, height: 100,borderRadius:100,borderColor:'black'}}
              />
              <Text style={{color:'black',marginTop:10,fontSize:30,fontWeight:'bold'}}>Zain Ul Abdin</Text>
        </View>
        <View style={{marginTop:30}}>              
              <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>About Us</Text>
              <View style={{marginTop:10,backgroundColor:'lightgray',paddingTop:30,
                            borderRadius:10,paddingBottom:30,padding:10}}>
                <Text style={{marginLeft:20,fontSize:18,color:'black',fontWeight:'bold'}}>Lorem Ipsum is simply dummy text</Text>
                <Text style={{marginLeft:20,fontSize:18,color:'black',fontWeight:'bold'}}>of the printing and typesetting</Text>
              </View>
              
              <Text style={{color:'black',marginTop:30,fontSize:20,fontWeight:'bold'}}>Full Name</Text>
              <TextInput label="Full Name"
                            mode='outlined'                            
                            left={<TextInput.Icon icon={require('../assets/images/locker.png')}/>}
                            right={<TextInput.Icon icon={require('../assets/images/eye.png')} />} style={[{backgroundColor:'lightgray'}]}
                                 placeholder='Full Name'></TextInput>
              
              <Text style={{color:'black',marginTop:30,fontSize:20,fontWeight:'bold'}}>Designation</Text>
              {/* <TextInput label="Designation"
                            mode='outlined'                            
                            left={<TextInput.Icon icon={require('../assets/images/locker.png')}/>}
                            right={<TextInput.Icon icon={require('../assets/images/eye.png')} />} style={[{backgroundColor:'lightgray'}]}
                                 placeholder='Designation'></TextInput> */}
                            <MultiSelect
                                        style={styles.dropdown}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        inputSearchStyle={styles.inputSearchStyle}
                                        iconStyle={styles.iconStyle}
                                        search
                                        data={data}
                                        labelField="label"
                                        valueField="value"
                                        placeholder="Select item"
                                        searchPlaceholder="Search..."
                                        value={selected}
                                        onChange={item => {
                                          setSelected(item);
                                        }}
                                        // renderLeftIcon={() => (
                                        //   <AntDesign
                                        //     style={styles.icon}
                                        //     color="black"
                                        //     name="Safety"
                                        //     size={20}
                                        //   />
                                        // )}
                                        selectedStyle={styles.selectedStyle}
                                      />
                  
              <Text style={{color:'black',marginTop:10,fontSize:15}}>Add Multiple Designations</Text>

              <Text style={{color:'black',marginTop:30,fontSize:20,fontWeight:'bold'}}>Email</Text>
              <TextInput label="Email"
                            mode='outlined'                            
                            left={<TextInput.Icon icon={require('../assets/images/email.png')}/>}
                             style={[{backgroundColor:'lightgray'}]}
                                 placeholder='Email'></TextInput>

              <Text style={{color:'black',marginTop:30,fontSize:20,fontWeight:'bold'}}>Phone Number</Text>
              <TextInput label="Phone Number"
                            mode='outlined'                            
                            left={<TextInput.Icon icon={require('../assets/images/phonenumbericon.png')}/>}
                             style={[{backgroundColor:'lightgray'}]}
                                 placeholder='Phone Number'></TextInput>

              <Text style={{color:'black',marginTop:30,fontSize:20,fontWeight:'bold'}}>Address</Text>
              <TextInput label="Address"
                            mode='outlined'                            
                             style={[{backgroundColor:'lightgray'}]}
                                 placeholder='Address'></TextInput>

              <View style={[styles.RowStyle,{flexDirection:'row',paddingTop:0}]}>
                  <Text style={{flex:1,color:'black',marginEnd:5,marginTop:30,fontSize:20,fontWeight:'bold'}}>City</Text>
                  <Text style={{flex:1,color:'black',marginStart:5,marginTop:30,fontSize:20,fontWeight:'bold'}}>State</Text>
              </View>
              <View style={[styles.RowStyle,{flexDirection:'row',paddingTop:0}]}>
                  <View style={{flex:1,marginEnd:5}}>
                     
                       <TextInput label="City"
                            mode='outlined'                            
                             style={[{backgroundColor:'lightgray'}]}
                                 placeholder='City'></TextInput>
                  </View>
                  <View style={{flex:1,marginStart:5}}>
                  <TextInput label="State"
                            mode='outlined'                            
                             style={[{backgroundColor:'lightgray'}]}
                                 placeholder='State'></TextInput>
                  </View>
              </View>

              <Text style={{color:'black',marginTop:30,fontSize:20,fontWeight:'bold'}}>Zip Code</Text>
              <TextInput label="Zip Code"
                            mode='outlined'                            
                             style={[{backgroundColor:'lightgray'}]}
                                 placeholder='Zip Code'></TextInput>

              <Text style={{color:'black',marginTop:30,fontSize:20,fontWeight:'bold'}}>Provide Services</Text>
              {/* <TextInput label="Provide Services"
                            mode='outlined'                            
                             style={[{backgroundColor:'lightgray'}]}
                                 placeholder='Provide Services'></TextInput> */}
                                 <DropDownPicker   style={[{backgroundColor:'lightgray'}]} open={open} value={value} items={items}
                                  setOpen={setOpen} setValue={setValue} 
                                  setItems={setItems}
                                />
                                

              <TouchableOpacity>
                <Text style={[styles.Button,{verticalAlign:'middle'}]} onPress={()=>{
                      Alert.alert('Selected : ' +value)
                   }}
                   >Update</Text>
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
      marginTop:30,marginBottom:30,height:'18%',
      fontWeight:'bold',fontSize:20,borderRadius:10,
      color:'white',backgroundColor:'dodgerblue',textAlign:'center',
      verticalAlign:'middle'} ,

      container: { padding: 16 },
      dropdown: {
        height: 50,
        backgroundColor: 'transparent',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 14,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      icon: {
        marginRight: 5,
      },
      selectedStyle: {
        borderRadius: 12,
      },

  })

  export default Generalscreen;