import React from 'react';

const App = () => {
  return (
      <div
          style={{
            
              marginTop: '60px', // Espaçamento para não colar no topo ou no rodapé
              background: 'linear-gradient(135deg, #2b66b9, rgb(41, 41, 42))', // Gradiente de fundo
              minHeight: 'calc(100vh - 100px)', // Altura reduzida com margem
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px', // Suaviza as bordas da div principal
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Sombra para destaque
          }}
      >
          <h1
              style={{
                  marginLeft: '100px',
                  marginRight: '100px',
                  color: '#ffff',
                  fontFamily: 'Arial, sans-serif',
                  textShadow: '2px 2px 4px rgb(0, 0, 0)',
              }}
          >
              Bem Vindos ao Primeiro
          </h1>
          <h1
              style={{
                  marginLeft: '15px',
                  marginRight: '15px',
                  color: '#ffff',
                  fontFamily: 'Arial, sans-serif',
                  textShadow: '2px 2px 4px rgb(0, 0, 0)',
              }}
          >
              App React criado por
          </h1>
          <div
              style={{
                  marginTop: '30px',
                  fontFamily: 'Arial, sans-serif',
                  fontSize: '45px',
                  background: 'linear-gradient(to right,rgb(27, 109, 234),rgb(202, 202, 202))', // Gradiente de azul escuro para cinza
                  WebkitBackgroundClip: 'text', // Para que o gradiente preencha apenas o texto
                  WebkitTextFillColor: 'transparent', // Faz o gradiente visível
                  animation: 'shine 2s infinite', // Adiciona o efeito de brilho
                  textShadow: '0 0 10px rgba(4, 4, 4, 0.5), 0 0 20px rgba(6, 6, 6, 0.3)',
              }}
          >
              Alisson Rodrigo
          </div>
          {/* Adiciona o estilo para o efeito de brilho */}
          <style>
              {`
                  @keyframes shine {
                      0% {
                          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
                      }
                      50% {
                          text-shadow: 0 0 20px rgba(255, 255, 255, 0.7), 0 0 40px rgba(255, 255, 255, 0.5);
                      }
                      100% {
                          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
                      }
                  }
              `}
          </style>
      </div>
  );
};

export default App;
