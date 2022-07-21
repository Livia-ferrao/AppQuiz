import React, {useState} from "react"
import {View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from "react-native"
import styles from "./styles"
import {FontAwesome} from "@expo/vector-icons";


export default function RecoveryPassword({navigation}) {
    return (
        <View>
            <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={styles.goBackButton}>
                <FontAwesome name='chevron-left' size={20}/>
            </TouchableOpacity>
            <Pressable onPress={Keyboard.dismiss} style={styles.recoveryPasswordContainer}>
                <View >
                    <Text style={styles.textRecovery}>Recuperar senha</Text>
                </View>
                <View>
                    <TextInput 
                        style={styles.input}
                        placeholder= "Digite seu endereço de e-mail"
                        //keyboardType="email-address"
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonBig}>
                        <Text style={styles.buttonRecovery}>Enviar e-mail</Text>
                    </TouchableOpacity>
                </View>
            </Pressable>
        </View>
    )
}