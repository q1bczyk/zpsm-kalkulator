import { StyleSheet } from 'react-native';

const createStyles = isLandscape => StyleSheet.create({
    container:
    {
      flex : 1,
      justifyContent : "center",
      backgroundColor : "#5A5A5A"
    },
    resultBox :
    {
      width : "95%",
      height : "18%",
      flexDirection : 'row',
      alignItems : "center",
      textAlign : "right",
    },
    row :
    {
      flex: 1,
      height : "15%",
      marginBottom : 4,
      flexDirection : "row",
      justifyContent: "space-between"
    },
    singleBox :
    {
      width : !isLandscape ? "24.5%" : '9.5%',
      height : "100%",
      backgroundColor : "#878787",
      display : 'flex',
      justifyContent : "center",
      alignItems : "center"
    },
    doubleBox :
    {
      width : !isLandscape ? "50%" : '20%',
      height : "100%",
      backgroundColor : "#878787",
      display : 'flex',
      justifyContent : "center",
      alignItems : "center"
    },
    darkDoubleBox : 
    {
      backgroundColor : "#6E6E6E",
      width: !isLandscape ? "50%" : '20%',
    },
    darkBox : 
    {
      width : !isLandscape ? "24.5%" : '9.5%',
      height : "100%",
      backgroundColor : "#6E6E6E",
      display : 'flex',
      justifyContent : "center",
      alignItems : "center"
    },
    yellowBox :
    {
      width : !isLandscape ? "24.5%" : '9.5%',
      height : "100%",
      backgroundColor : "#DF8D00",
      display : 'flex',
      justifyContent : "center",
      alignItems : "center"
    },
    text : 
    {
      width: "100%",
      display : 'flex',
      fontSize : !isLandscape ? 50 : 20,
      fontFamily : "Veranda",
      color : 'white',
      textAlign : "center",
    },
    text2 : 
    {
      width: "100%",
      display : 'flex',
      fontSize : 50,
      fontFamily : "Veranda",
      color : 'white',
      textAlign : "right",
    },
    button :
    {
      width : '100%',
      height : '100%',
      display : 'flex',
      justifyContent : "center",
      alignItems : "center"
    }
  });

  export default createStyles