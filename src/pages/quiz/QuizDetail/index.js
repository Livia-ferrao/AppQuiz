import React from "react"
import { Text, View, Image, TouchableOpacity} from 'react-native';
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons"


export default function QuizDetail({navigation, route}) {
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.goBackButton}
                    onPress={() => navigation.goBack()}>
                    <FontAwesome name='chevron-left' size={20}/>
                </TouchableOpacity>
                <Text style={styles.title}>{route.params.title}</Text>
            </View>
            <View>
                <Image style={styles.image} source={route.params.image}></Image>
                <View style={styles.text}>
                    <View style={styles.tagBackground}>
                        <Text style={styles.tag}>{route.params.tag}</Text>
                    </View>
                    <Text style={styles.titleDescription}>Sobre o quiz</Text>
                    <Text style={styles.subTitleDescription}>You can launch a new career in web develop-
                        ment today by learning HTML & CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, a lot of determination, and a teacher you trust.
                    </Text>

                    <Text style={styles.questions}>Quantidade de perguntas</Text>
                    <Text style={styles.value}>10</Text>
                    <TouchableOpacity style={styles.buttonBig}
                                     onPress={()=> navigation.navigate('QuizQuestion', 
                                     {
                                        image: route.params?.image,
                                        tag: route.params?.tag,
                                        title: route.params?.title 
                                     })} >
                        <Text style={styles.buttonTry}>Fazer tentativa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
} 