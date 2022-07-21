import React from "react"
import { Text, View, Image} from 'react-native';
import styles from "./styles";

export default function HistoryCards(props) {

    console.log(props.color)

    return (
        <View style={styles.card}>
            <View style={styles.containerImage}>
                <Image source={props.image} style={styles.image}></Image>
                <View style={styles.information}>
                    <Text style={{ color: props.color }}>Você acertou {props.right} de 10</Text>
                    <Text>{props.date}</Text>
                </View>
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
        </View>
    );
} 