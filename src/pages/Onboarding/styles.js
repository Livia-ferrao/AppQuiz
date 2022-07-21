import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  textButtonSkip: {
    position: 'absolute',
    width: 29,
    height: 16,
    color: '#78746D',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 580,
    right: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
  image: {
    width: 293,
    height: 206,
  },
  title: {
    marginTop: 16,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 24,
    color: '#3C3A36',
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subTitle: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
    color:'#78746D',
    lineHeight: 21,
    width: 341,
  },
  buttonBig: {
    width: 311,
    height: 56,
    backgroundColor: '#82327E',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },
  textButton: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 10,
  },
  })

export default styles