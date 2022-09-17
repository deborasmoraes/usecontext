import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {StyleSheet} from 'react-native';
import MyContext from './mycontext'

export default function Home({navigation}) {
    const nome = useContext(MyContext)
    return (
        <View style ={styles.container}>
        <Text>Home</Text>
        <Text>Nome:{nome}</Text>
        <TouchableOpacity
        onPress={() => navigation.navigate('edicao')}>
            <Text>Edição</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
 container:{
     backgroundColor: 'lightcyan',
     alignItems: 'center',
     width: '100%',
     height: '80%',
     borderWidth: 2,
     borderRadius: 10
 },
 botao:{
     marginTop: 6,
     padding: 8,
     width: '23%',
     marginLeft: 6,
     textAlign: 'center',
     borderWidth: 2,
    borderRadius: 10,
    backgroundColor:'mistyrose',
    
 }
})
