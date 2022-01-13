import React from 'react'
import { View, Text } from 'react-native'
import Button from '../components/Button';
import useCalculator from '../hooks/useCalculator';
import { styles } from '../theme/app';

const CalcScreen = () => {
  const {
    number,
    prevNumber,
    clear,
    toggleNegative,
    onDelete,
    opeDiv,
    createNumber,
    opeMul,
    opeRes,
    opeSum,
    calc
  } = useCalculator()

  return (
    <View style={styles.container}>
      {
        prevNumber !== '0' && (
          <Text style={styles.prevResult}>{prevNumber}</Text>
        )
      }
      <Text
        style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number}
      </Text>

      <View style={styles.row}>

        <Button value='C' color="#9b9b9b" action={clear} />
        <Button value='+/-' color="#9b9b9b" action={toggleNegative} />
        <Button value='del' color="#9b9b9b" action={onDelete} />
        <Button value='/' color="#ff9427" action={opeDiv} />

      </View>

      <View style={styles.row}>

        <Button value='7' action={createNumber} />
        <Button value='8' action={createNumber} />
        <Button value='9' action={createNumber} />
        <Button value='x' color="#ff9427" action={opeMul} />

      </View>

      <View style={styles.row}>

        <Button value='4' action={createNumber} />
        <Button value='5' action={createNumber} />
        <Button value='6' action={createNumber} />
        <Button value='-' color="#ff9427" action={opeRes} />

      </View>

      <View style={styles.row}>

        <Button value='1' action={createNumber} />
        <Button value='2' action={createNumber} />
        <Button value='3' action={createNumber} />
        <Button value='+' color="#ff9427" action={opeSum} />

      </View>

      <View style={styles.row}>

        <Button value='0' action={createNumber} isBig />
        <Button value='.' action={createNumber} />
        <Button value='=' color="#ff9427" action={calc} />

      </View>
    </View>
  )
}

export default CalcScreen
