import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    card:{
        width:343,
        height: 300,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#BEBAB3',
        marginBottom: 16,
    },
    containerImage:{
        backgroundColor: '#F8F2EE',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 194,
    },
    image:{
        width: 343,
        height: 166,
        marginTop: 16,
        marginBottom: 40,
        //borderTopLeftRadius: 8,
        //borderTopRightRadius: 8,
    },
    information: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: -15,
        marginHorizontal: 16,
        fontSize: 12,
    },
    textContainer:{
        width:343,
        height: 81,
    },
    title:{
        fontSize: 24,
        marginTop:38,
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