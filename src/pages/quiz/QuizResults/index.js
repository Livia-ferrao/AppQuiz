import React, { useState } from "react"
import { Text, View, Image, TouchableOpacity} from 'react-native';
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons"


export default function QuizResults({navigation, route}) {

    const [click, setClick] = useState(false)
    const [win, setWin] = useState(true)
    const [borderButton1, setBorderButton1] = useState('#BEBAB3')
    const [borderButton2, setBorderButton2] = useState('#BEBAB3')
    const [borderButton3, setBorderButton3] = useState('#BEBAB3')
    const [backgroundButton1, setBackgroundButton1] = useState('')
    const [backgroundButton2, setBackgroundButton2] = useState('')
    const [backgroundButton3, setBackgroundButton3] = useState('')

    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.goBackButton}
                    onPress={() => navigation.goBack()}>
                    <FontAwesome name='chevron-left' size={20}/>
                </TouchableOpacity>
                <Text style={styles.title}>{route.params?.title}</Text>
            </View>
            
            <View>
                <Text style={styles.number}>{route.params.win?'1':'0'}/1</Text>
                <Text style={styles.textTitle}>{route.params.win?'Você é um mestre!':'Quase lá...'}</Text>
                <Text style={styles.textSubTitle}>{route.params.win?'Você concluiu o quiz com sucesso e guessu todas as perguntas. Você é realmente muito bom!'
                :'Continue estudando e tentando, uma hora você vai \ngabaritar! Eu acredito em você!'}</Text>
            </View>

            <TouchableOpacity style={styles.buttonBig}
                onPress={() => navigation.navigate('QuizDetail',
                {
                    image: route.params.image,
                    tag: route.params.tag,
                    title: route.params.title
                })}>
                <Text style={styles.buttonEnd}>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}   