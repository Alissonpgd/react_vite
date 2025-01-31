const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Ocupa a altura total da tela
  width: '100vw',  // Ocupa a largura total da tela
  backgroundColor: '#f0f0f0', // Cor de fundo opcional
};
interface Props {
  children: React.ReactNode;
}

const CentralDiv = ({ children }: Props) => {

  return <div style={containerStyle}>{children}</div>;
}

export default CentralDiv
