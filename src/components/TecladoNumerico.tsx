import { Boton } from './Boton'
import type { Operacion } from '../types'

interface Props {
  onNumero: (n: string) => void
  onOperacion: (op: Operacion) => void
  onIgual: () => void
  onLimpiar: () => void
  onPunto: () => void
  onSigno: () => void
}

const BOTONES_OP: { etiqueta: string; op: Operacion }[] = [
  { etiqueta: '÷', op: '/' },
  { etiqueta: '×', op: '*' },
  { etiqueta: '−', op: '-' },
  { etiqueta: '+', op: '+' },
  { etiqueta: '%', op: '%' }
]

export const TecladoNumerico = ({ onNumero, onOperacion, onIgual, onLimpiar, onPunto, onSigno }: Props) => (
  <div className="teclado">
    <Boton etiqueta="C" onClick={onLimpiar} variante="limpiar" testId="btn-clear" />
    <Boton etiqueta="+/-" onClick={onSigno} variante="operacion" testId="btn-signo" />
    <Boton etiqueta="%" onClick={() => onOperacion('%')} variante="operacion" testId="btn-modulo" />
    <Boton etiqueta="÷" onClick={() => onOperacion('/')} variante="operacion" testId="btn-division" />
    {['7','8','9'].map(n => <Boton key={n} etiqueta={n} onClick={() => onNumero(n)} />)}
    <Boton etiqueta="×" onClick={() => onOperacion('*')} variante="operacion" testId="btn-mult" />
    {['4','5','6'].map(n => <Boton key={n} etiqueta={n} onClick={() => onNumero(n)} />)}
    <Boton etiqueta="−" onClick={() => onOperacion('-')} variante="operacion" testId="btn-resta" />
    {['1','2','3'].map(n => <Boton key={n} etiqueta={n} onClick={() => onNumero(n)} />)}
    <Boton etiqueta="+" onClick={() => onOperacion('+')} variante="operacion" testId="btn-suma" />
    <Boton etiqueta="0" onClick={() => onNumero('0')} />
    <Boton etiqueta="." onClick={onPunto} testId="btn-punto" />
    <Boton etiqueta="=" onClick={onIgual} variante="igual" testId="btn-igual" />
  </div>
)