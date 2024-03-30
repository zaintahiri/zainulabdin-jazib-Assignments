import React, { useState, useEffect } from 'react';
import { Alert, Button, TextInput,View } from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneScreen=()=> {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');

  console.log('confirm',confirm)
  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber() {
    
    if(phonenumber.length>0 && phonenumber.length==13){
        const confirmation = await auth().signInWithPhoneNumber(phonenumber);
        setConfirm(confirmation);
    }else{
        Alert.alert('Please Enter correct number')
    }
    
  }

  async function confirmCode() {
    try {
        console.log('code',code)
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
        <View>
                <TextInput value={phonenumber} keyboardType="phone-pad" placeholder='Enter Number (+9203033411981)' onChangeText={(text)=>{
                    setPhoneNumber(text)
                }}></TextInput>
                <Button
                    title="Phone Number Sign In"
                    onPress={() => {
                        console.log('Phone number:',phonenumber)
                        signInWithPhoneNumber()
                    }}
                />
        </View>
        
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

export default PhoneScreen;