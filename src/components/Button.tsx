import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  value: string
  color?: string
  isBig?: boolean
  action: (value: string) => void
}

const Button = ({ value, color = "#2d2d2d", isBig, action }: Props) => {
  return (
    <TouchableOpacity onPress={() => action(value)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: (isBig) ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textButton,
            color: (color === '#9b9b9b') ? 'black' : 'white',
          }}
        >
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  textButton: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'black',
    fontWeight: '300'
  }
})
