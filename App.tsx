/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';

import React, {useState, useEffect} from 'react';
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

// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
import {TextInput, TouchableOpacity} from 'react-native';
import Geolocation from  '@react-native-community/geolocation';
import messaging from '@react-native-firebase/messaging';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {decrementAction, incrementAction} from './components/redux/actions';
import Assignment2_3 from './Assignment2_3';

import firestore, {Filter, firebase} from '@react-native-firebase/firestore';
import ShowData from './ShowData';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Generalscreen from './profilescreencomponents/Generalscreen';
import PasswordScreen from './profilescreencomponents/PasswordScreen';


const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

// const assingment_2_3 = (props) => {

//   const prod=props.counter
//     // console.warn(item);
//     const dispatch=useDispatch()
//     const  handlerIncrementAction =(prod)=>{
//         dispatch(incrementAction(prod))
//         // console.warn("Product",prod)
//     }

//     const  handlerDecrementAction =(prod)=>{
//       dispatch(decrementAction(prod))
//       // console.warn("Product",prod)
//   }
//   return (
//     <View style={[styles.container,
//       {
//         // Try setting `flexDirection` to `"row"`.
//         flexDirection: 'column',
//       }]}>

//         <View style={{flexDirection:'row',marginTop:10}}>

//           <View style={{flex:1,marginEnd:10}}>
//                 <Button title='Decrement' onPress={()=>{
//                                                       handlerDecrementAction(prod)
//                                                     }}/>
//           </View>
//           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//                     <Text style={{fontSize:30,color:'black',fontFamily: 'fontFamily-bold', fontWeight: 'bold'}}>
//                       {'0'}
//                     </Text>
//           </View>

//           <View style={{flex:1,marginEnd:10}}>
//                 <Button title='Increement' onPress={()=>{
//                                                     handlerIncrementAction(prod)
//                                                   }}/>
//           </View>
//         </View>

//   </View>

//   );
// }

