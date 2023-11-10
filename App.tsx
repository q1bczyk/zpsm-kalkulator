import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Dimensions } from 'react-native';
import createStyles from './_styles/styles';
import ButtonComponent from './_components/ButtonComponent';
import { resetOperation, firstChar, resultOperation, blockDoubleOperation, blockDoubleChar, expOperation } from './_functions/funtions';
import { createButtonsData } from './_buttonData/buttonsData';

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
  const buttonsData = createButtonsData(mathExpression, setMath, setPoint,setNumberActive, isNumberActive, pointUse);

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