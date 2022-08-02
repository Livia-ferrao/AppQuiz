import React from "react"
import { Text, View, Image} from 'react-native';
import styles from "./styles";


export default function HistoryCards(props) {
    return (
        <View style={styles.card}>
            <View style={styles.containerImage}>
                <Image source={{uri: props.banner_image}} style={styles.image}></Image>
                <View style={styles.information}>
                    <Text style={{ color: props.color }}>Você acertou {props.correct_answers_count} de {props.questions_count}</Text>
                    <Text>{props.date}</Text>
                </View>
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props?.title}</Text>
                <Text style={styles.description}>{props.short_description}</Text>
            </View>
        </View>
    );
} 