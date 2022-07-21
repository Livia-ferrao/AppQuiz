import React, { useEffect, useState} from "react"
import {View, TextInput, TouchableOpacity, Image, Text, FlatList, Pressable, Keyboard} from "react-native"

import styles from "./styles"
import {FontAwesome} from "@expo/vector-icons";

import Cards from '../HomeScreen/Cards'
//import quizItem from "../../../services/api.js"

const itens = [
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


export default function Search({navigation, route }) {

    const searchInit = () => {if(route.params?.input){
        return route.params.input
      } else {
        return null
      }}

    const [search, setSearch] = useState(searchInit)
    const [content, setContent] = useState(null) 
    const [contentLenght, setContentLength] = useState(-1)
    const [change, setChange] = useState(true)

    function searching() {
        if (search !== null) {
            let quizes = []
            for (let i in itens) { 
                if (itens[i].title.toLowerCase().includes(search.toLowerCase())){
                    quizes.push(itens[i])
                }
            }
            setContent(quizes)
            if (quizes.length == 0) {
                setContentLength(-1)
            } else {
                setContentLength(quizes.length)
            }
        
        } else {
            setContent(null)
            setContentLength(0)
        }
    }

    useEffect(() => {
        searching()
        if (change) {
            setChange(false)
        }
      }, [change]);


    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                   // onPress={()=>{navigation.goBack()}}
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
                    onPress={() => {searching()}} 
                    style={styles.iconSearch}>
                    <FontAwesome name='search' size={15}/>
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    {(!content? (
                        <View>
                            <Text style={styles.title}>Comece a pesquisar...</Text>
                            <Text style={styles.subTitle}>Digite um termo de busca para pesquisar todos os quizzes disponíveis no aplicativo!</Text>
                        </View>
                    ):(
                        <><View>
                            <Text style={styles.textResult}>{contentLenght >= 0? (contentLenght + ' Results'): <View></View>}</Text>
                            <FlatList
                                style={styles.itens}
                                data={content}
                                renderItem={({item})=>{
                                    return <TouchableOpacity  onPress={() => navigation.navigate('QuizDetail',
                                                {
                                                    image: item.image,
                                                    title: item.title,
                                                    description: item.description,
                                                    tag: item.tag
                                                })}>
                                                <Cards image={item.image} title={item.title} description={item.description} tag={item.tag}/>
                                        </TouchableOpacity>
                                    }}
                            />
                        </View>
                        <View>
                            {(contentLenght == -1) ? (
                            <View>
                                <Image style={styles.imagePage3} source={require('../../../img/notFound.png')}/>
                                <Text style={styles.titlePage3}>Quiz não encontrado</Text>
                                <Text style={styles.subTitlePage3}>Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes...</Text>
                            </View>
                            ) : <View></View>} 
                        </View></>   
                    ))}
                </View>
            </View>
        </Pressable>
    )
}