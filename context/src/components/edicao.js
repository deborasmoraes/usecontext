import { View, Text } from 'react-native';
import { useContext } from 'react'
import MyContext from './mycontext'

export default function Edicao(){
    const nome = useContext(MyContext)
    return(
            <View>
                <Text>Edição</Text>
                <Text>Nome:{nome}</Text>
                
        </View>
    )
}
