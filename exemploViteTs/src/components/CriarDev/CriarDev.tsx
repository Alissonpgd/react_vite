import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { DevType, ResponseApiType } from '../../apis/apiTypes';
import { useForm } from 'react-hook-form';
import { requestComPost } from '../../apis/exemploAxios';
import { useNavigate, Link } from 'react-router-dom';

const CriarDev: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<DevType>();
    const navigate = useNavigate();

    const onSubmit = ({ nome, email, tecnologias, nivel, salario }: DevType) => {
        requestComPost({ nome, email, tecnologias, nivel, salario })
            .then((data: ResponseApiType) => {
                reset();
                window.alert("Dev Cadastrado com Sucesso!");
                navigate("/listar");
            })
            .catch((err) => {
                window.alert("Erro ao cadastrar Dev: " + err.message);
            });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>

                <Typography variant="h4" className="text-center text-gray-800 mb-4">Cadastrar Desenvolvedor</Typography>

                <TextField margin="normal" label="Nome" {...register("nome")} fullWidth />
                <TextField margin="normal" label="Email" {...register("email")} fullWidth />
                <TextField margin="normal" label="Tecnologias" {...register("tecnologias")} fullWidth />
                <TextField margin="normal" label="Nível" {...register("nivel")} fullWidth />
                <TextField margin="normal" label="Salário" type="number" {...register("salario")} fullWidth />

                <Button size="medium" type="submit" variant="contained" color="primary" fullWidth className="mt-4">
                    Cadastrar
                </Button>

                <Link to="/listar">
                    <Button size="medium" variant="contained" fullWidth className="mt-2 bg-white text-blue-600 border border-blue-600" style={ {color: '#1565c0', backgroundColor:'white', marginTop:'10px'}}>
                        VOLTAR
                    </Button>
                </Link>
            </form>
        </div>
    );
};

export default CriarDev;
