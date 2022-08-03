import React, { useState, useEffect } from "react"
import { Text, View, Image, TouchableOpacity} from 'react-native';
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons"

import axios from 'axios'

export default function QuizResults({navigation, route}) {

    const [quizes, setQuizes] = useState(null);

    const getQuizes = async () => {
        const response = await axios.get(`https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes/${route?.params?.id}`)
        setQuizes(response.data)
    }

    useEffect(() => {
        getQuizes()
    }, []);


    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.goBackButton}
                    onPress={() => navigation.goBack()}>
                    <FontAwesome name='chevron-left' size={20}/>
                </TouchableOpacity>
                {/* <Text style={styles.title}>{route.params?.title}</Text> */}
            </View>
            
            <View>
                <Text style={styles.number}>{route?.params?.numberWin}/{route?.params?.total}</Text>
                <Text style={styles.textTitle}>{route.params.win?'Você é um mestre!':'Quase lá...'}</Text>
                <Text style={styles.textSubTitle}>{route.params.win?'Você concluiu o quiz com sucesso e guessu todas as perguntas. Você é realmente muito bom!'
                :'Continue estudando e tentando, uma hora você vai \ngabaritar! Eu acredito em você!'}</Text>
            </View>

            <TouchableOpacity style={styles.buttonBig}
                onPress={() => navigation.navigate('QuizDetail', {
                    questions_count: quizes?.questions_count,
                    id: quizes?.id,
                    image: quizes?.banner_image,
                    title: quizes?.title,
                    description: quizes?.description,
                    tag: quizes?.search
                })}>
                <Text style={styles.buttonEnd}>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}   