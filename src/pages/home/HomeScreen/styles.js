import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
 containerAll: {
    width:'100%',
    height: '100%',
    marginLeft: 16,
    // marginTop: 52,
    paddingTop: 52
 },
 testFlat: {
    flex: 1,
    //backgroundColor: 'red'
 },
 textInit:{
    color: '#3C3A36',
    fontSize: 16,
    lineHeight: 26,
},
textName: {
    color: '#333333',
    fontSize: 32,
    lineHeight: 42,
    marginTop: 4,
},
search: {
    paddingLeft: 16,
    marginTop: 12,
    width: 343,
    height: 56,
    borderColor: '#BEBAB3',
    borderWidth: 1,
    borderRadius: 12,
},
textSearch: {
    marginLeft:16,
    marginTop: 17.5,
    color: '#78746D',
    fontSize: 14,
    lineHeight: 21
},
icon: {
    position:'absolute',
    top: 102,
    left: 305,
},
tags: {
    marginTop: 12,
    marginBottom: 20,
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
},
buttonTag: {
    backgroundColor: '#65AAEA',
    marginRight: 8,
    width: 63,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
},
textTag: {
    color: '#F2F2F2',
    fontSize: 12,
},
flatlist: {
    //height: '100%'
}
});
 
export default styles