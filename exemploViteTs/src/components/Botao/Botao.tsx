
interface Props {
  texto: string
  onClick: () => void
}

const Botao = ({ texto, onClick }: Props) => {

  return (
    <button
      style={{
        width: '100%', maxWidth: '150px',
        backgroundColor: 'blue', color: 'white',
        height: '70px', borderRadius: '5px'
      }}
      onClick={onClick}
    >{texto}</button>
  )
}

export default Botao
