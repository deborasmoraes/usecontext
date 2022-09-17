import { useContext, useState } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { AuthContext } from '../Contexts/AuthContext'


export default function Login(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { logar} = useContext(AuthContext)

    function handleLogin(){
            logar(email,senha)
    }
    return(
        <View>
            <TextInput
            placeholder="Informe email"
            defaultValue={email}
            onChangeText={setEmail}
            />

            <TextInput
            placeholder="Informe senha"
            defaultValue={senha}
            onChangeText={setSenha}
            />
            <TouchableOpacity
            onPress={handleLogin}><Text>Login</Text></TouchableOpacity>
        </View>
    )
}