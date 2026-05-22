import { useState } from 'react'
import type { Operacion } from '../types'
import type { EstadoCalculadora } from '../types'

const LIMITE = 9
const MAX = 999999999

const estadoInicial: EstadoCalculadora = {
  display: '0',
  operacion: null,
  valorAnterior: '',
  esperandoNuevoNumero: false
}

const formatearResultado = (num: number): string => {
  if (num < 0) return 'ERROR'
  if (num > MAX) return 'ERROR'
  const str = String(num)
  return str.length > LIMITE ? str.slice(0, LIMITE) : str
}

const calcular = (a: number, b: number, op: Operacion): number => {
  if (op === '+') return a + b
  if (op === '-') return a - b
  if (op === '*') return a * b
  if (op === '/' && b !== 0) return parseFloat((a / b).toFixed(LIMITE - 1))
  if (op === '%') return a % b
  return b
}

export const useCalculadora = () => {
  const [estado, setEstado] = useState<EstadoCalculadora>(estadoInicial)

  const presionarNumero = (num: string) => {
    setEstado(prev => {
      if (prev.display === 'ERROR') return prev
      const base = prev.esperandoNuevoNumero ? '' : prev.display === '0' ? '' : prev.display
      const nuevo = base + num
      if (nuevo.replace('-', '').replace('.', '').length > LIMITE) return prev
      return { ...prev, display: nuevo || '0', esperandoNuevoNumero: false }
    })
  }

  const presionarPunto = () => {
    setEstado(prev => {
      if (prev.esperandoNuevoNumero) return { ...prev, display: '0.', esperandoNuevoNumero: false }
      if (prev.display.includes('.')) return prev
      if (prev.display.length >= LIMITE) return prev
      return { ...prev, display: prev.display + '.' }
    })
  }

  const presionarOperacion = (op: Operacion) => {
    setEstado(prev => {
      if (prev.display === 'ERROR') return prev
      if (prev.operacion && !prev.esperandoNuevoNumero) {
        const resultado = calcular(parseFloat(prev.valorAnterior), parseFloat(prev.display), prev.operacion)
        const display = formatearResultado(resultado)
        return { display, operacion: op, valorAnterior: display, esperandoNuevoNumero: true }
      }
      return { ...prev, operacion: op, valorAnterior: prev.display, esperandoNuevoNumero: true }
    })
  }

  const presionarIgual = () => {
    setEstado(prev => {
      if (!prev.operacion || prev.esperandoNuevoNumero) return prev
      const resultado = calcular(parseFloat(prev.valorAnterior), parseFloat(prev.display), prev.operacion)
      const display = formatearResultado(resultado)
      return { display, operacion: null, valorAnterior: '', esperandoNuevoNumero: true }
    })
  }

  const presionarSigno = () => {
    setEstado(prev => {
      if (prev.display === 'ERROR' || prev.display === '0') return prev
      if (prev.display.startsWith('-')) {
        return { ...prev, display: prev.display.slice(1) }
      }
      if (prev.display.length >= LIMITE) return prev
      return { ...prev, display: '-' + prev.display }
    })
  }

  const limpiar = () => setEstado(estadoInicial)

  return { display: estado.display, presionarNumero, presionarPunto, presionarOperacion, presionarIgual, presionarSigno, limpiar }
}