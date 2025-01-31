import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { deletarDev } from "../../apis/exemploAxios";

const ListarTodos = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const carregarUsuarios = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/all/dev");
      console.log("Dados recebidos:", response.data);
      setUsuarios(response.data.devs);
    } catch (error) {
      console.error("Erro ao buscar usuários", error);
      setMessage("Erro ao carregar usuários.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Tem certeza que deseja excluir este desenvolvedor?");
    if (!confirmDelete) return;

    try {
      await deletarDev(id);
      setMessage("Desenvolvedor excluído com sucesso!");
      setUsuarios((prevUsuarios) => prevUsuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      setMessage("Erro ao excluir desenvolvedor.");
      console.error("Erro ao excluir desenvolvedor:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Lista de Desenvolvedores</h1>

      {message && <p className={`text-center text-lg ${message.includes("Erro") ? "text-red-500" : "text-green-500"}`}>{message}</p>}

      {loading ? (
        <p className="text-center text-lg text-gray-600">Carregando usuários...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-blue-600 text-white uppercase text-sm">
              <tr>
                <th className="py-3 px-4 border border-gray-300">ID</th>
                <th className="py-3 px-4 border border-gray-300">Nome</th>
                <th className="py-3 px-4 border border-gray-300">Email</th>
                <th className="py-3 px-4 border border-gray-300">Tecnologias</th>
                <th className="py-3 px-4 border border-gray-300">Nível</th>
                <th className="py-3 px-4 border border-gray-300">Ações</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {usuarios.map((usuario: any) => (
                <tr key={usuario.id} className="hover:bg-gray-100">
                  <td className="py-3 px-4 border border-gray-300">{usuario.id}</td>
                  <td className="py-3 px-4 border border-gray-300">{usuario.nome}</td>
                  <td className="py-3 px-4 border border-gray-300">{usuario.email}</td>
                  <td className="py-3 px-4 border border-gray-300">{usuario.tecnologias}</td>
                  <td className="py-3 px-4 border border-gray-300">{usuario.nivel}</td>
                  <td className="py-3 px-4 border border-gray-300 flex justify-center space-x-2">
                    <Link to={`/editar/${usuario.id}`}>
                      <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-700 transition">
                        Editar
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(usuario.id)}
                      className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-700 transition"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListarTodos;
