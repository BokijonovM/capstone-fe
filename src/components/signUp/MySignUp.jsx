import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import image from "./image.png";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

const theme = createTheme();

export default function MySignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const handleRegister = async () => {
    const newPost = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    try {
      let res = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: { "Content-type": "application/json" },
      });
      if (res.status !== 200) {
        console.log(res.status);
        // alert("you you entered wrong password or email");
        setOpen(true);
      }
      if (res.ok) {
        console.log("res.ok");
        let data = await res.json();
        localStorage.setItem("MyToken", data.accessToken);
        console.log("Successfully registered!");
        window.location.href = "/";
      } else {
        console.log("error fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
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
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#6c63ff" }}
                  disabled={!email || !password || !firstName || !lastName}
                  onClick={() => handleRegister()}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to="/login">Already have an account? Sign in</Link>
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
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0  modal-sign-up-error"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900  deactivate-account"
                      >
                        Sign up Error!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 deactivate-account">
                          An account with that email address already exists.
                          Please use a unique email.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 modal-2-buttons px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 sm:w-auto sm:text-sm login-in-sing-up-modal"
                    onClick={() => {
                      navigate("/login");
                      setOpen(false);
                    }}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className=" w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
