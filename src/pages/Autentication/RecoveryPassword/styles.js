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
    justifyContent: 'center',
},
 recoveryPasswordContainer: {
    height: 'auto',
    width: 'auto',
    position: 'relative',
    alignItems: 'center',
    alignSelf: "center",
    marginTop: 170,
 },
 textRecovery: {
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
 buttonRecovery: {
    fontSize: 16,
    lineHeight: 18,
    color: '#FFFFFF',
}
});
 
export default styles