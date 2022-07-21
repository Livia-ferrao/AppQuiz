import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
 container: {
    width: '100%',
    height: '100%',
 },
 header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
 },
 goBackButton:{
    position: 'relative',
    alignItems: 'center',
    borderColor: '#BEBAB3',
    borderRadius: 50,
    borderWidth: 1,
    marginTop: 60,
    marginLeft: 16,
    width: 48,
    height: 48,
    justifyContent: 'center'
},
 textSearch: {
    width: 287,
    height: 56,
    paddingLeft: 16,
    marginTop: 60,
    marginLeft: 8,
    marginRight: 16,
    borderColor: '#BEBAB3',
    borderWidth: 1,
    borderRadius: 12,
    alignItems:'center',
},
 iconSearch:{
    position: 'absolute',
    top: 78,
    left: 321,
},
 title: {
    position:'absolute',
    fontSize: 24,
    top: 200,
    width: 341,
    left: 16,
    textAlign: 'center',
    color: '#3C3A36',
    lineHeight: 32,
    fontWeight: 'bold',
},
 subTitle: {
    position:'absolute',
    top: 240,
    width: 341,
    left: 16,
    height: 42,
    textAlign: 'center',
    color: '#78746D',
    lineHeight: 21,
    fontSize: 14,  
 },
 textResult: {
    width: 341,
    height: 32,
    left: 16,
    top: 12,
    //textAlign: 'flex-start',
    fontSize: 24,
 },
 itens: {
    left: 16,
    top: 32,
 },

 imagePage3: {
    alignSelf: 'center',
    marginTop: 25,
 },
 titlePage3: {
    marginTop: 32,
    width: 341,
    textAlign: 'center', 
    marginLeft: 17,
    fontWeight: '500',
    lineHeight: 32,
    fontSize: 24,
 },
 subTitlePage3: {
    marginTop: 8,
    color: '#78746D',
    width: 341,
    textAlign: 'center', 
    marginLeft: 17,
    fontWeight: '500',
    lineHeight: 21,
    fontSize: 14,
 },
});
 
export default styles