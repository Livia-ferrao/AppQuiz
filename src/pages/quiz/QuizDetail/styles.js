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
    justifyContent: 'flex-start',
    marginTop: 4,
},
 title: {
    width: 250,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
    height: 32,
    color: '#3C3A36',
    fontWeight: 'bold',
    marginTop: 48,
},
 image: {
    height: 257,
    width: 375,
    marginTop: 5,
    marginBottom: 20,
},
text: {
    marginLeft: 16,
},
tagBackground:{
    position: 'absolute',
    width: 72,
    height:24,
    right: 12,
    backgroundColor:"#65AAEA",
    borderRadius:12,
    alignItems:"center",
    justifyContent:"center",
},
tag:{
    color:"#F2F2F2",
    fontWeight:"bold",
    fontSize:14
},
titleDescription: {
    height: 32,
    width: 347,
    fontSize: 24,
    color: '#3C3A36',
    marginBottom: 4
},
subTitleDescription: {
    height: 105,
    width: 347,
    fontSize: 14,
    color: '#3C3A36',
},
questions: {
    height: 26,
    width: 347,
    fontSize: 20,
    color: '#3C3A36',
},
value: {
    height: 21,
    width: 347,
    fontSize: 14,
    color: '#3C3A36',
},
buttonBig: {
    width: 343,
    height: 56,
    backgroundColor: '#82327E',
    borderRadius: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
},
 buttonTry: {
    fontSize: 16,
    lineHeight: 18,
    color: '#FFFFFF',
},
});
 
export default styles