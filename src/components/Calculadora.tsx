import { Display } from './Display'
import { TecladoNumerico } from './TecladoNumerico'
import { useCalculadora } from '../hooks/useCalculadora'

export const Calculadora = () => {
  const { display, presionarNumero, presionarPunto, presionarOperacion, presionarIgual, presionarSigno, limpiar } =
    useCalculadora()

  return (
    <div className="calculadora">
      <div className="encabezado">
        <span className="modelo">MODELO-UVG</span>
      </div>
      <Display valor={display} />
      <TecladoNumerico
        onNumero={presionarNumero}
        onOperacion={presionarOperacion}
        onIgual={presionarIgual}
        onLimpiar={limpiar}
        onPunto={presionarPunto}
        onSigno={presionarSigno}
      />
    </div>
  )
}