function ProfileScreen() {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flexDirection: 'row', backgroundColor: 'red'}}>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            padding: 5,
            fontSize: 20,
            color: 'white',
          }}>
          Profile
        </Text>
      </View>

      <View style={{flexDirection: 'row', height: 30, marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Username :
          </Text>
        </View>

        <TextInput
          value=""
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}
        />
      </View>

      <View style={{flexDirection: 'row', height: 30, marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Fathername :
          </Text>
        </View>

        <TextInput
          value=""
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}
        />
      </View>

      <View style={{flexDirection: 'row', height: 30, marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            {}
          </Text>
        </View>

        <View
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}>
          <Button title="Count" />
        </View>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
}
function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View>
        <View
          style={{flexDirection: 'row', borderWidth: 1, borderColor: 'gray'}}>
          <View style={{flex: 1, marginStart: 5, marginEnd: 5}}>
            <Button
              color="red"
              title="Profile"
              onPress={() => {
                navigation.navigate('Profile');
              }}
            />
          </View>

          <View style={{flex: 1, marginEnd: 5}}>
            <Button
              color="red"
              title="Settings"
              onPress={() => {
                // Alert.alert('Settings is called')
                navigation.navigate('Settings'); //navigate("ProfileScreen");
                //adsfasfsafsaddfsfasdfsd
                //asdfasdfasdfasdf dsfasdfsafasd
              }}
            />
          </View>

          <View style={{flex: 1, marginEnd: 10}}>
            <Button
              color="red"
              title="Register"
              onPress={() => {
                // Alert.alert('Settings is called')
                navigation.navigate('Register'); //navigate("ProfileScreen");
                //adsfasfsafsaddfsfasdfsd
                //asdfasdfasdfasdf dsfasdfsafasd
              }}
            />
          </View>

          <View style={{flex: 1, marginEnd: 10}}>
            <Button
              color="red"
              title="View Data"
              onPress={() => {
                // Alert.alert('Settings is called')
                navigation.navigate('ViewData'); //navigate("ProfileScreen");
                //adsfasfsafsaddfsfasdfsd
                //asdfasdfasdfasdf dsfasdfsafasd
              }}
            />
          </View>
        </View>
      </View>

      <View
        style={[
          {
            marginTop: 5,
            marginBottom: 5,
            flexDirection: 'column',
            borderRadius: 2,
            borderWidth: 1,
            borderColor: 'gray',
            flex: 8,
            backgroundColor: 'white',
          },
        ]}>
        <View style={[{width: '100%', margin: 10}]}>
          <Text style={{color: 'red', fontSize: 30, textAlign: 'center'}}>
            Home Screen
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 20,
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Assignment by:
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 15,
              marginStart: 100,
              marginTop: 10,
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Zain ul Abdin and Jazib Sohail
          </Text>
        </View>
      </View>
      {/* <View style={{flex:8,flexDirection:'row',backgroundColor:'gray'}}>

      </View> */}
    </View>
  );
}
function RegisterScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [companyname, setCompanyName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [location, setLocation] = useState(null);



  const [data, setData] = useState({});
  
  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
        
      const { latitude, longitude } = position.coords;
      Alert.alert("location :(latitude :"+latitude+",longitude:"+longitude+")")
      setLocation({ latitude, longitude });
      },
        error => console.error('Error getting location: ', error),
        { 
          enableHighAccuracy: true, timeout: 20000,
          maximumAge: 1000 
        }
    );
    }, []);
  
  
  
  const getData = async () => {
    try {
      const result = await firestore()
        .collection('Users')
        .doc('210tM5dvyOwh1epZdPrx')
        .get();
      setData(result);
      //return result;
      console.log(result._data.email);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const addUser = async () => {
    try {
      firestore()
        .collection('Users')
        .add({
          username: username,
          email: email,
          name: name,
          companyname: companyname,
          phonenumber: phonenumber,
          latitude: location.latitude,
          longitude: location.longitude

        })
        .then(() => {
          firestore()
            .collection('Users')
            .get()
            .then(querySnapshot => {
              console.log('Total users: ', querySnapshot.size);

              querySnapshot.forEach(documentSnapshot => {
                console.log(
                  'username : ' +
                    documentSnapshot.data().username +
                    ', Email : ' +
                    documentSnapshot.data().email,
                );
                //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
              });
            });
          setUsername('');
          setEmail('');
          setName('');
          setCompanyName('');
          setPhoneNumber('');

          //console.log('User added!');
        });
    } catch (err) {
      console.log('Error to Add: ' + err);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flexDirection: 'row', backgroundColor: 'red'}}>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            padding: 5,
            fontSize: 20,
            color: 'white',
          }}>
          Profile
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Username :
          </Text>
        </View>

        <TextInput
          value={username}
          onChangeText={text => setUsername(text)}
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Email :
          </Text>
        </View>

        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Name :
          </Text>
        </View>

        <TextInput
          onChangeText={text => setName(text)}
          value={name}
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Company Name :
          </Text>
        </View>

        <TextInput
          onChangeText={text => setCompanyName(text)}
          value={companyname}
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Phone Number :
          </Text>
        </View>

        <TextInput
          onChangeText={text => setPhoneNumber(text)}
          value={phonenumber}
          keyboardType="numeric"
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 6, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            {}
          </Text>
        </View>

        <View
          style={{
            flex: 6,
            borderColor: 'red',
            alignContent: 'flex-end',
            marginEnd: 10,
          }}>
          <Button
            title="Register"
            onPress={() => {
              try {
                const validator = require('validator');
                if (username.length <= 0) {
                  console.log('Username is not valid');
                  Alert.alert('Username is not valid');
                  return;
                } else if (!validator.isEmail(email)) {
                  console.log('Email is not valid');
                  Alert.alert('Email is not valid');
                  return;
                } else if (name.length <= 0) {
                  console.log('Name is not valid');
                  Alert.alert('Name is not valid');
                  return;
                } else {
                  setIsChecked(false);
                  const checkUser = async () => {
                    await firestore()
                      .collection('Users')
                      .get()
                      .then(querySnapshot => {
                        querySnapshot.forEach(documentSnapshot => {
                          if (documentSnapshot.data().username == username) {
                            setIsChecked(true);
                          }
                          //console.log("username : "+documentSnapshot.data().username+", Email : "+documentSnapshot.data().email)
                          //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                        });
                      });
                    //Alert.alert(username+" : "+isChecked)
                  };
                  checkUser();
                  //Alert.alert(username+" : "+isChecked)
                  if (isChecked) {
                    Alert.alert(username + ' user Already Exist');
                    setIsChecked(false);
                  } else {
                    addUser();
                    setIsChecked(false);
                  }
                }
              } catch (err) {
                console.log('Error : ' + err);
              }
            }}
          />
        </View>
        <View
          style={{
            flex: 6,
            borderColor: 'red',
            alignContent: 'flex-end',
            marginEnd: 10,
          }}>
          <Button
            title="View"
            onPress={() => {
              const navigation = useNavigation();
              navigation.navigate('ViewData');
            }}
          />
        </View>
      </View>
    </View>
  );
}

