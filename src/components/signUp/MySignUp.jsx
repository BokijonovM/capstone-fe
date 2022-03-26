import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import Paper from "@mui/material/Paper";
import image from "./image.png";
import "./style.css";

const theme = createTheme();

export default function MySignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        className="sign-up-main-grid"
        sx={{ height: "81vh" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          className="shadow-needed-sign-up shadow-none"
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              marginTop: 4,
              marginBottom: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "72vh",
              mx: 4,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#6c63ff" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <div className="d-flex">
                <Button
                  className="mr-1 text-dark social-media-login"
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                >
                  <GoogleIcon />
                </Button>
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
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#6c63ff" }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
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
      </Grid>
    </ThemeProvider>
  );
}
