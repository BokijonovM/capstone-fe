import * as React from "react";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import image from "./image.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import "./style.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

const theme = createTheme();

export default function MyLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleRegister = async () => {
    const newPost = {
      email: email,
      password: password,
    };
    try {
      let res = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: { "Content-type": "application/json" },
      });
      if (res.status !== 200) alert("you you entered wrong password or email");
      if (res.ok) {
        let data = await res.json();
        console.log(data.posts);
        localStorage.setItem("MyToken", data.accessToken);
        window.location.href = "/";
        console.log("Successfully logged in!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider className="main-theme-login" theme={theme}>
      <Grid container component="main" sx={{ height: "81vh" }}>
        <CssBaseline />
        <Grid
          style={{ width: "10px" }}
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          className="shadow-needed-login shadow-none"
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#6c63ff" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                autoComplete="current-password"
              />

              <div className="d-flex">
                <a href="http://localhost:3001/users/googleLogin">
                  <Button
                    className="mr-1 px-5 text-dark social-media-login"
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                  >
                    <GoogleIcon />
                  </Button>
                </a>

                <Button
                  className="mx-1 text-dark social-media-login"
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                >
                  <FacebookIcon />
                </Button>
                <Button
                  className="ml-1 text-dark social-media-login"
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                >
                  <AppleIcon />
                </Button>
              </div>
              <Button
                type="submit"
                className="ml-1"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#6c63ff" }}
                disabled={!email || !password}
                onClick={() => handleRegister()}
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
