import { useRef, useState } from "react"

enum Operations {
  sum, res, mul, div
}

const useCalculator = () => {
  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')

  const operationLast = useRef<Operations>()

  const clear = () => {
    setNumber('0')
    setPrevNumber('0')
  }

  const createNumber = (value: string) => {
    //* No aceptar doble punto
    if (number.includes('.') && value === '.') return

    if (number.startsWith('0') || number.startsWith('-0')) {

      //* Punto decimal
      if (value === '.') {
        setNumber(number + value)

        //* Evaluar si es otro cero, y no hay punto
      } else if (value === '0' && number.includes('.')) {
        setNumber(number + value)

        //* Evaluar si es diferente de cero y no tiene un punto
      } else if (value !== '0' && !number.includes('.')) {
        setNumber(value)

        //* Evitar 0000.0
      } else if (value === '0' && !number.includes('.')) {
        setNumber(number)

      } else {
        setNumber(number + value)
      }

    } else {
      setNumber(number + value)
    }
  }

  const toggleNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''))
    } else {
      setNumber('-' + number)
    }
  }

  const onDelete = () => {

    let negative = ''
    let numberTemp = number
    if (number.includes('-')) {
      negative = '-'
      numberTemp = number.substring(1)
    }

    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1))
    } else {
      setNumber('0')
    }

  }

  const changePrevNumber = () => {
    if (number.includes('.')) {
      setPrevNumber(number.slice(0, -1))
    } else {
      setPrevNumber(number)
    }

    setNumber('0')
  }

  const opeDiv = () => {
    changePrevNumber()
    operationLast.current = Operations.div
  }

  const opeMul = () => {
    changePrevNumber()
    operationLast.current = Operations.mul
  }

  const opeRes = () => {
    changePrevNumber()
    operationLast.current = Operations.res
  }

  const opeSum = () => {
    changePrevNumber()
    operationLast.current = Operations.sum
  }

  const calc = () => {
    const n1 = Number(number)
    const n2 = Number(prevNumber)

    switch (operationLast.current) {
      case Operations.sum:
        setNumber(`${n1 + n2}`)
        break
      case Operations.res:
        setNumber(`${n2 - n1}`)
        break
      case Operations.mul:
        setNumber(`${n1 * n2}`)
        break
      case Operations.div:
        setNumber(`${n2 / n1}`)
    }

    setPrevNumber('0')
  }

  return {
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
  }
}

export default useCalculator
