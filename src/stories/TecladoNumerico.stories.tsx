import type { Meta, StoryObj } from '@storybook/react'
import { TecladoNumerico } from '../components/TecladoNumerico'
import '../index.css'

const meta: Meta<typeof TecladoNumerico> = {
  title: 'Calculadora/TecladoNumerico',
  component: TecladoNumerico,
  args: {
    onNumero: () => {},
    onOperacion: () => {},
    onIgual: () => {},
    onLimpiar: () => {},
    onPunto: () => {},
    onSigno: () => {}
  }
}
export default meta
type Story = StoryObj<typeof TecladoNumerico>

export const Default: Story = {}