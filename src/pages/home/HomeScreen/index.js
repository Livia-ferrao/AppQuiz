import React, { useState, useEffect } from "react"
import {View, Text, TouchableOpacity, FlatList } from "react-native"

import styles from "./styles"
import {FontAwesome} from "@expo/vector-icons";
import Cards from "./Cards"

import axios from 'axios'

//import quizItem from ""../../../../services/api.js"
const quizItem = [
    {
      key: '1',
      title: 'HTML básico ',
      description: 'Testes seus conhecimentos em tags básicas...',
      image: require('../../../img/card3.png'),
      tag: 'FÁCIL',
    },
    {
      key: '2',
      title: 'HTML e CSS ',
      description: 'Usando estilos inline no HTML',
      image: require('../../../img/card2.png'),
      tag: 'FÁCIL',
    },
    {
      key: '3',
      title: 'UI',
      description: 'Questões sobre interface',
      image: require('../../../img/card1.png'),
      tag: 'FÁCIL',
    },
    {
      key: '4',
      title: 'Swift',
      description: 'Advanced iOS apps',
      image: require('../../../img/card4.png'),
      tag: 'FÁCIL',
    },
    {
      key: '5',
      title: 'Scrum',
      description: 'Advanced project organization course',
      image: require('../../../img/card5.png'),
      tag: 'MÉDIO',
    },
  ];

export default function HomeScreen({navigation}) {

    const [user, setUser] = useState(null);
    const [quizes, setQuizes] = useState([]);
  
    const getUser = async () => {
        const response = await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile');
        setUser(response.data)
    }
    
    const getQuizes = async () => {
        const response = await axios.get(' https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes')
        //return response.data
        setQuizes(response.data)
    }
    
    useEffect(() => {
        getUser()
        getQuizes()
        console.log(quizes)
        console.log('ola')
    }, []);

    // async function allQuizes() {
    //     let dados = await getQuizes()
    //     setQuizes(dados)
    // }

    return (
        <View style={styles.containerAll}>
            <View>
                <Text style={styles.textInit}>Hello, </Text>
                <Text style={styles.textName}>{user?.name}</Text>

                <TouchableOpacity style={styles.search} onPress={() => navigation.navigate('Search')}>
                    <Text style={styles.textSearch}>Pesquisar quiz</Text>
                </TouchableOpacity>
                <FontAwesome style={styles.icon} name='search' size={20}/>
            </View>

            <View style={styles.tags}>
                <TouchableOpacity style={styles.buttonTag}
                                onPress={() => navigation.navigate('Search',
                                {
                                input: 'HTML'
                                })} >
                    <Text style={styles.textTag}>#HTML</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonTag}
                                onPress={() => navigation.navigate('Search',
                                {
                                    input: 'UX'
                                })} >
                    <Text style={styles.textTag}>#UX</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonTag}
                                onPress={() => navigation.navigate('Search',
                                {
                                    input: 'Swift'
                                })} >
                    <Text style={styles.textTag}>#Swift</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTag}
                                onPress={() => navigation.navigate('Search',
                                {
                                    input: 'UI'
                                })} >
                    <Text style={styles.textTag}>#UI</Text>
                </TouchableOpacity>
            </View>
            
            <View>
                {/* <FlatList
                    style={styles.flatlist}
                    data={quizItem}
                    renderItem={({item})=>{
                        return <View onPress={() => navigation.navigate('QuizDetail',
                                {
                                    image: item.image,
                                    title: item.title,
                                    description: item.description,
                                    tag: item.tag
                                })}>
                            <Cards title={item.title} description={item.description} image={item.image} tag={item.tag}></Cards>
                        </View>
                    }}
                /> */}
                <Text>{quizes}</Text>
                <FlatList
                    style={styles.flatlist}
                    data={quizes}
                    renderItem={({quiz})=>{
                        return <View onPress={() => navigation.navigate('QuizDetail',
                                {
                                    image: quiz.banner_image,
                                    title: quiz.title,
                                    description: quiz.short_description,
                                    tag: quiz.search
                                })}>
                            <Cards title={quiz.title} description={quiz.short_description} image={quiz.banner_image} tag={quiz.search}></Cards>
                        </View>
                    }}
                /> 
                
            </View>

        </View>
    )
}