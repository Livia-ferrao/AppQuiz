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
 about: {
    alignSelf: 'center',
    fontSize: 24,
    height: 32,
    color: '#3C3A36',
    fontWeight: 'bold',
    marginTop: 48,
    marginLeft: 60,
},
 image: {
    top: 120,
    //backgroundColor: 'red'
},
 text: {
    width: 341,
    height: 347,
    textAlign: 'center',
    marginLeft: 16,
    marginTop: 140,
    color: '#78746D',
   // backgroundColor: 'blue'
},
});
 
export default styles