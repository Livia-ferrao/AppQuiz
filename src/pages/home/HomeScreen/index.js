import React, { useState, useEffect } from "react"
import {View, Text, TouchableOpacity, FlatList } from "react-native"

import styles from "./styles"
import {FontAwesome} from "@expo/vector-icons";
import Cards from "./Cards"

import axios from 'axios'

export default function HomeScreen({navigation}) {

    const [user, setUser] = useState(null);
    const [quizes, setQuizes] = useState(null);

    const getUser = async () => {
        const response = await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile');
        setUser(response.data)
    }

    const getQuizes = async () => {
        const response = await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes')
        setQuizes(response.data)
    }

    useEffect(() => {
        getUser()
        getQuizes()
    }, []);


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
                <Text>{console.log('QUIZES')}</Text>
                <Text>{console.log(quizes)}</Text>
                <TouchableOpacity style={styles.buttonTag}
                                onPress={() => navigation.navigate('Search',
                                {
                                input: `${quizes.search}`
                                })} >
                    <Text style={styles.textTag}>#HTML</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonTag}
                                onPress={() => navigation.navigate('Search',
                                {
                                    input: `${quizes.search}`
                                })} >
                    <Text style={styles.textTag}>#UX</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonTag}
                                onPress={() => navigation.navigate('Search',
                                {
                                    input: `${quizes.search}`
                                })} >
                    <Text style={styles.textTag}>#Swift</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTag}
                                onPress={() => navigation.navigate('Search',
                                {
                                    input: `${quizes.search}`
                                })} >
                    <Text style={styles.textTag}>#UI</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.testFlat}>
                <FlatList
                    style={styles.flatlist}
                    data={quizes}
                    renderItem={(quiz)=>{
                        return <TouchableOpacity onPress={() => navigation.navigate('QuizDetail',
                                {   
                                    //banner_image: quiz?.item?.banner_image,
                                    //description: quiz?.item?.description,
                                    //title: quiz?.item?.title,
                                    questions_count: quiz?.item?.questions_count,
                                    id: quiz?.item?.id,
                                    image: quiz?.item?.banner_image,
                                    title: quiz?.item?.title,
                                    description: quiz?.item?.description,
                                    tag: quiz?.item?.search
                                })}>
                            <Cards title={quiz?.item?.title} description={quiz?.item?.short_description} image={quiz?.item?.banner_image} tag={quiz?.item?.search}></Cards>
                        </TouchableOpacity>
                    }}
                /> 
            </View>
        </View>
    )
}