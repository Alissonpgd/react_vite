import axios from 'axios';
import { DevType } from './apiTypes'

export const requestComAxios = async () => {
    try {
        const response = await axios.get('https://api.adviceslip.com/advice', { });
        console.log('Dados com axios:', response.data);
    } catch (error) {
        console.error('Erro ao buscar dados com axios:', error);
    }
};

export const requestComPost = async ({ nome, email, tecnologias, nivel, salario }: DevType) => {
    try {
        const response = await axios.post('http://localhost:3000/dev',
        { nome, email, tecnologias, nivel, salario },
        { headers: {'Content-Type': 'application/json'},}
        );
        return response.data
    } catch (error) {
        console.error('Erro ao buscar dados com axios:', error);
    }
};

export const requestComGet = async (email: string) => {
    try {
        const response = await axios.get(`http://localhost:3000/email/dev/${email}`, { headers: {} });
        return response.data
    } catch (error) {
        console.error('Erro ao buscar dados com axios:', error);
    }
};

export const listarTodos = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/dev/all`);
      return response.data.devs;
    } catch (error) {
      console.error("Erro ao listar desenvolvedores:", error);
    }
  };

  export const deletarDev = async (id: number) => {
    try {
      const response = await axios.delete(`http://localhost:3000/dev/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar desenvolvedor:", error);
    }
  };

  export const buscarDevById = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:3000/dev/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao encontrar desenvolvedor:", error);
    }
  }
  
  export const editarDev = async (id: number, dados: any) => {
    try {
      const response = await axios.put(`http://localhost:3000/dev/${id}`, dados);
      return response.data;
    } catch (error) {
      console.error("Erro ao editar desenvolvedor:", error);
    }
};

