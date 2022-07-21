import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
 goBackButton:{
    position: 'relative',
    alignItems: 'center',
    borderColor: '#BEBAB3',
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 44,
    marginLeft: 16,
    width: 48,
    height: 48,
    justifyContent: 'center'
},
 header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
},
numbers:{
    //marginTop: 32,
    marginLeft: 168.5,
    color: '#78746D',
    lineHeight: 26,
    fontSize: 16,
    fontWeight: '400'
},
title:{
    marginTop: 8,
    width: 343,
    lineHeight: 32,
    fontSize: 24,
    textAlign: 'center',
    marginLeft: 16,
    fontWeight: 'bold'
},
imageBorder:{
    width:343,
    height: 191,
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#BEBAB3',
    selfAlign: 'center',
    justifyContent:"space-evenly",
},
 image:{
    borderRadius: 8,
    width: 311,
    height: 171,
},
 markDown: {
    color: '#3C3A36',
    lineHeight: 26,
    fontSize: 16,
    marginLeft: 24,
    marginTop: 16,
 },
buttonBig: {
    width: 343,
    height: 56,
    backgroundColor: '#82327E',
    borderRadius: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    //COLOCAR DE VOLTA
    //marginTop: 20,
},
buttonResult: {
    fontSize: 16,
    lineHeight: 18,
    color:'#fff',
},

});
 
export default styles