function EditDataScreen({ route, navigation }){
  const navigation2 = useNavigation();
  const { id,username, email,name,companyname,phonenumber } = route.params;
  const [usernamestate, setUsername] = useState(username);
  const [emailstate, setEmail] = useState(email);
  const [namestate, setName] = useState(name);
  const [companynamestate, setCompanyName] = useState(companyname);
  const [phonenumberstate, setPhoneNumber] = useState(phonenumber);
  const [isCheckedstate, setIsChecked] = useState(true);

  const updateUser = async () => {
    try {
      firestore()
        .collection('Users')
        .doc(id)
        .update({
          username: usernamestate,
          email: emailstate,
          name: namestate,
          companyname: companynamestate,
          phonenumber: phonenumberstate,
        })
        .then(() => {
          firestore()
            .collection('Users')
            .get()
            .then(querySnapshot => {
              console.log('Total users: ', querySnapshot.size);

              querySnapshot.forEach(documentSnapshot => {
                console.log(
                  'username : ' +
                    documentSnapshot.data().username +
                    ', Email : ' +
                    documentSnapshot.data().email,
                );
              });
            });
          setUsername('');
          setEmail('');
          setName('');
          setCompanyName('');
          setPhoneNumber('');
          navigation2.navigate('ViewData');
          //console.log('User added!');
        });
    } catch (err) {
      console.log('Error to Add: ' + err);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flexDirection: 'row', backgroundColor: 'red'}}>
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            padding: 5,
            fontSize: 20,
            color: 'white',
          }}>
          Edit Profile
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Username :
          </Text>
        </View>

        <TextInput
          value={usernamestate}
          onChangeText={text => setUsername(text)}
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Email :
          </Text>
        </View>

        <TextInput
          onChangeText={text => setEmail(text)}
          value={emailstate}
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Name :
          </Text>
        </View>

        <TextInput
          onChangeText={text => setName(text)}
          value={namestate}
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Company Name :
          </Text>
        </View>

        <TextInput
          onChangeText={text => setCompanyName(text)}
          value={companynamestate}
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            Phone Number :
          </Text>
        </View>

        <TextInput
          onChangeText={text => setPhoneNumber(text)}
          value={phonenumberstate}
          keyboardType="numeric"
          style={{flex: 4, borderWidth: 1, borderColor: 'red', marginEnd: 10}}
        />
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 6, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'fontFamily-bold',
              fontWeight: 'bold',
            }}>
            {}
          </Text>
        </View>

        <View
          style={{
            flex: 6,
            borderColor: 'red',
            alignContent: 'flex-end',
            marginEnd: 10,
          }}>
          <Button
            title="Update"
            onPress={() => {
              try {
                const validator = require('validator');
                if (usernamestate.length <= 0) {
                  console.log('Username is not valid');
                  Alert.alert('Username is not valid');
                  return;
                } else if (!validator.isEmail(emailstate)) {
                  console.log('Email is not valid');
                  Alert.alert('Email is not valid');
                  return;
                } else if (namestate.length <= 0) {
                  console.log('Name is not valid');
                  Alert.alert('Name is not valid');
                  return;
                } else {                 
                    updateUser();
                }
              } catch (err) {
                console.log('Error : ' + err);
              }
            }}
          />
        </View>
        <View
          style={{
            flex: 6,
            borderColor: 'red',
            alignContent: 'flex-end',
            marginEnd: 10,
          }}>
          <Button
            title="Cancel"
            onPress={() => {
              //const navigation = useNavigation();
              navigation2.navigate('ViewData');
            }}
          />
        </View>
      </View>
    </View>
  );
}
function  ViewDataScreen() {
  const navigation = useNavigation();
  const [viewData, setViewData] = useState([{}]);
  let records = [{}];
  
  
    firestore()
    .collection('Users')
    .get()
    .then(querySnapshot => {

      records=[]
      querySnapshot.forEach(documentSnapshot => {
        
        var record = {
          id:documentSnapshot.id,
          username: documentSnapshot.data().username,
          email: documentSnapshot.data().email,
          name: documentSnapshot.data().name,
          companyname:documentSnapshot.data().companyname,
          phonenumber:documentSnapshot.data().phonenumber,
        };
        records.push(record)
        
      });
      
    });
 
    useEffect(() => {
      const interval = setInterval(() => {
        if(records.length!=viewData.entries.length)
            setViewData(records);
    }, 1000);
      return () => clearInterval(interval);
    }, [records]);
    
    return (
      <ScrollView>
      <View
          style={[
          styles.container,
          {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'column',
          },
          ]}>
          {
          
          viewData.map((item)=>{
                  return(
                      <View
                          style={{
                              borderWidth: 2,
                              borderRadius: 20,
                              borderColor: 'red',
                              margin: 10,
                              padding: 10,
                          }}>
                          <Text style={{fontSize: 24}}> {item.username} </Text>
                          <Text style={{fontSize: 24}}> {item.email} </Text>
                          <Text style={{fontSize: 24}}> {item.name} </Text>
                          <View style={{paddingStart: 250}}>
                              <Button title="Edit" onPress={()=>{
                                navigation.navigate("EditData", {id:item.id,username: item.username,
                                                                email: item.email,
                                                                name: item.name,
                                                                companyname: item.companyname,
                                                                phonenumber: item.phonenumber,
                                                              }
                                                   );
                              }} />
                          </View>
                      </View>


                  )

              })
          }
         
      
    </View>
    </ScrollView>
     
    ); 
   
   }       
      
