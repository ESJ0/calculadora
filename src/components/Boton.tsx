interface Props {
  etiqueta: string
  onClick: () => void
  variante?: 'numero' | 'operacion' | 'igual' | 'limpiar'
  testId?: string
}

export const Boton = ({ etiqueta, onClick, variante = 'numero', testId }: Props) => (
  <button
    className={`boton boton-${variante}`}
    onClick={onClick}
    data-testid={testId ?? `btn-${etiqueta}`}
  >
    {etiqueta}
  </button>
)