interface Props { valor: string }

export const Display = ({ valor }: Props) => (
  <div className="display" data-testid="display">
    <span className={valor === 'ERROR' ? 'error' : ''}>{valor}</span>
  </div>
)