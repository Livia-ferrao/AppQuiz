import React from "react"
import {View, Text, TouchableOpacity, Image} from "react-native"

import styles from "./styles"
import {FontAwesome} from "@expo/vector-icons";

import Cards from '../../HomeScreen/Cards'

const itens = [
    {
      key: '1',
      title: 'HTML básico ',
      description: 'Testes seus conhecimentos em tags básicas...',
      image: require('../../../../img/card1.png'),
      tag: 'FÁCIL',
    },
    {
      key: '2',
      title: 'HTML e CSS ',
      description: 'Usando estilos inline no HTML',
      image: require('../../../../img/card2.png'),
      tag: 'FÁCIL',
    },
    {
      key: '3',
      title: 'UI',
      description: 'Questões sobre interface',
      image: require('../../../../img/card3.png'),
      tag: 'FÁCIL',
    },
    {
      key: '4',
      title: 'Swift',
      description: 'Advanced iOS apps',
      image: require('../../../../img/card1.png'),
      tag: 'FÁCIL',
    },
    {
      key: '5',
      title: 'Scrum',
      description: 'Advanced project organization course',
      image: require('../../../../img/card2.png'),
      tag: 'MÉDIO',
    },
  ];

export default function History({navigation}) {
    return (
        <View>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.goBackButton}>
                        <FontAwesome name='chevron-left' size={20}/>
                    </TouchableOpacity>
                    <Text style={styles.about}>Sobre o app</Text>
                </View>
                <View>
                    <Image style={styles.image} source={require('../../../../img/content.png')}></Image>
                    <Text style={styles.text}>O PixelQuizzes é um aplicativo criado para facilitar o aprendizado de conteúdos que nem sempre são os melhores de se aprender. Através da nossa plataforma, prometemos facilitar a sua aprendizagem em conceitos dos mais variados tipos. Isso se dá pelo fato de usarmos uma metodologia inovadora para aprendizagem!</Text>
                </View>
            </View>

        </View>
    )
}