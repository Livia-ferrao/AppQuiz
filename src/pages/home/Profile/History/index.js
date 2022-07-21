import React from "react"
import {View, Text, TouchableOpacity, FlatList} from "react-native"

import styles from "./styles"
import {FontAwesome} from "@expo/vector-icons";

import Cards from './HistoryCards'

const itens = [
    {
      key: '1',
      title: 'HTML básico ',
      description: 'Testes seus conhecimentos em tags básicas...',
      image: require('../../../../img/card1.png'),
      tag: 'FÁCIL',
      date: '25/11/2021',
      right: 6
    },
    {
      key: '2',
      title: 'HTML e CSS ',
      description: 'Usando estilos inline no HTML',
      image: require('../../../../img/card2.png'),
      tag: 'FÁCIL',
      date: '25/11/2021',
      right: 10
    },
    {
      key: '3',
      title: 'UI',
      description: 'Questões sobre interface',
      image: require('../../../../img/card3.png'),
      tag: 'FÁCIL',
      date: '25/11/2021',
      right: 5
    },
    {
      key: '4',
      title: 'Swift',
      description: 'Advanced iOS apps',
      image: require('../../../../img/card1.png'),
      tag: 'FÁCIL',
      date: '25/11/2021',
      right: 8
    },
    {
      key: '5',
      title: 'Scrum',
      description: 'Advanced project organization course',
      image: require('../../../../img/card2.png'),
      tag: 'MÉDIO',
      date: '25/11/2021',
      right: 4
    },
  ];

export default function History({navigation}) {

  const color = (item) => {
    let color = '';
    (item>=6) ? color = '#5BA092': color ='#EF4949';
    return(color)
}

  return (
      <View>
          <View>
              <View style={styles.header}>
                  <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.goBackButton}>
                      <FontAwesome name='chevron-left' size={20}/>
                  </TouchableOpacity>
                  <Text style={styles.history}>History</Text>
              </View>
              <View>
                  <FlatList
                      style={styles.itens}
                      data={itens}
                      renderItem={({item})=>{
                          return <TouchableOpacity>
                                      <Cards image={item.image} title={item.title} description={item.description} date={item.date} right={item.right} color={color(item.right)}/>
                              </TouchableOpacity>
                          }}
                  />
              </View>
          </View>

      </View>
  )
}