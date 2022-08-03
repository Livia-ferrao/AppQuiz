import React, { useEffect, useState} from "react"
import {View, TextInput, TouchableOpacity, Image, Text, FlatList, Pressable, Keyboard} from "react-native"

import styles from "./styles"
import {FontAwesome} from "@expo/vector-icons";

import Cards from '../HomeScreen/Cards'
import axios from 'axios'


export default function Search({navigation, route}) {
 
    const [quizes, setQuizes] = useState('')
    const [search, setSearch] = useState(route?.params?.input?route?.params?.input:'')
    const [change, setChange] = useState(true)

    const getQuizes = async () => {
        const response = await axios.get(`https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?search=${search}`)
        setQuizes(response.data)
    }

    // const searchFirst = () => {
    //     console.log(route?.params?.input)
    //     if(route?.params?.input != 'undefined'){
    //         setSearch(route?.params?.input)
    //   } else {
    //         setSearch('')
    //   }}

    // function searching() {
    //     // if (search !== null) {
    //     //     let quizes_all = []
    //     //     for (let i in itens) { 
    //     //         if (itens[i].title.toLowerCase().includes(search.toLowerCase())){
    //     //             itens_all.push(itens[i])
    //     //         }
    //     //     }
    //     //     setContent(quizes_all)
    //     //     if (quizes_all.length == 0) {
    //     //         setContentLength(-1)
    //     //     } else {
    //     //         setContentLength(quizes_all.length)
    //     //     }
        
    //     // } else {
    //     //     setContent(null)
    //     //     setContentLength(0)
    //     // }
    // }

    useEffect(() => {
        getQuizes()
      }, [search]);


    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.goBackButton}
                    onPress={() => {setSearch(null)
                                    navigation.goBack()}}>
                    <FontAwesome name='chevron-left' size={20}/>
                </TouchableOpacity>
                <TextInput 
                    style={styles.textSearch}
                    placeholder='Digite sua pesquisa aqui...'
                    onChangeText={setSearch}
                    value={search}
                />
                <TouchableOpacity 
                    onPress={() => {getQuizes()}} 
                    style={styles.iconSearch}>
                    <FontAwesome name='search' size={15}/>
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    {typeof(quizes)!='undefined' && quizes.length!=0? (
                         quizes.length>0? (
                            <View>
                                <Text style={styles.textResult}>{quizes.length} Results</Text>
                                <FlatList
                                    style={styles.itens}
                                    data={quizes}
                                    renderItem={({item})=>{
                                        return <TouchableOpacity  onPress={() => navigation.navigate('QuizDetail',
                                                    {      
                                                        id: item?.id,
                                                        questions_count: item?.questions_count,
                                                        image: item?.image,
                                                        title: item?.title,
                                                        description: item?.description,
                                                        tag: item?.tag
                                                    })}>
                                                    <Cards title={item?.title} description={item?.short_description} image={item?.banner_image} tag={item?.search}></Cards>
                                            </TouchableOpacity>
                                        }}
                                />
                            </View>
                         ) : (
                            <View>
                            <Image style={styles.imagePage3} source={require('../../../img/notFound.png')}/>
                            <Text style={styles.titlePage3}>Quiz não encontrado</Text>
                            <Text style={styles.subTitlePage3}>Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes...</Text>
                            </View>
                         )
                    ):(
                        <View>
                            <Text style={styles.title}>Comece a pesquisar...</Text>
                            <Text style={styles.subTitle}>Digite um termo de busca para pesquisar todos os quizzes disponíveis no aplicativo!</Text>
                        </View> 
                    )}
                </View>
            </View>
        </Pressable>
    )
}





