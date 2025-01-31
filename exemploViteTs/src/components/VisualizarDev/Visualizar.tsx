import React, { useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { DevType, ResponseApiType } from '../../apis/apiTypes';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Visualizar: React.FC = () => {
    const location = useLocation()
    const navegate = useNavigate()
    const {
        register,
        setValue
      } = useForm<DevType>()

    const initFields = () => {
      const data: ResponseApiType | undefined = location.state
      const dev: DevType | undefined = data?.dev
      if (!dev) {
        navegate('/busca/email')
      } else {
        setValue('nome', dev.nome)
        setValue('email', dev.email)
        setValue('tecnologias', dev.tecnologias)
        setValue('nivel', dev.nivel)
        setValue('salario', dev.salario)
      }
    }
    useEffect(() => {
      initFields()
    },)

    return (

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '350px' }}>
            
            <Typography variant='h3' style={{ 
                  marginTop: 50}}>Dados do Dev encontrado</Typography>
            <TextField margin={'normal'} label="nome" {...register("nome")} fullWidth disabled />
            <TextField margin={'normal'} label="email" {...register("email")} fullWidth disabled />
            <TextField margin={'normal'} label="tecnologias" {...register("tecnologias")} fullWidth disabled />
            <TextField margin={'normal'} label="nivel" {...register("nivel")} fullWidth disabled />
            <TextField margin={'normal'} label="salario" {...register("salario")} fullWidth disabled />

            <Link to="/listar">
                <Button size="medium" type="submit" variant="contained" fullWidth>Buscar Todos</Button>
            </Link>
            <Link to="/busca/email">
                <Button size="medium" type="submit" variant="contained" fullWidth style={{ 
                  marginTop: 8, backgroundColor: 'white', color: '#1565c0', fontStyle: 'bold' }}>VOLTAR</Button>
            </Link>
        </div>

    );
};

export default Visualizar;
