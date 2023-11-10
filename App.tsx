import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Dimensions } from 'react-native';
import createStyles from './_styles/styles';
import ButtonComponent from './_components/ButtonComponent';
import { resetOperation, firstChar, resultOperation, doubleOperation, pointOperation, expOperation } from './_functions/functions';
import { number } from 'mathjs';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {

  const [mathExpression, setMath] = useState('0');
  const [pointUse, setPoint] = useState(false);
  const [isLandscape, setOrientation] = useState(false);
  const [isNumberActive, setNumberActive] = useState(false);

  useEffect(() => {
    
    const handleOrientationChange = () => {
      if(Dimensions.get('screen').height > Dimensions.get('screen').width)
        setOrientation(false);
      else setOrientation(true);
    };
    Dimensions.addEventListener('change', handleOrientationChange);
  }, []);

  const styles = createStyles(isLandscape);

  const darkColor = '#6E6E6E';
  const orangeColor = '#DF8D00';
  const lightColor = '#878787'

  const buttonsData = [
    { 
        label: "(", 
        onPress: () => setMath(firstChar(mathExpression, '(')), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false, 
    },
    { 
        label: ")", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "mc", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "m+", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "m-", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "mr", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "+/-", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "%", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "AC", 
        onPress: () => setMath(resetOperation(setNumberActive, setPoint)), 
        background: darkColor,
        alwaysDisable: true,
        doubleBox: false, 
    },
    { 
        label: "", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: true, 
    },
    { 
        label: "÷", 
        onPress: () => setMath(doubleOperation(mathExpression, setPoint, '÷')),
        background: orangeColor,
        alwaysDisable: true,
        doubleBox: false, 
    },

    /////////////////////////////////////////////////

    { 
        label: "2ⁿᵈ", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false, 
    },
    { 
        label: "x²", 
        onPress: () => setMath(expOperation('2', mathExpression, setNumberActive)), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "x³", 
        onPress: () => setMath(expOperation('3', mathExpression, setNumberActive)),
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "xⁿ", 
        onPress: () => {setMath(mathExpression + '^'); setNumberActive(true)}, 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "eⁿ", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "10ⁿ", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "7", 
        onPress: () => setMath(firstChar(mathExpression, isNumberActive, setNumberActive, '7')), 
        background: lightColor,
        alwaysDisable: true,
        doubleBox: false,  
    },
    { 
        label: "8", 
        onPress: () => setMath(firstChar(mathExpression, isNumberActive, setNumberActive, '8')),  
        background: lightColor,
        alwaysDisable: true,
        doubleBox: false,  
    },
    { 
        label: "9", 
        onPress: () => setMath(firstChar(mathExpression, isNumberActive, setNumberActive, '9')), 
        background: lightColor,
        alwaysDisable: true,
        doubleBox: false, 
    },
    { 
        label: "x", 
        onPress: () => setMath(doubleOperation(mathExpression, setPoint, 'x')),
        background: orangeColor,
        alwaysDisable: true,
        doubleBox: false, 
    },

    /////////////////////////////////////////////////

    { 
        label: "¹/ₓ", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false, 
    },
    { 
        label: "²√x", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "³√x", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "ⁿ√x", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "ln", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "log₁₀", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "4", 
        onPress: () => setMath(firstChar(mathExpression, isNumberActive, setNumberActive, '4')), 
        background: lightColor,
        alwaysDisable: true,
        doubleBox: false,  
    },
    { 
        label: "5", 
        onPress: () => setMath(firstChar(mathExpression, isNumberActive, setNumberActive, '5')),
        background: lightColor,
        alwaysDisable: true,
        doubleBox: false,  
    },
    { 
        label: "6", 
        onPress: () => setMath(firstChar(mathExpression, isNumberActive, setNumberActive, '6')),
        background: lightColor,
        alwaysDisable: true,
        doubleBox: false, 
    },
    { 
        label: "-", 
        onPress: () => setMath(doubleOperation(mathExpression, setPoint, '-')), 
        background: orangeColor,
        alwaysDisable: true,
        doubleBox: false, 
    },

    /////////////////////////////////////////////////

    { 
        label: "x!", 
        onPress: () => setMath(doubleOperation(mathExpression + '!', setPoint)), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false, 
    },
    { 
        label: "sin", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "cos", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "tan", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "e", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "EE", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "1", 
        onPress: () => setMath(firstChar(mathExpression, isNumberActive, setNumberActive, '1')), 
        background: lightColor,
        alwaysDisable: true,
        doubleBox: false,  
    },
    { 
        label: "2", 
        onPress: () => setMath(firstChar(mathExpression, isNumberActive, setNumberActive, '2')),
        background: lightColor,
        alwaysDisable: true,
        doubleBox: false,  
    },
    { 
        label: "3", 
        onPress: () => setMath(firstChar(mathExpression, isNumberActive, setNumberActive, '3')),
        background: lightColor,
        alwaysDisable: true,
        doubleBox: false, 
    },
    { 
        label: "+", 
        onPress: () => setMath(doubleOperation(mathExpression, setPoint, '+')), 
        background: orangeColor,
        alwaysDisable: true,
        doubleBox: false, 
    },
    
    /////////////////////////////////////////////////

    { 
        label: "Rad", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false, 
    },
    { 
        label: "sinh", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "cosh", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "tanh", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "π", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "Rand", 
        onPress: () => setMath(resetOperation()), 
        background: darkColor,
        alwaysDisable: false,
        doubleBox: false,  
    },
    { 
        label: "0", 
        onPress: () => setMath(firstChar(mathExpression, isNumberActive, setNumberActive, '0')), 
        background: lightColor,
        alwaysDisable: true,
        doubleBox: true,  
    },
    { 
        label: ",", 
        onPress: () => setMath(pointOperation(mathExpression, setPoint, pointUse, ',')), 
        background: lightColor,
        alwaysDisable: true,
        doubleBox: false,
    },
    { 
        label: "=", 
        onPress: () => setMath(resultOperation(mathExpression, setPoint, setNumberActive)), 
        background: orangeColor,
        alwaysDisable: true,
        doubleBox: false, 
    },

  ];


  return (
    <View style={styles.container}> 
      <View style={styles.resultBox}>
        <Text style={styles.text2}>{mathExpression}</Text>
      </View>
      <View style={styles.row}>
        {buttonsData.map((button, index) => (
          index <= 10 ? 
          <ButtonComponent
            key={index}
            onPress={button.onPress}
            label={button.label}
            background={button.background}
            style={styles}
            alwaysDisable={button.alwaysDisable}
            landscapeMode={isLandscape}
            doubleBox={button.doubleBox}
          /> : null 
        ))}
      </View>
      <View style={styles.row}>
      {buttonsData.map((button, index) => (
          index >= 11 && index <= 20 ? 
          <ButtonComponent
            key={index}
            onPress={button.onPress}
            label={button.label}
            background={button.background}
            style={styles}
            alwaysDisable={button.alwaysDisable}
            landscapeMode={isLandscape}
            doubleBox={button.doubleBox}
          /> : null 
        ))}
      </View>
      <View style={styles.row}>
        {buttonsData.map((button, index) => (
          index >= 21 && index <= 30 ? 
            <ButtonComponent
              key={index}
              onPress={button.onPress}
              label={button.label}
              background={button.background}
              style={styles}
              alwaysDisable={button.alwaysDisable}
              landscapeMode={isLandscape}
              doubleBox={button.doubleBox}
            /> : null 
          ))}
      </View>
      <View style={styles.row}>
        {buttonsData.map((button, index) => (
          index >= 31 && index <= 40 ? 
            <ButtonComponent
              key={index}
              onPress={button.onPress}
              label={button.label}
              background={button.background}
              style={styles}
              alwaysDisable={button.alwaysDisable}
              landscapeMode={isLandscape}
              doubleBox={button.doubleBox}
            /> : null 
          ))}
      </View>
      <View style={styles.row}>
        {buttonsData.map((button, index) => (
          index >= 41 && index < 50 ? 
            <ButtonComponent
              key={index}
              onPress={button.onPress}
              label={button.label}
              background={button.background}
              style={styles}
              alwaysDisable={button.alwaysDisable}
              landscapeMode={isLandscape}
              doubleBox={button.doubleBox}
            /> : null 
          ))}
      </View>
    </View>
  );        

}

export default App;
