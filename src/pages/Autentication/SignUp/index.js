import React, {useState} from "react"
import {View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from "react-native"

import styles from "./styles"
import {FontAwesome} from "@expo/vector-icons";


export default function SignUp({navigation}) {

    const [name, setName] = useState('Livia')
    const [email, setEmail] = useState('livia.ferrao16@hotmail.com')
    const [senha, setSenha] = useState('12345')

    return (
        <View>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={styles.goBackButton}>
                <FontAwesome name='chevron-left' size={20}/>
            </TouchableOpacity>
            <Pressable onPress={Keyboard.dismiss} style={styles.signUpContainer}>
                <View >
                    <Text style={styles.textSignUp}>Cadastre-se</Text>
                    <Text style={styles.textSignUpFree}>Crie uma conta gratuitamente</Text>
                </View>
                <View>
                    <TextInput 
                        style={styles.input}
                        placeholder= "Nome"
                        onChangeText={(value) => setName(value)}
                    />
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
                    <TouchableOpacity 
                        style={styles.buttonBig}
                        onPress={() => navigation.navigate('HomeScreen')}>
                        <Text style={styles.buttonSignUp}>Cadastrar-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.buttonEnter} onPress={() => navigation.goBack()}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
        </View>
    )
}