// function AddUserScreen(){
//   const user = {
//     image: null,
//     latitude: null,
//     longitude: null,
//   };

//  const handleCapturePicture = async () => {
//     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

//     if (status === 'granted') {
//       let result = await ImagePicker.launchCameraAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });

//       if (!result.cancelled) {
//         this.setState({ image: result.uri });
//       }
//     } else {
//       Alert.alert('Permission denied', 'Camera roll permission is required.');
//     }
//   };

//   const handleSaveData = () => {
//     const { image, latitude, longitude } = user;

//     // Example code to save data to Firebase
//     firestore().collection('users').add({
//       image,
//       latitude,
//       longitude,
//       // Other user information
//     })
//     .then(() => {
//       Alert.alert('Success', 'User data saved successfully.');
//     })
//     .catch(error => {
//       console.error('Error adding document: ', error);
//       Alert.alert('Error', 'Failed to save user data.');
//     });
//   };
//   return (
//     <View>
//       <Button title="Capture Picture" onPress={handleCapturePicture} />
//       {/* Display captured image if available */}
//       {user.image && <Image source={{ uri: user.image }} style={{ width: 200, height: 200 }} />}
//     </View>
//   );

// }




  // return (
  //   <ScrollView>
  //     <ShowData />      
  //   </ScrollView>
  // );
