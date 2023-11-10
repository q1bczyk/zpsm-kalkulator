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