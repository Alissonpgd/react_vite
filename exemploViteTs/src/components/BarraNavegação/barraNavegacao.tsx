import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material"
import { Link } from "react-router-dom"
import { NavegacaoItens } from "./types"

const spanStyles = {
  marginLeft: '10px',
  marginRight: '10px',
  fontSize: '20px'
}

interface Props {
  arrayItens: NavegacaoItens[]
}

const BarraNavegacao = ({ arrayItens }: Props) => {

  return (
    <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => true}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
            {arrayItens.map((item: NavegacaoItens) => (
            <span key={item.nome} style={spanStyles}>
              <Link key={item.nome} to={item.url}>
                {item.nome}
              </Link>
            </span>

            ))}
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default BarraNavegacao
