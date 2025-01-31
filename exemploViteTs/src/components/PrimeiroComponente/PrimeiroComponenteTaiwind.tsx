import React from 'react';

const PrimeiroComponenteTaiwind: React.FC = () => {
    const handleClick = (): void => {
        alert('Olá Mundo!');
    };

    return (
        <div>
            <h1>Componente em TypeScript</h1>
          <button className='px-4 py-2
             bg-blue-500 text-white font-semibold rounded-lg shadow-md
             hover:bg-blue-600 focus:outline-none focus:ring-2
             focus:ring-blue-400 focus:ring-opacity-75'
             onClick={handleClick}>
                Clique aqui
            </button>
        </div>
    );
};

export default PrimeiroComponenteTaiwind;
