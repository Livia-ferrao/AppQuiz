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
profile: {
    alignSelf: 'center',
    fontSize: 24,
    width: 341,
    height: 32,
    color: '#3C3A36',
    fontWeight: 'bold',
    marginTop: 48,
    marginLeft: 90,
},
container:{
    top:25,
},
// imageCircle: {
//     position: 'relative',
//     //alignItems: 'center',
//     borderColor: '#BEBAB3',
//     borderRadius: 50,
//     borderWidth: 1,
//     // marginTop: 44,
//     marginLeft: 117.5,
//     width: 100,
//     // height: 48,
// },
image: {
    left: 117.5,
    top: 20,
},
contentAll: {
   marginLeft: 16,
   marginTop: 28,
},
 cardContainer: {
    width: 343,
    height: 82,
    top: 16,
    marginBottom: 16,
    borderColor: '#BEBAB3',
    borderWidth: 1,
    borderRadius: 16,
 },
 cardTitle: {
    alignSelf:'center',
    color:'#3C3A36',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    lineHeight:32,
 },
});
 
export default styles