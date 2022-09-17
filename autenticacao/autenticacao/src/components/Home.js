import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useContext} from 'react'
import {AuthContext} from '../Contexts/AuthContext'

export default function Home({navigation}){
    const {user}= useContext(AuthContext)
    return(
        <View style={styles.container}>
            <Text>Home</Text>
            <Text>Email:{user.email}</Text>
            <TouchableOpacity
            onPress={() => navigation.navigate('login')}>
                <Text>Logar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 'auto',
    }
})
