import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {FontAwesome} from "@expo/vector-icons";

//navegaçao
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Autenticacao
import SignUp from './src/pages/Autentication/SignUp'
import Login from './src/pages/Autentication/Login'
import RecoveryPassword from './src/pages/Autentication/RecoveryPassword'

//Tab navigation
import HomeScreen from './src/pages/home/HomeScreen'
import Profile from './src/pages/home/Profile/Profile'
import Settings from './src/pages/home/Settings'

import Onboarding from './src/pages/Onboarding'
import Search from './src/pages/home/Search';
import History from './src/pages/home/Profile/History'
import About from './src/pages/home/Profile/About'
import QuizDetail from './src/pages/quiz/QuizDetail'
import QuizQuestion from './src/pages/quiz/QuizQuestion'
import QuizResults from './src/pages/quiz/QuizResults'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Tabs(){
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:'#82327E',
        tabBarInactiveTintColor: '#BEBAB3',
        headerShown: false,
        tabBarStyle: styles.tab,
      }}>
      <Tab.Screen name="Quizzes" component={HomeScreen}
        options = {{
        tabBarIcon: ({ color }) => (
         <FontAwesome name='book' size={20} color={color}/>
       ),
     }}/>
      <Tab.Screen name="Perfil" component={Profile}  
        options={{    
        tabBarIcon: ({ color }) => (
          <FontAwesome name='user' size={20} color={color}/>
        )}}/>
      <Tab.Screen name="Configs" component={Settings} 
        options={{    
        tabBarIcon: ({ color }) => (
          <FontAwesome name='cog' size={20} color={color}/>
        )}}/>
    </Tab.Navigator>
  )
}



export default function App() {

  const [showApp, setShowApp] = useState(false)
  var skip = () => {setShowApp(true)};
  

  return (
    <>
      {showApp ? (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="SignUp" component={SignUp}/>
              <Stack.Screen name="RecoveryPassword" component={RecoveryPassword}/>
              <Stack.Screen name="HomeScreen" component={Tabs} />
              <Stack.Screen name="History" component={History} />
              <Stack.Screen name="About" component={About} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="QuizDetail" component={QuizDetail} />
              <Stack.Screen name="QuizQuestion" component={QuizQuestion} />
              <Stack.Screen name="QuizResults" component={QuizResults} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (<Onboarding skip={skip}></Onboarding>) } 
  </>
  );
}

const styles = StyleSheet.create({
  tab:{
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 10,
    width:390,
    height:64,
    textAlign: 'center',
    color: 'white'
  }
})