import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,Text,View,Image,
  TextInput, FlatList,Alert} from 'react-native';
import OurFlatList from './App/components/ourFlatList/OurFlatList';


export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textValue: '',
      textResult: '',
      count: 0,
      Carros:[
        {
          id:1,
          name: 'Carro rojo clasio',
          img: 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/01/20210124-LOS-10-CARROS-MAS-VENDIDOS-DEL-MUNDO-EN-2020-01-750x460.jpg',
        },
        {
          id:2,
          name: 'Carro rojo deportivo',
          img: 'https://st1.uvnimg.com/d4/4a/006304a74db4902c0b4d8d8026c8/chevrolet-corvette-c8-stingray-2020-1280-08.jpg',
        },
        {
          id:3,
          name: 'Carro rojo familiar',
          img: 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg',
        },
        {
          id:4,
          name: 'Carro mistico',
          img: 'https://img.autocosmos.com/noticias/fotosprinc/NAZ_b65480612b9249c0885a3ec88c5641e1.jpg',
        },
      ],
    }
  }

changeTextInput = text => {
  console.log(text);
  this.setState({textValue: text});
};
onPress = () =>{
  this.setState({
    count: this.state.count + 1,
  })
};
renderItem = ({item}) =>(
  <TouchableOpacity>
    <View style={styles.contendorLista}>
      <Image style={styles.imagen} source={{uri:item.img}}/>
      <Text style={styles.itemLista}>{item.name}</Text>
    </View>
  </TouchableOpacity>
)

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
      <View style={styles.container}>
        <OurFlatList showAlert={this.showAlert}/>
      </View>
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