import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    card:{
        width:343,
        height: 275,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#BEBAB3',
        marginBottom: 16,
    },
    containerImage:{
        backgroundColor: '#F8F2EE',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    image:{
        width: 343,
        height: 138,
        marginTop: 16,
        marginBottom: 40,
        //borderTopLeftRadius: 8,
        //borderTopRightRadius: 8,
    },
    tagBackground:{
        position: 'absolute',
        width: 72,
        height:24,
        top: 162,
        right: 16,
        backgroundColor:"#65AAEA",
        borderRadius:12,
        alignItems:"center",
        justifyContent:"center",
    },
    tag:{
        color:"#F2F2F2",
        fontWeight:"bold",
        fontSize:12
    },
    textContainer:{
        width:343,
        height: 81,
    },
    title:{
        fontSize: 24,
        marginTop:16,
        marginLeft: 16,
        color: '#3C3A36',
        lineHeight: 32
        //textAlign: 'left'
    },
    description:{
        fontSize: 14,
        marginLeft: 16,
        marginTop: 4,
        color: '#3C3A36',
        lineHeight: 21
        //textAlign: 'left'
    },
})

export default styles