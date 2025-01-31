import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { buscarDevById, editarDev, deletarDev } from "../../apis/exemploAxios";
import { TextField, Button, CircularProgress, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const EditarDev = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const devId = Number(id);

    const [dev, setDev] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        console.log("ID recebido:", devId);
        if (isNaN(devId)) {
            setMessage("Erro: ID inválido.");
            setLoading(false);
            return;
        }
    
        const carregarDev = async () => {
            try {
                console.log("Buscando desenvolvedor...");
                const response = await buscarDevById(devId);
                console.log("Desenvolvedor encontrado:", response);
    
                if (response?.dev) {
                    setDev(response.dev); 
                } else {
                    setMessage("Erro: Desenvolvedor não encontrado.");
                }
            } catch (error) {
                console.error("Erro ao buscar desenvolvedor:", error);
                setMessage("Erro ao carregar desenvolvedor.");
            } finally {
                setLoading(false);
            }
        };
    
        carregarDev();
    }, [devId]);
    

    const handleEdit = async () => {
        setLoading(true);
        console.log(`Enviando PUT para http://localhost:3000/dev/${devId}`);
        console.log("Dados Enviados", dev)
        try {
            await editarDev(devId, dev);
            window.alert("Desenvolvedor atualizado com sucesso!");
            setTimeout(() => navigate("/listar"), 0.001)
        } catch (error) {
            setMessage("Erro ao editar desenvolvedor.");
            console.error("Erro ao editar desenvolvedor:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este desenvolvedor?");
        if (!confirmDelete) return;
        setLoading(true);
        try {
            console.log("Deletando desenvolvedor...");
            await deletarDev(devId);
            setMessage("Desenvolvedor deletado com sucesso!");
            setTimeout(() => navigate("/"), 2000);
        } catch (error) {
            console.error("Erro ao deletar desenvolvedor:", error);
            setMessage("Erro ao deletar desenvolvedor.");
        } finally {
            setLoading(false);
        }
    };
    if (isNaN(devId)) {
        return <Typography color="error">Erro: ID inválido.</Typography>;
    }
    if (loading) return <CircularProgress />;

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
            <Typography variant="h4">Editar Desenvolvedor</Typography>

            {message && <Typography color="error">{message}</Typography>}

            <TextField
                label="Nome"
                value={dev?.nome || ""}
                onChange={(e) => setDev({ ...dev, nome: e.target.value })}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                value={dev?.email || ""}
                onChange={(e) => setDev({ ...dev, email: e.target.value })}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Tecnologias"
                value={dev?.tecnologias || ""}
                onChange={(e) => setDev({ ...dev, tecnologias: e.target.value })}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Nível"
                value={dev?.nivel || ""}
                onChange={(e) => setDev({ ...dev, nivel: e.target.value })}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Salário"
                value={dev?.salario || ""}
                onChange={(e) => setDev({ ...dev, salario: e.target.value })}
                fullWidth
                margin="normal"
            />

            <Button variant="contained" color="primary" onClick={handleEdit} fullWidth style={{ marginTop: 8 }}>
                Salvar Alterações
            </Button>

            <Link to="/listar">
                    <Button size="medium" variant="contained" fullWidth className="mt-2 bg-white text-blue-600 border border-blue-600" style={ {color: '#1565c0', backgroundColor:'white', marginTop:'10px'}}>
                        VOLTAR
                    </Button>
            </Link>
        </div>
    );
};

export default EditarDev;
