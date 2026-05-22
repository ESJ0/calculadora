import type { Meta, StoryObj } from '@storybook/react'
import { Boton } from '../components/Boton'
import '../index.css'

const meta: Meta<typeof Boton> = {
  title: 'Calculadora/Boton',
  component: Boton,
  args: { onClick: () => {} }
}
export default meta
type Story = StoryObj<typeof Boton>

export const Numero: Story = { args: { etiqueta: '7', variante: 'numero' } }
export const Operacion: Story = { args: { etiqueta: '+', variante: 'operacion' } }
export const Igual: Story = { args: { etiqueta: '=', variante: 'igual' } }
export const Limpiar: Story = { args: { etiqueta: 'C', variante: 'limpiar' } }