import { createContext, useState } from "react";
import { useNavigation } from '@react-navigation/native'
export const AuthContext = createContext({})

function AuthProvider({children}){
    const [user, setUser] = useState({email:'',Ativo:true})
    const navigation = useNavigation()

    function logar(email, senha){
        if(email !== "" && senha !== ""){
            setUser({email:email, ATIVO: true})
            navigation.navigate('home')
        }
    }
    return(
        <AuthContext.Provider value={{ logar, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider