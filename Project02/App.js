import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,Text,View,Image,
  TextInput, FlatList,Alert, Button} from 'react-native';
import OurFlatList from './App/components/ourFlatList/OurFlatList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();
function HomeScreen({navigation}) {
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
      title="Go to details"
      onPress={()=> navigation.navigate('Details')}/>
    </View>
  )
}
function DetailsScreen({navigation}) {
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
      title="Go to back to first"
      onPress={()=> navigation.popToTop()}/>
    </View>
  )
}
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textValue: '',
      textResult: '',
      count: 0,
    }
  }



showAlert = () => {
  Alert.alert(
    'Titulo',
    'Mensaje',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
};

  render(){
    return(
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen}/>
         <Stack.Screen name="Details" component={DetailsScreen}/>
       </Stack.Navigator>
     </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  imagen:{
    width:78,
    height:60,
    borderColor:'#d35647',
    resizeMode:'contain',
    margin:8
},
  lista:{
    borderRadius:15,
  },
  contendorLista:{
    flex:1,
    flexDirection:'row',
    marginLeft:10,
    justifyContent:'flex-start',
    margin:15,
  },
  itemLista:{
    marginLeft:10,
    fontSize:15,
  },
  title: {
    color: 'white',
    fontSize:40,
    justifyContent: 'center',
    alignItems:'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal:10,
    marginTop:10,
  },
  text:{
    alignItems:'center',
    justifyContent: 'center',
    padding: 15,
  },
  button:{
    top: 10,
    alignItems:'center',
    backgroundColor:'#bb3535',
    padding:10,
  },
  countContainer :{
    alignItems:'center',
    padding:10,
  },
  countText:{
    color:'#FF00FF',
  }
});