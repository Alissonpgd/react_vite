export const requestComFetch = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        const data = await response.json();
        console.log('Dados com fetch:', data);
    } catch (error) {
        console.error('Erro ao buscar dados com fetch:', error);
    }
};
