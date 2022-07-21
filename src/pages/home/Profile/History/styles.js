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
 history: {
    alignSelf: 'center',
    fontSize: 24,
    width: 341,
    height: 32,
    color: '#3C3A36',
    fontWeight: 'bold',
    marginTop: 48,
    marginLeft: 90,
},
 itens: {
    left: 16,
    top: 20,
 },
});
 
export default styles