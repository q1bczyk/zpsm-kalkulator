import _ from 'lodash';
import { atan2, chain, derivative, e, evaluate, expression, log, pi, pow, round, sqrt, string } from 'mathjs'

export const resetOperation = (setPoint, setNumberActive) => 
  {
      setPoint(false)
      setNumberActive(false)
      return '0';
  }

export const firstChar = (string, isNumberActive, setNumberActive, char) => 
{
  if(string.length === 1 && string[0] === '0')
    return char + '';
  else if(isNumberActive !== false)
      return resultOperation(string + char, () => {return}, setNumberActive);
  else 
    return string + char + '';
}

export const resultOperation = (string, setPoint, setNumberActive) => 
{
  let modifiedString = string
    .replaceAll(',', '.')
    .replaceAll('÷', '/')
    .replaceAll('x', '*')
  const result = evaluate(modifiedString);
  if(!isNaN(result) && typeof result === 'number' && result % 1 !== 0)
    setPoint(true);
  let resultToString = result + '';
  setNumberActive(false);
  return resultToString.replaceAll('.', ',');
}

export const blockDoubleOperation = (string, setPoint, char) => 
{     
    const size = string.length - 1;
    if((string[size] < '0' || string[size] > '9') && string[size] !== '!')
      return string + '';
    else
    {
        setPoint(false);
        return string + ' ' + char + ' ';
    } 
      
}

export const blockDoubleChar = (string, setPoint, pointUse, char) => 
{
    const size = string.length - 1;
    if((string[size] < '0' || string[size] > '9') || pointUse === true)
        return string + '';
    else
    {
      setPoint(true);
      return string + char + '';
    } 
      
}

export const expOperation = (value, string, setNumberActive) =>
{
  if(string[string.length - 1] < '0' || string[string.length - 1] > '9')
      return string + '';
  const convertString = string + '^' + value;
  const result = resultOperation(convertString, null, setNumberActive);
  return result;
}

export const bracketSeparation = (string) => 
{
    const size = string.length;
    let expressionToReturn;
    string = string.replace(/\s/g, "");
    let index = 0;
    
    for(let i = size; i >= 0; i--)
    {
      if(string[i] < '0' || string[i] > '9')
      {
        index = i;
        break;
      }
    }
    
    if(index != 0)
    {
      expressionToReturn = {
        baseString : string.substring(0, index + 1),
        cutedString : string.substring(index + 1)
      }
    }

    else expressionToReturn = 
    {
        baseString : string,
        cutedString : null
    };

    return expressionToReturn;

}

export const othersFunctions = (type, string, setPoint, setNumberActive) =>
{
  let operationType;
  let stringToResult;
  
  operationType = chooseOperation(type);
  
  if(string == '0')
    return '0'
  
    const expression = bracketSeparation(string);
  
  if(expression.cutedString == null)
    stringToResult = operationType + '(' + expression.baseString + ')';
  else 
    stringToResult = expression.baseString + operationType + '(' + expression.cutedString + ')'  
   
   return resultOperation(stringToResult, setPoint, setNumberActive)
}

const chooseOperation = (option) =>
{
  switch(option)
  {
    case 1:
      return 'sqrt'
    case 2:
      return 'sin'
    case 3:
      return 'cos'
    case 4:
      return 'tan'
    case 5:
      return 'sinh'
    case 6:
      return 'cosh'
    case 7:
      return 'tanh'     
    
  }
}

export const setFraction = (string) => 
{
  if(string == '0')
    return '1/'
  
  if(string[string.length - 1] >= '0' && string[string.length - 1] <= '9')
    return string;

  else
    return string + '1/'
}

