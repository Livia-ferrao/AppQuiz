import React, { useState, useEffect } from "react"
import {View, Text, TouchableOpacity, FlatList} from "react-native"

import styles from "./styles"
import {FontAwesome} from "@expo/vector-icons";

import HistoryCards from './HistoryCards'
import axios from 'axios'


export default function History({navigation}) {

  const [quizes, setQuizes] = useState([]);
  
  const getQuizes = async () => {
      const response = await axios.get('https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?is_answered=true')
      return response.data
  }
  
    useEffect(() => {
    const getData = async () => {
        const data = await getQuizes()
        setQuizes(data);
    }
    getData()
    }, [])


  const color = (item) => {
    console.log(item)
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
                      data={quizes}
                      renderItem={(quiz)=>{
                          return <TouchableOpacity>
                                      {/* <HistoryCards title={quiz?.item?.title} description={quiz?.item?.short_description} image={quiz?.item?.banner_image} tag={quiz?.item?.search}></HistoryCards> */}
                                  
                                      <HistoryCards banner_image={quiz?.item?.banner_image} 
                                      title={quiz?.item?.title} 
                                      short_description={quiz?.item?.short_description} 
                                      date={quiz?.item?.date} 
                                      difficulty={quiz?.item?.difficulty} 
                                      color={color(quiz?.item?.correct_answers_count)} 
                                      correct_answers_count={quiz?.item?.correct_answers_count}
                                      questions_count={quiz?.item?.questions_count}
                                      />
                                </TouchableOpacity>
                          }}
                  />
              </View>
          </View>

      </View>
  )
}