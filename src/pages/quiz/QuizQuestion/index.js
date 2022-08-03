import React, { useState, useEffect } from "react"
import { Text, View, Image, TouchableOpacity} from 'react-native';
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons"

import axios from 'axios'


export default function QuizQuestion({navigation, route}) {
    const navegar = () => {
        navigation.navigate('QuizResults',
            {
                win: win,
                numberWin: numberWin,
                total: questions?.data?.length,
                id: route?.params?.id
            })
        setNumberWin(0)
        setWin(false)
    }

    const [questions, setQuestions] = useState(null)
    const [counter, setCounter] = useState(0)
    const [click, setClick] = useState(false)
    const [win, setWin] = useState(false)
    const [numberWin, setNumberWin] = useState(0)

    const [borderButton1, setBorderButton1] = useState('#BEBAB3')
    const [borderButton2, setBorderButton2] = useState('#BEBAB3')
    const [borderButton3, setBorderButton3] = useState('#BEBAB3')
    const [backgroundButton1, setBackgroundButton1] = useState('')
    const [backgroundButton2, setBackgroundButton2] = useState('')
    const [backgroundButton3, setBackgroundButton3] = useState('')


    const getQuestions = async () => {
        const response = await axios.get(`https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/questions/${route?.params?.id}`)
        return response.data
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getQuestions()
            setQuestions(data);
        }
        getData()
        setClick(false)
        setBorderButton1('#BEBAB3')
        setBorderButton2('#BEBAB3')
        setBorderButton3('#BEBAB3')
        setBackgroundButton1('#F8F2EE')
        setBackgroundButton2('#F8F2EE')
        setBackgroundButton3('#F8F2EE')
    }, [counter])

    function checkWin(option) {
        let rightAnswer = questions?.data[counter]?.correct_answer_index
        if (option === rightAnswer) {
            setWin(true)
            setNumberWin(numberWin+1)
        }
        if (!click){
            setClick(true);
            if(rightAnswer == 1){
                setBorderButton1('#5BA092')
                setBorderButton2('#EF4949')
                setBorderButton3('#EF4949')
                setBackgroundButton1('#FFF5EE')
            } else if (rightAnswer == 2){
                setBorderButton1('#EF4949')
                setBorderButton2('#5BA092')
                setBorderButton3('#EF4949')
                setBackgroundButton2('#FFF5EE')
            } else if (rightAnswer == 3) {
                setBorderButton1('#EF4949')
                setBorderButton2('#EF4949')
                setBorderButton3('#5BA092')
                setBackgroundButton3('#FFF5EE')
            }
        }
    }
    return (
        <View>
            <View style={styles.header}>
            <TouchableOpacity 
                style={styles.goBackButton}
                onPress={() => navigation.goBack()}>
                <FontAwesome name='chevron-left' size={20}/>
            </TouchableOpacity>
        </View>

        <Text style={styles.numbers}>{counter+1} de {questions?.data?.length}</Text>
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
                onPress={()=>{checkWin(questions?.data[counter]?.correct_answer_index) }}>    
                <Text style={styles.markDown}>A.  {questions?.data[counter]?.answers[0]}</Text>
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
                onPress={()=>{ checkWin(2) }}>    
                <Text style={styles.markDown}>B. {questions?.data[counter]?.answers[1]}</Text>
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
                onPress={()=>{ checkWin(3) }}>    
                <Text style={styles.markDown}>C. {questions?.data[counter]?.answers[2]}</Text>
            </TouchableOpacity>
        </View>

        {click && questions?.data?.length == counter+1? 
        <TouchableOpacity style={styles.buttonBig}
                onPress={() => navegar()}>
                <Text style={styles.buttonResult}>Continuar</Text>
            </TouchableOpacity>: <View/>}
        
        {click && questions?.data?.length > counter+1? 
        <TouchableOpacity style={styles.buttonBig}
                onPress={() => setCounter(counter + 1)}>
                <Text style={styles.buttonResult}>Continuar</Text>
            </TouchableOpacity>: <View/>}

        </View>
    );
} 