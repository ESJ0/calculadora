import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useCalculadora } from '../hooks/useCalculadora'

describe('useCalculadora', () => {
  const getHook = () => renderHook(() => useCalculadora())

  it('inicia mostrando 0', () => {
    const { result } = getHook()
    expect(result.current.display).toBe('0')
  })

  it('muestra el número presionado', () => {
    const { result } = getHook()
    act(() => { result.current.presionarNumero('5') })
    expect(result.current.display).toBe('5')
  })

  it('concatena múltiples dígitos', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('1')
      result.current.presionarNumero('2')
      result.current.presionarNumero('3')
    })
    expect(result.current.display).toBe('123')
  })

  it('no acepta más de 9 dígitos', () => {
    const { result } = getHook()
    act(() => {
      '1234567890'.split('').forEach(n => result.current.presionarNumero(n))
    })
    expect(result.current.display.length).toBeLessThanOrEqual(9)
  })

  it('realiza suma correctamente', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('3')
      result.current.presionarOperacion('+')
      result.current.presionarNumero('4')
      result.current.presionarIgual()
    })
    expect(result.current.display).toBe('7')
  })

  it('realiza resta correctamente', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('9')
      result.current.presionarOperacion('-')
      result.current.presionarNumero('4')
      result.current.presionarIgual()
    })
    expect(result.current.display).toBe('5')
  })

  it('realiza multiplicación correctamente', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('6')
      result.current.presionarOperacion('*')
      result.current.presionarNumero('7')
      result.current.presionarIgual()
    })
    expect(result.current.display).toBe('42')
  })

  it('realiza división correctamente', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('1')
      result.current.presionarNumero('0')
      result.current.presionarOperacion('/')
      result.current.presionarNumero('2')
      result.current.presionarIgual()
    })
    expect(result.current.display).toBe('5')
  })

  it('muestra ERROR cuando el resultado es negativo', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('1')
      result.current.presionarOperacion('-')
      result.current.presionarNumero('5')
      result.current.presionarIgual()
    })
    expect(result.current.display).toBe('ERROR')
  })

  it('muestra ERROR cuando el resultado supera 999999999', () => {
    const { result } = getHook()
    act(() => {
      '999999999'.split('').forEach(n => result.current.presionarNumero(n))
      result.current.presionarOperacion('+')
      result.current.presionarNumero('1')
      result.current.presionarIgual()
    })
    expect(result.current.display).toBe('ERROR')
  })

  it('el botón limpiar regresa al estado inicial', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('9')
      result.current.limpiar()
    })
    expect(result.current.display).toBe('0')
  })

  it('+/- convierte número a negativo correctamente', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('5')
      result.current.presionarSigno()
    })
    expect(result.current.display).toBe('-5')
  })

  it('presionar operación encadenada calcula resultado intermedio', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('2')
      result.current.presionarOperacion('+')
      result.current.presionarNumero('3')
      result.current.presionarOperacion('+')
    })
    expect(result.current.display).toBe('5')
  })

  it('el punto decimal se agrega correctamente', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('3')
      result.current.presionarPunto()
      result.current.presionarNumero('1')
      result.current.presionarNumero('4')
    })
    expect(result.current.display).toBe('3.14')
  })

  it('no agrega dos puntos decimales', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('3')
      result.current.presionarPunto()
      result.current.presionarPunto()
    })
    expect(result.current.display.split('.').length).toBe(2)
  })

  it('22/7 trunca a 9 caracteres', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('2')
      result.current.presionarNumero('2')
      result.current.presionarOperacion('/')
      result.current.presionarNumero('7')
      result.current.presionarIgual()
    })
    expect(result.current.display.length).toBeLessThanOrEqual(9)
  })

  it('módulo funciona correctamente', () => {
    const { result } = getHook()
    act(() => {
      result.current.presionarNumero('1')
      result.current.presionarNumero('0')
      result.current.presionarOperacion('%')
      result.current.presionarNumero('3')
      result.current.presionarIgual()
    })
    expect(result.current.display).toBe('1')
  })
})