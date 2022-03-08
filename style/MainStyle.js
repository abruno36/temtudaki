import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    button: {
      width: "100%",
      marginTop: 10
    },  
    cancelButton: {
      backgroundColor: "#c00"
    },
    checkboxContainer: {
      marginTop: 40,
      
    },
    container: {
      flex: 1,
      backgroundColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'center',
    },
    maskedInput: {
      flexGrow: 1,
      height: 40,
      fontSize: 18,
      borderBottomColor: "#888",
      borderBottomWidth: 1,
      borderStyle: "solid",
      alignSelf: "flex-start"
    },
    containerMask: {
      flexDirection: "row",
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10
    },
    containerMaskFone: {
      flexDirection: "row",
      marginTop: 20,
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10
    },
    errorMessage: {
      alignSelf: "flex-start",
      marginLeft: 15,
      color: "#f00",
      fontSize: 12
    },
    view: {
      margin: 30,
    },
    text: {
      textAlign: "center",
      padding: 5,
    },
    more: {
      marginVertical: 20,
    },
    button: {
      width: 120,
      marginLeft: "auto",
      marginRight: "auto",
    },
    img: {
      marginHorizontal: 130,
      marginTop: 30,
      marginBottom: 30
    }
  });

export default styles