// }
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    getToken()
  }, [])

  const getToken=async()=>{
    let token=await messaging().getToken()
    console.log(token)
  }

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived in forground mood',
       JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  // const cartData=useSelector((state)=>state.reducer)
  // const [cardItems,setCardItems]=useState(0)
  // useEffect(()=>{
  //   setCardItems(cartData)
  // },[] )

  return (
   
   
    <NavigationContainer>
      <Tab.Navigator>
        <Stack.Screen name="General" component={Generalscreen} />
        <Stack.Screen name="Credential" component={PasswordScreen} />
        {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
        {/* <Tab.Screen name="Register" component={RegisterScreen} />
        <Tab.Screen name="ViewData" component={ViewDataScreen} />
        <Tab.Screen name="EditData" component={EditDataScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
   
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Profile" component={ProfileScreen} />
    //     <Stack.Screen name="Settings" component={SettingsScreen} />
    //     <Stack.Screen name="Register" component={RegisterScreen} />
    //     <Stack.Screen name="ViewData" component={ViewDataScreen} />
    //     <Stack.Screen name="EditData" component={EditDataScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <View>
    //   <Text>Cloud Messaging</Text>
    // </View>
    
//
    // AssignmentTwo()
    // AssignmentOne()
    // WorkingWithCss()

    // <Assignment2_3 item={1}/>

    // assingment_2_3(cardItems)
  );
}

const WorkingWithCss = () => {
  const [username, setName] = useState('zain');
  function useStatWork() {
    setName('Hi this First Text View');
  }
  return (
    <ScrollView>
      <View>
        <Text
          style={[ExStyle.text, {fontSize: 20}]}
          onPress={() => {
            Alert.alert('Hi this First Text View');
            useStatWork();
          }}>
          {username}
        </Text>
        <Text style={[ExStyle.text, {fontSize: 15}]}>
          Hi this Two Text View
        </Text>
        <Text style={[ExStyle.text, {fontSize: 20}]}>
          Hi this Three Text View
        </Text>
        <Text style={[ExStyle.text, {fontSize: 25}]}>
          Hi this Four Text View
        </Text>
        <Text style={[ExStyle.text, {fontSize: 30}]}>
          Hi this Five Text View
        </Text>

        <Text style={[ExStyle.text, {fontSize: 10}]}>
          Hi this Six Text View
        </Text>
        <Text style={[ExStyle.text, {fontSize: 15}]}>
          Hi this Seven Text View
        </Text>
        <Text style={[ExStyle.text, {fontSize: 20}]}>
          Hi this Eight Text View
        </Text>
        <Text style={[ExStyle.text, {fontSize: 25}]}>
          Hi this Nine Text View
        </Text>
        <Text style={[ExStyle.text, {fontSize: 30}]}>
          Hi this Ten Text View
        </Text>
      </View>
    </ScrollView>
  );
};

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

        <View style={{margin: 10}}>
          {/* <Button  title="Button 1" /> */}
          {/* <Image source={{uri: 'https://reactjs.org/logo-og.png'}} */}

          {/* <TouchableOpacity onPress={() => Alert.alert('Back is pressed')} > */}
          <TouchableOpacity>
            <Image
              source={require('./assets/images/arrow.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.titleText}>Hello!</Text>
        </View>
      </View>
      <View style={[styles.verticalFix, {flex: 8, justifyContent: 'center'}]}>
        <View style={[{width: '90%', margin: 10}]}>
          <Text style={styles.titleText}>Janzib Sohail, my assignment-2.1</Text>
        </View>

        <View style={[{width: '90%', margin: 10, backgroundColor: 'gold'}]}>
          <Button title="Next" color="blue" />
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
    alignItems: 'stretch',
  },
  fixToText: {
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  verticalFix: {
    flexDirection: 'column',
    padding: 10,
  },

  titleText: {
    fontSize: 20,
    color: '#a9a9a9',
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
