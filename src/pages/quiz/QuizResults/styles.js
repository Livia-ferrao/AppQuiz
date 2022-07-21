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
 title: {
    alignSelf: 'center',
    fontSize: 24,
    width: 341,
    height: 32,
    color: '#3C3A36',
    fontWeight: 'bold',
    marginTop: 48,
    marginLeft: 35,
},
 number: {
    width: 341,
    fontSize: 56,
    lineHeight: 58.8,
    color:'#3C3A36',
    fontWeight: 'bold',
    marginTop: 150,
    marginLeft: 16,
    textAlign: 'center',
},
 textTitle:{
    color:'#3C3A36',
    lineHeight: 32,
    fontSize: 24,
    width: 341,
    height: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 16,
},
 textSubTitle: {
    marginTop: 8,
    marginLeft: 16,
    lineHeight: 21,
    fontSize: 14,
    textAlign: 'center',
    color: '#78746D',
    width: 341,
    height: 42,
},
 buttonBig: {
    width: 343,
    height: 56,
    backgroundColor: '#82327E',
    borderRadius: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
    marginLeft: 16,
},
 buttonEnd: {
    fontSize: 16,
    lineHeight: 18,
    color:'#fff',
},

});
 
export default styles