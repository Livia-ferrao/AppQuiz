import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
 loginContainer: {
    height: 'auto',
    width: 'auto',
    position: 'relative',
    alignItems: 'center',
    alignSelf: "center",
    marginTop: 200,
 },
 textLogin: {
    color: '#3C3A36',
    fontSize: 24,
    alignSelf:"center",
    paddingBottom: 8
 },
 input: {
    width: 343,
    height: 53,
    padding: 16,
    borderRadius: 12,
    borderColor: '#BEBAB3',
    borderWidth: 1,
    margin: 12
 },
 buttonForgetPassword: {
    color: '#78746D',
    alignSelf:"center",
    marginTop: 16,
    width: 146,
    height: 16,
},
 buttonBig: {
    width: 343,
    height: 56,
    backgroundColor: '#82327E',
    borderRadius: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
},
 buttonLogin: {
    fontSize: 16,
    lineHeight: 18,
    color: '#FFFFFF',
},
 buttonCreateCount: {
    color: '#78746D',
    alignSelf:"center",
    marginTop: 16,
    width: 108,
    height: 16,
},
});
 
export default styles