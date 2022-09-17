import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Home from './home';
import {StyleSheet} from 'react-native';
import { useState} from 'react';

export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('') 
    const [fone, setFone] = useState('')
    const [msg, setMsg] = useState('') 
    const valida = ( ) => {
        if(nome == '') {
            setMsg ('Necessário informar nome!')
        }
        else if(email == ''){
            setMsg ('Necessário informar email!')
        }
        else if(fone == ''){
            setMsg('Necessário informar número!')
        } else {
            setMsg (''), navigation.navigate('edicao', {nome: nome, email: email, fone: fone})
        }
        
    }
    return (
        <View style ={styles.container}>
            <TouchableOpacity style={styles.botao} onPress = {() => navigation.navigate('home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress ={() => navigation.navigate('consulta')}>
                <Text>Consulta</Text>
            </TouchableOpacity>
            <TextInput style={styles.input}
                placeholder = 'Informe seu nome' value = {nome} onChangeText={setNome}
            />
            <TextInput style={styles.input}
                placeholder = 'Informe seu email' value = {email} onChangeText={setEmail}
            />
            <TextInput style={styles.input}
                placeholder = "Informe seu telefone" value = {fone} onChangeText={setFone}
            />
            <TouchableOpacity style={styles.botao} onPress ={valida}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
            <Text>{msg}
            </Text>
        </View>

    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'lightcyan',
        alignItems: 'center',
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
       backgroundColor:'mistyrose',
       flexDirection: 'row',
    },
    input:{
        flexDirection: 'column',
        width: 50,
        backgroundColor: 'rosybrown',

    }
   })