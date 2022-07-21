import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from "./styles"

const cards = [
  {
    key:'slide1',
    title: 'Aprenda a qualquer hora e \nem qualquer lugar',
    text: 'Tenha em suas mãos perguntas sobre os mais \nvariados assuntos e aprenda errando!',
    image: require('../../img/onboarding1.png'),
  },
  {
    key: 'slide2',
    title: 'Diversos assuntos \npara você',
    text: 'São vários quizes diferentes para você. Escolha \num e se aventure!',
    image: require('../../img/onboarding2.png'),
  },
  {
    key: 'slide3',
    title: 'Melhore suas habilidades',
    text: 'Memorize os conteúdos do aplicativo e melhore suas habilidades!',
    image: require('../../img/onboarding3.png'),
  },
];

export default function Onboarding(props) {
    const skip = props.skip;

    const onDone = () => {
      skip();
    };
    
    const onSkip = () => {
      skip();
    };

    const renderDoneButton = () => {
      return (
        <View style={styles.buttonBig}>
           <Text style={styles.textButton}>Vamos lá!</Text>
        </View>
      );
    };
  
    const renderNextButton = () => {
      return (
        <View style={styles.buttonBig}>
         <Text style={styles.textButton}>Avançar</Text>
        </View>
      );
    };  

    const renderSkipButton = () => {
      return (
        <View >
          <TouchableOpacity onPress={skip}>
              <Text style={styles.textButtonSkip}>Skip</Text>
          </TouchableOpacity>
        </View>
      );
    };

    const RenderCards = ({item}) => {
      return (
        <View style={styles.container}>
          <Image style={styles.image} source={item.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.text}</Text>
        </View>
      );
    };
  
    return (
      <>   
          <AppIntroSlider
            data={cards}
            renderItem={RenderCards}
            renderSkipButton={renderSkipButton}
            renderNextButton={renderNextButton}
            renderDoneButton={renderDoneButton}
            dotStyle={{backgroundColor: '#D5D4D4', bottom: 35}}
            activeDotStyle={{backgroundColor: '#65AAEA', bottom: 35, width: 16}}
            onDone={onDone}
            onSkip={onSkip}
            showSkipButton={true}
            showNextButton={true}
            showDoneButton={true}
            bottomButton={true}
          />
      </>
        );
  }