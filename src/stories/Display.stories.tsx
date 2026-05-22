import type { Meta, StoryObj } from '@storybook/react'
import { Display } from '../components/Display'
import '../index.css'

const meta: Meta<typeof Display> = {
  title: 'Calculadora/Display',
  component: Display
}
export default meta
type Story = StoryObj<typeof Display>

export const Inicial: Story = { args: { valor: '0' } }
export const NumeroLargo: Story = { args: { valor: '123456789' } }
export const ConDecimal: Story = { args: { valor: '3.1415926' } }
export const Negativo: Story = { args: { valor: '-42' } }
export const Error: Story = { args: { valor: 'ERROR' } }