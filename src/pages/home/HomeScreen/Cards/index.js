import React from "react"
import { Text, View, Image} from 'react-native';
import styles from "./styles";

export default function Cards(props) {
    return (
        <View style={styles.card}>
            <View style={styles.containerImage}>
                <Image source={props.image} style={styles.image}></Image>
                <View style={styles.tagBackground}>
                    <Text style={styles.tag}>{props.tag}</Text>
                </View>
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description}>{props.description}</Text>
            </View>
        </View>
    );
} 