import React, {useState} from "react"
import {View, Text, TouchableOpacity } from "react-native"

import styles from "./styles"
import {FontAwesome} from "@expo/vector-icons";


export default function Settings({navigation}) {
    return (
       <View>
           <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.goBackButton}
                    onPress={() => navigation.goBack()}>
                    <FontAwesome name='chevron-left' size={20}/>
                </TouchableOpacity>
                <Text style={styles.settings}>Configurações</Text>
            </View>
            <View style={styles.contentAll}>
                <Text style={styles.textAccount}>Informações da conta</Text>

                <View style={styles.cardContainer}>
                    <View style={styles.circle}>
                        <FontAwesome style={styles.iconCircle} name='user' size={15} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Nome</Text>
                        <Text style={styles.cardSubtitle}>Juana Antonieta</Text>
                    </View> 
                    <FontAwesome style={styles.iconChevron} name='chevron-right' size={20}/>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.circle}>
                        <FontAwesome style={styles.iconCircle} name='user' size={15} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Foto de perfil</Text>
                    </View> 
                    <FontAwesome style={styles.iconChevron} name='chevron-right' size={20}/>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.circle}>
                        <FontAwesome style={styles.iconCircle} name='envelope' size={15} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>E-mail</Text>
                        <Text style={styles.cardSubtitle}>juanita123@gmail.com</Text>
                    </View> 
                    <FontAwesome style={styles.iconChevron} name='chevron-right' size={20}/>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.circle}>
                        <FontAwesome style={styles.iconCircle} name='lock' size={15} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.cardTitle}>Senha</Text>
                        <Text style={styles.cardSubtitle}>nunca foi alterada</Text>
                    </View> 
                    <FontAwesome style={styles.iconChevron} name='chevron-right' size={20}/>
                </View>
            </View>
       </View>
    )
}