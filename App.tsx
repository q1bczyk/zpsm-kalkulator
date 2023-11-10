import React, { useState, useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import _ from 'lodash';
import { Dimensions } from 'react-native';
import { atan2, chain, derivative, e, evaluate, expression, log, pi, pow, round, sqrt, string } from 'mathjs'
import createStyles from './_styles/styles';
import ButtonComponent from './_components/ButtonComponent';
import { buttonsData } from './_buttonData/buttonData';


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
  
  const zeroFunction = (string, char) => 
  {
    if(string.length === 1 && string[0] === '0')
      return char + '';
    else if(isNumberActive !== false)
        return resultOperation(string + char);
    else 
      return string + char + '';
  }

  const doubleOperation = (string, char) => 
  {     
      if(string[string.length - 1] < '0' || string[string.length - 1] > '9')
        return string + '';
      else
      {
          setPoint(false);
          return string + ' ' + char + ' ';
      } 
        
  }

  const pointOperation = (string, char) => 
  {
      if((string[string.length - 1] < '0' || string[string.length - 1] > '9') || pointUse === true)
        return string + '';
      else
      {
        setPoint(true);
        return string + char + '';
      } 
        
  }

  const resetOperation = () => 
  {
      setPoint(false);
      setNumberActive(false);
      return '0';
  }

  const resultOperation = (string) => 
  {
    let modifiedString = string.replaceAll(',', '.').replaceAll('÷', '/').replaceAll('×', '*')
    const result = evaluate(modifiedString);
    if(!isNaN(result) && typeof result === 'number' && result % 1 !== 0)
      setPoint(true);
    let resultToString = result + '';
    setNumberActive(false);
    return resultToString.replaceAll('.', ',');
  }

  const exp = (value, string) =>
  {
    if(string[string.length - 1] < '0' || string[string.length - 1] > '9')
        return string + '';
    const convertString = string + '^' + value;
    const result = resultOperation(convertString);
    return result;
  }

  const styles = createStyles(isLandscape);

  return (
    <View style={styles.container}> 
      <View style={styles.resultBox}>
        <Text style={styles.text2}>{mathExpression}</Text>
      </View>
      <View style={styles.row}>
        {buttonsData.map((button, index) => (
          index < 11 ? 
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
      {isLandscape ? 
          <>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>2ⁿᵈ</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(exp(2, mathExpression))}>
                <Text style={styles.text}>x²</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(exp(3, mathExpression))}>
                <Text style={styles.text}>x³</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => {setMath(mathExpression + '^'), setNumberActive(true)}}>
                <Text style={styles.text}>xⁿ</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => {setMath(zeroFunction(mathExpression, 'e^')); setNumberActive(true)}}>
                <Text style={styles.text}>eⁿ</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => {setMath(zeroFunction(mathExpression, '10^')); setNumberActive(true)}}>
                <Text style={styles.text}>10ⁿ</Text>
              </TouchableOpacity>
            </View>
          </>
        : null}
          <View style={styles.singleBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(zeroFunction(mathExpression, 7))}>
              <Text style={styles.text}>7</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(zeroFunction(mathExpression, 8))}>
              <Text style={styles.text}>8</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(zeroFunction(mathExpression, 9))}>
              <Text style={styles.text}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.yellowBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(doubleOperation(mathExpression, '×'))}>
              <Text style={styles.text}>×</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.row}>
      {isLandscape ? 
          <>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>¹/ₓ</Text>
              </TouchableOpacity>
            </View>



            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>²√x</Text>
              </TouchableOpacity>
            </View>



            
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>³√x</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>ⁿ√x</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>ln</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>log₁₀</Text>
              </TouchableOpacity>
            </View>
          </>
        : null}
      <View style={styles.singleBox}>
          <TouchableOpacity style={styles.button} onPress={() => setMath(zeroFunction(mathExpression, 4))}>
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(zeroFunction(mathExpression, 5))}>
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(zeroFunction(mathExpression, 6))}>
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.yellowBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(doubleOperation(mathExpression, '-'))}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.row}>
      {isLandscape ? 
          <>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resultOperation(mathExpression + '!'))}>
                <Text style={styles.text}>x!</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>sin</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>cos</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>tan</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>e</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>EE</Text>
              </TouchableOpacity>
            </View>
          </>
        : null}
      <View style={styles.singleBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(zeroFunction(mathExpression, 1))}>
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(zeroFunction(mathExpression, 2))}>
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(zeroFunction(mathExpression, 3))}>
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.yellowBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(doubleOperation(mathExpression, '+'))}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.row}>
      {isLandscape ? 
          <>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>Rad</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>sinh</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>cosh</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>tanh</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>π</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.darkBox}>
              <TouchableOpacity style={styles.button} onPress={() => setMath(resetOperation())}>
                <Text style={styles.text}>Rand</Text>
              </TouchableOpacity>
            </View>
          </>
        : null}
          <View style={styles.doubleBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(zeroFunction(mathExpression, 0))}>
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(pointOperation(mathExpression, ','))}>
              <Text style={styles.text}>,</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.yellowBox}>
            <TouchableOpacity style={styles.button} onPress={() => setMath(resultOperation(mathExpression))}>
              <Text style={styles.text}>=</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}

export default App;
