import { View, Text, TouchableOpacity } from 'react-native';
import {StyleSheet} from 'react-native'

export default function Consulta({navigation}){
    return(
        <View style ={styles.container}>
            <TouchableOpacity style={styles.botao} onPress ={() => navigation.navigate('home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress ={() => navigation.navigate('cadastro')}>
                <Text>Cadastro</Text>
            </TouchableOpacity>
            <Text></Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'lightcyan',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
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
       backgroundColor:'mistyrose'
    }
   })