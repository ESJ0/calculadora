export type Operacion = '+' | '-' | '*' | '/' | '%' | null

export interface EstadoCalculadora {
  display: string
  operacion: Operacion
  valorAnterior: string
  esperandoNuevoNumero: boolean
}