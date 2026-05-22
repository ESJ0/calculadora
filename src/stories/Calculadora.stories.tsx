import type { Meta, StoryObj } from '@storybook/react'
import { Calculadora } from '../components/Calculadora'
import '../index.css'

const meta: Meta<typeof Calculadora> = {
  title: 'Calculadora/Calculadora',
  component: Calculadora
}
export default meta
type Story = StoryObj<typeof Calculadora>

export const Default: Story = {}