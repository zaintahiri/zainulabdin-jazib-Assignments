/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {  
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';



function ShowIncreementDecreement() {
  const cartData=useSelector((state)=>state.reducer)
   return (
    //<View style={{backgroundColor:'orange',alignItems:'flex-end',padding:20}}>
    //   <View style={{flex:1,backgroundColor:'yellow',height:40,width:50,borderRadius:15,alignItems:'center'}}>
    //       <Text style={{color:'black',fontSize:30,}}>{cardItems}</Text>
    //   </View>

<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text style={{fontSize:30,color:'black',fontFamily: 'fontFamily-bold', fontWeight: 'bold'}}>
  {cartData}
</Text>
</View> 

        
    //</View>
  );
}


export default ShowIncreementDecreement;