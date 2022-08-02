import React, {useEffect, useState} from "react"
import { Text, View, Image, TouchableOpacity} from 'react-native';
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons"

import axios from 'axios'

export default function QuizDetail({navigation, route}) {

    const [questions, setQuestions] = useState(null);

    const getQuestions = async () => {
        const response = await axios.get(`https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/questions/${route?.params?.id}`)
        //setQuestions(response.data)
        return response.data
    }

    // useEffect(() => {
    //     getQuestions()
    // }, []);

    useEffect(() => {
        const getData = async () => {
            const data = await getQuestions()
            setQuestions(data);
        }
        getData()
    }, [])


    async function nextScreen(){
        let question = await getQuestions()
        navigation.navigate('QuizQuestion', route?.params?.id)
    } 

    return (
        <View>
            <Text>{console.log(questions)}</Text>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.goBackButton}
                    onPress={() => navigation.goBack()}>
                    <FontAwesome name='chevron-left' size={20}/>
                </TouchableOpacity>
                <Text style={styles.title}>{route?.params?.title}</Text>
            </View>
            <View>
                <Image style={styles.image} source={{uri: route?.params?.image}}></Image>
                <View style={styles.text}>
                    <View style={styles.tagBackground}>
                        <Text style={styles.tag}>{route?.params?.tag}</Text>
                    </View>
                    <Text style={styles.titleDescription}>Sobre o quiz</Text>
                    <Text style={styles.subTitleDescription}>{route?.params?.description}
                    </Text>

                    <Text style={styles.questions}>Quantidade de perguntas</Text>
                    <Text style={styles.value}>{route?.params?.questions_count}</Text>
                    <TouchableOpacity style={styles.buttonBig} onPress={ nextScreen
                                    // ()=> navigation.navigate('QuizQuestion', 
                                    //  {  
                                    //     //banner_image: route?.params?.banner_image
                                    //     image: route.params?.image,
                                    //     tag: route?.params?.tag,
                                    //     title: route?.params?.title,
                                    //     id: route?.params?.id
                                    //  })
                                     } 
                                     >
                        <Text style={styles.buttonTry}>Fazer tentativa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
} 