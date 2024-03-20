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
  import firestore, {Filter} from '@react-native-firebase/firestore';
const ShowData = async () => {
   
    const records=[]
    await firestore()
      .collection('Users')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          var record = {
            username: documentSnapshot.data().username,
            email: documentSnapshot.data().email,
            name: documentSnapshot.data().name,
          };
          records.push(record)
          //console.log('documentSnapshot.data().username: ', documentSnapshot.data().username);
          
        });
        
      });

      console.log("records.length"+records.length)
      
      return (
        <View
            style={[
            styles.container,
            {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: 'column',
            },
            ]}>
            {records.map((item)=>{
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
                                <Button title="Edit" />
                            </View>
                        </View>


                    )

                })
            }
           
        
      </View>
       
      );
  };

  export default ShowData;