import React, { useState, useEffect } from "react"
import { Text, View, Image, TouchableOpacity} from 'react-native';
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons"

import axios from 'axios'


export default function QuizQuestion({navigation, route}) {
    const [questions, setQuestions] = useState(null)
    const [counter, setCounter] = useState(0)
    const [click, setClick] = useState(false)
    const [win, setWin] = useState(false)


    const getQuestions = async () => {
        const response = await axios.get(`https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/questions/${route?.params?.id}`)
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
        setClick(false)
    }, [counter])


    const [borderButton1, setBorderButton1] = useState('#BEBAB3')
    const [borderButton2, setBorderButton2] = useState('#BEBAB3')
    const [borderButton3, setBorderButton3] = useState('#BEBAB3')
    const [backgroundButton1, setBackgroundButton1] = useState('')
    const [backgroundButton2, setBackgroundButton2] = useState('')
    const [backgroundButton3, setBackgroundButton3] = useState('')

    function checkWin(option) {
        if (!click){
            setClick(true);
            if(option == 1){
                setBorderButton1('#EF4949')
                setBorderButton2('#BEBAB3')
                setBorderButton3('#BEBAB3')
                setBackgroundButton1('#FFF5EE')
            } else if (option == 2){
                setBorderButton1('#BEBAB3')
                setBorderButton2('#EF4949')
                setBorderButton3('#BEBAB3')
                setBackgroundButton2('#FFF5EE')
            } else if (option == 3) {
                setBorderButton1('#BEBAB3')
                setBorderButton2('#BEBAB3')
                setBorderButton3('#5BA092')
                setBackgroundButton3('#FFF5EE')
            }
        }
    }
    return (
        <View>
            {questions != null? <View>
                <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.goBackButton}
                    onPress={() => navigation.goBack()}>
                    <FontAwesome name='chevron-left' size={20}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.numbers}>1 de {questions?.data?.length}</Text>
            {/* <Text style={styles.title}>{questions[counter].question_text}</Text> */}
            <View style={styles.imageBorder}>
                <Image style={styles.image} source={{uri: questions?.data[counter]?.banner_image}}/>
            </View>

            <View>
                <TouchableOpacity 
                    style={{
                        width: 343,
                        height: 58,
                        borderRadius: 8,
                        borderColor: borderButton1,
                        borderWidth: 1,
                        marginLeft: 16,
                        marginBottom: 16,
                        backgroundColor: backgroundButton1,
                    }}
                    onPress={()=>{checkWin(questions?.data[counter]?.correct_answer_index); setWin(false)}}>    
                    <Text style={styles.markDown}>A.  {""}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 343,
                        height: 58,
                        borderRadius: 8,
                        borderColor: borderButton2,
                        borderWidth: 1,
                        marginLeft: 16,
                        marginBottom: 16,
                        backgroundColor: backgroundButton2,
                    }}
                    onPress={()=>{ checkWin(2); setWin(false)}}>    
                    <Text style={styles.markDown}>B.  {"<p>"}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                        style={{
                            width: 343,
                            height: 58,
                            borderRadius: 8,
                            borderColor: borderButton3,
                            borderWidth: 1,
                            marginLeft: 16,
                            marginBottom: 16,
                            backgroundColor: backgroundButton3,
                        }} 
                    onPress={()=>{ checkWin(3); setWin(true) }}>    
                    <Text style={styles.markDown}>C.  {"<h1>"}</Text>
                </TouchableOpacity>
            </View>
            </View>:<View><Text>oi</Text></View> }

            {click && questions?.data?.length >= counter? 
            <TouchableOpacity style={styles.buttonBig}
                    onPress={() => setCounter(counter + 1)}>
                    <Text style={styles.buttonResult}>Continuar</Text>
                </TouchableOpacity>: <View/>}


            {click && questions?.data?.length == counter-1? 
            <TouchableOpacity style={styles.buttonBig}
                    onPress={() => navigation.navigate('QuizResults',
                    {
                        win: win,
                        image: questions?.data?.banner_image,
                        tag: route.params.tag,
                        title: route.params.title
                    })}>
                    <Text style={styles.buttonResult}>Continuar</Text>
                </TouchableOpacity>: <View/>}
            
        </View>
    );
} 