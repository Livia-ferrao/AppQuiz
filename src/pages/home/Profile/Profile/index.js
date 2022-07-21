import React from "react"
import {View, Text, TouchableOpacity, Image} from "react-native"

import styles from "./styles"
import {FontAwesome} from "@expo/vector-icons";


export default function Profile({navigation}) {
    return (
        <View>
            <View>
                <View style={styles.header}>
                    <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.goBackButton}>
                        <FontAwesome name='chevron-left' size={20}/>
                    </TouchableOpacity>
                    <Text style={styles.profile}>Profile</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.imageCircle}>
                    <Image style={styles.image} source={require('../../../../img/profileImage.png')}></Image>
                </View>
                <View style={styles.contentAll}>
                    <TouchableOpacity 
                        onPress={() => navigation.navigate('History')}
                        style={styles.cardContainer}>
                        <Text style={styles.cardTitle}>Seu histórico</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('About')}
                        style={styles.cardContainer}>
                        <Text style={styles.cardTitle}>Sobre o app</Text>
                    </TouchableOpacity>
                </View>
          </View>
        </View>
    )
}