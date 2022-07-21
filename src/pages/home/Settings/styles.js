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
settings: {
    alignSelf: 'center',
    fontSize: 24,
    width: 341,
    height: 32,
    color: '#3C3A36',
    fontWeight: 'bold',
    marginTop: 48,
    marginLeft: 35,
},
contentAll: {
   marginLeft: 16,
   marginTop: 28,
},
 textAccount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3C3A36',
},
 cardContainer: {
    width: 343,
    height: 82,
    top: 16,
    marginBottom: 16,
    borderColor: '#BEBAB3',
    borderWidth: 1,
    borderRadius: 16,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
 },
 circle: {
    backgroundColor: '#65AAEA',
    borderRadius: 48,
    width: 32,
    height: 32,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
 },
 iconCircle: {
    color: 'white',
},
 textContainer: {
    left: 16,
    width: 235,
 },
 cardTitle: {
    color: '#3C3A36',
    fontSize: 20,
 },
 cardSubtitle: {
    color: '#78746D',
    fontSize: 14,
 },
 iconChevron: {
    color: '#BEBAB3',
    position:'absolute',
    right: 24,
    top: 33,
 },

});
 
export default styles