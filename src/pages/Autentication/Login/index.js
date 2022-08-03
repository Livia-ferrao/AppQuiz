import React, {useState, useEffect } from "react"
import {View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from "react-native"

import styles from "./styles"
import {FontAwesome} from "@expo/vector-icons";

import axios from 'axios'


export default function Login({navigation}){

    const [email, setEmail] = useState('livia.ferrao16@hotmail.com')
    const [senha, setSenha] = useState('12345')
    const [user, setUser] = useState({})
    
    const getUser = async () => {
        const response = await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile');
        setUser(response.data)
    }

    useEffect(() => {
        getUser()
        //console.log(user)
    }, []);


    async function enter() {
        if (email == user.email)  {
            navigation.navigate('HomeScreen')
        }
    }

    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.loginContainer}>
            <View >
                <Text style={styles.textLogin}>Entrar</Text>
            </View>
            <View>
                <TextInput 
                    style={styles.input}
                    placeholder= "E-mail"
                    onChangeText={(value) => setEmail(value)}
                />
                <View>
                    <TextInput 
                        style={styles.input}
                        placeholder= "Senha"
                        onChangeText={(value) => setSenha(value)}
                    />
                    <TouchableOpacity style={{position:'absolute'}}>
                        <FontAwesome style={{position:'absolute', top:30, left:320}} name='eye-slash' size={20}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View> 
                <TouchableOpacity onPress={() => navigation.navigate('RecoveryPassword')}>
                    <Text style={styles.buttonForgetPassword}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBig} onPress={() => enter()}>
                    <Text style={styles.buttonLogin}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.buttonCreateCount} >Criar uma conta</Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    )
}