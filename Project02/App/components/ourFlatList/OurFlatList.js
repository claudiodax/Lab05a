import React,{Component} from 'react';
import {StyleSheet,TouchableOpacity,Text,View,Image,TextInput,FlatList} from 'react-native';
const Carros=[
    {
      id:1,
      title: 'Carro rojo clasico',
      img: 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/01/20210124-LOS-10-CARROS-MAS-VENDIDOS-DEL-MUNDO-EN-2020-01-750x460.jpg',
    },
    {
      id:2,
      title: 'Carro rojo deportivo',
      img: 'https://st1.uvnimg.com/d4/4a/006304a74db4902c0b4d8d8026c8/chevrolet-corvette-c8-stingray-2020-1280-08.jpg',
    },
    {
      id:3,
      title: 'Carro rojo familiar',
      img: 'https://www.elcarrocolombiano.com/wp-content/uploads/2021/02/20210208-TOP-75-CARROS-MAS-VENDIDOS-DE-COLOMBIA-EN-ENERO-2021-01.jpg',
    },
    {
      id:4,
      title: 'Carro mistico',
      img: 'https://img.autocosmos.com/noticias/fotosprinc/NAZ_b65480612b9249c0885a3ec88c5641e1.jpg',
    },
  ];
function Item ({ title, showAlert }) {
    return (
        <TouchableOpacity onPress={showAlert}>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}
const ListEmpty = () =>{
    return(
        <View>
            <Text style={{textAlign: 'center'}}>No Data Found</Text>
        </View>
    )
}
const OurFlatList = props => (

        <View style={styles.container}>
            <FlatList
                data={Carros}
                renderItem = { ({item}) => <Item title={item.title} showAlert={props.showAlert}/> }
                keyExtractor={item => item.id}
                ListEmptyComponent={ListEmpty}
            />
        </View>

)
export default OurFlatList;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20,
    },
    item:{
        backgroundColor:'orange',
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
    },
    title:{
        fontSize:32,
    },
});