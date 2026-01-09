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
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { USERS } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
        bgcolor: { xs: "#ffffff", md: "#ffffff" },
      }}
    >
      {/* ================= BRANDING ================= */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          height: { xs: "25vh", md: "100vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 4 },
          background: {
            xs: "#ffffff",
            md: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
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
            maxWidth: { xs: 210, sm: 280, md: 520 },
          }}
        />
      </Box>

      {/* ================= FORM (AZUL) ================= */}
      <Box
        sx={{
          width: { xs: "100%", md: "55%" },
          flex: { xs: 1, md: "unset" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          py: { xs: 3, md: 0 },
          background: "linear-gradient(180deg, #142c4c 0%, #0f223a 100%)",
        }}
      >
        <Box sx={{ width: 420, maxWidth: "100%" }}>
          <Card
            elevation={6}
            sx={{
              borderRadius: 3,
              px: { xs: 1, sm: 2 },
              py: { xs: 1, sm: 2 },
            }}
          >
            <CardContent>
              <Stack spacing={3}>
                {/* HEADER */}
                <Box textAlign="center">
                  <Typography variant="h5" fontWeight={700} sx={{ color: "var(--sumimas-texto-primario)" }} >
                    Bienvenido a SumiApp
                  </Typography>
                  <Typography
                    
                    sx={{ mt: 0.5  , color: "var(--sumimas-texto-secundario)" }}
                  >
                    Inicia sesión para continuar
                  </Typography>
                </Box>

                {/* FORM */}
                <form onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    {/* USUARIO */}
                    <TextField
                      label="Usuario"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                      fullWidth
                      autoFocus
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#cbd5e1",
                          },
                          "&:hover fieldset": {
                            borderColor: "#142c4c",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#142c4c",
                            borderWidth: 2,
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#142c4c",
                        },
                      }}
                    />

                    {/* CONTRASEÑA */}
                    <TextField
                      label="Contraseña"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#cbd5e1",
                          },
                          "&:hover fieldset": {
                            borderColor: "#142c4c",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#142c4c",
                            borderWidth: 2,
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#142c4c",
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowPassword(prev => !prev)
                              }
                              edge="end"
                              sx={{ color: "#142c4c" }}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    {error && (
                      <Typography color="error" variant="body2">
                        {error}
                      </Typography>
                    )}

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        mt: 1,
                        py: 1.4,
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
                  <Typography
                    variant="caption"
                    sx={{ color: "var(--sumimas-texto-secundario)" }}
                  >
                    © 2026 <strong>SumiApp</strong>
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{ color: "var(--sumimas-texto-secundario)" }}
                    display={{ xs: "block", sm: "block" }}
                  >
                    Sumimas S.A.S. – Todos los derechos reservados
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
