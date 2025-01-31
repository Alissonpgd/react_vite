import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { RequestEmailType, ResponseApiType } from '../../apis/apiTypes';
import { requestComGet } from '../../apis/exemploAxios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BuscarEmail: React.FC = () => {
    const [message, setMessage] = useState<string>('')
    const navegate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<RequestEmailType>()
    const onSubmit = (request: RequestEmailType) => {
        requestComGet(request.email).then((data: ResponseApiType) => {
            reset()

            setMessage(data.message)
            if (data.dev) navegate('/visualizacao', { state: data, })
        }).catch((err) => {
            setMessage(err.message)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant='h3'>Buscar dev por email</Typography>
                <TextField margin={'normal'} label="email" {...register('email')} fullWidth />
                <Button size="medium" type="submit" variant='contained' fullWidth sx={{ marginBottom: 1 }}>Buscar</Button>
                <Link to="/listar">
                    <Button size="medium" type="submit" variant="contained" fullWidth>Buscar Todos</Button>
                </Link>
                <Typography>{message}</Typography>
            </form>
        </div>
    );
};

export default BuscarEmail;
