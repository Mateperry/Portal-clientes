import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { USERS } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const user = USERS.find(
      u => u.username === username && u.password === password
    );
    if (!user) {
      setError("Usuario o contraseña incorrectos");
      return;
    }
    localStorage.setItem("role", user.role);
    localStorage.setItem("username", user.username);
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        bgcolor: "#f5f7fa",
      }}
    >
      {/* BRANDING */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          minHeight: { xs: "28vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          background: {
            xs: "#ffffff",
            md: "linear-gradient(135deg, #ffffff 0%, #f1f4f9 100%)",
          },
          borderRight: { md: "1px solid #e5e7eb" },
        }}
      >
        <Box
          component="img"
          src="/logo.svg"
          alt="Logo SumiApp"
          sx={{
            width: "100%",
            maxWidth: { xs: 240, sm: 300, md: 520 },
          }}
        />
      </Box>

      {/* FORMULARIO */}
      <Box
        sx={{
          width: { xs: "100%", md: "55%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          py: { xs: 4, md: 0 },
          background: "linear-gradient(180deg, #142c4c 0%, #0f223a 100%)",
        }}
      >
        <Box sx={{ width: 420, maxWidth: "100%" }}>
          <Card
            elevation={6}
            sx={{
              borderRadius: 3,
              px: { xs: 1, sm: 2 },
              py: 1,
            }}
          >
            <CardContent>
              <Stack spacing={3}>
                {/* HEADER */}
                <Box textAlign="center">
                  <Typography variant="h5" fontWeight={700}>
                    Bienvenido
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    Inicia sesión para continuar
                  </Typography>
                </Box>

                {/* FORM */}
                <form onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <TextField
                      label="Usuario"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      fullWidth
                      autoFocus
                    />
                    <TextField
                      label="Contraseña"
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      fullWidth
                    />
                    {error && (
                      <Typography color="error" variant="body2">{error}</Typography>
                    )}
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        mt: 1,
                        py: 1.2,
                        fontWeight: 600,
                        borderRadius: 2,
                        bgcolor: "#142c4c",
                        "&:hover": {
                          bgcolor: "#0f223a",
                        },
                      }}
                    >
                      Ingresar
                    </Button>
                  </Stack>
                </form>

                {/* FOOTER */}
                <Box textAlign="center">
                  <Typography variant="caption" sx={{ color: "var(--sumimas-texto-secundario)" }}>
                    © 2026 <strong>SumiApp</strong> – Sumimas S.A.S.
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "var(--sumimas-texto-secundario)" }}
                    display="block"
                  >
                    Todos los derechos reservados
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "var(--sumimas-texto-secundario)" }}
                  >
                    Plataforma de gestión y trazabilidad
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
