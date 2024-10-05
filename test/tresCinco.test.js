/* Escribir una funcion que al paserle un numero
 - Muestre "Tres" si es multiplo de 3.
 - Muestre "Cinco si es multiplo de 5"
 - Mustre "TresCinco" si es multiplo de 3 y 5
 - Muestre el numero si no es multiplo de los anteriores
*/

import { describe, expect, test } from 'vitest'

const multiTresCinco = (number) => {
  if (typeof number !== 'number') throw new Error('El parametro proporcionado no es valido')
  if (Number.isNaN(number)) throw new Error('El parametro proporcionado no es valido debe ser un numero y no infinito. esta recibiendo: ' + number)
  if (number % 3 === 0 && number % 5 === 0) return 'TresCinco'
  if (number % 3 === 0) return 'Tres'
  if (number % 5 === 0) return 'Cinco'
  return number
}

describe('multiTresCinco', () => {
  test('Deberia fallar si no proporciona un numero para el parametro', () => {
    expect(() => multiTresCinco()).toThrow()
  })

  test('Deberia fallar si no proporciona un numero para el parametro y mostrar mensaje de error', () => {
    expect(() => multiTresCinco()).toThrow('El parametro proporcionado no es valido')
  })

  test('Deberia fallar si no proporciona un numero para el parametro y mostrar mensaje de error y el tipo de variable', () => {
    expect(() => multiTresCinco(NaN)).toThrow('El parametro proporcionado no es valido debe ser un numero y no infinito. esta recibiendo: ' + NaN)
  })

  test('Deberia devolver "Uno" si el numero proporcionado es 1', () => {
    expect(multiTresCinco(1)).toBe(1)
  })

  test('Deberia devolver "Tres" si el numero proporcinado es multiplo de 3', () => {
    expect(multiTresCinco(3)).toBe('Tres')
    expect(multiTresCinco(6)).toBe('Tres')
    expect(multiTresCinco(9)).toBe('Tres')
    expect(multiTresCinco(12)).toBe('Tres')
  })

  test('Deberia devolver "Cinco" si el numero proporcinado es multiplo de 5', () => {
    expect(multiTresCinco(5)).toBe('Cinco')
    expect(multiTresCinco(10)).toBe('Cinco')
    expect(multiTresCinco(20)).toBe('Cinco')
  })

  test('Deberia devolver "Cinco" si el numero proporcinado es multiplo de 5', () => {
    expect(multiTresCinco(15)).toBe('TresCinco')
    expect(multiTresCinco(30)).toBe('TresCinco')
    expect(multiTresCinco(45)).toBe('TresCinco')
  })
})
