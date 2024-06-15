import { Formik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Card,
  Checkbox,
  Grid,
  TextField,
  useTheme,
  Box,
  styled,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import * as Yup from "yup";

import useAuth from "app/hooks/useAuth";
import { Paragraph } from "app/components/Typography";
import  axios  from "axios";
// import { axios } from "axios";

// STYLED COMPONENTS
const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: "center",
}));

const ContentBox = styled(JustifyBox)(() => ({
  height: "100%",
  padding: "32px",
  background: "rgba(0, 0, 0, 0.01)",
}));

const JWTRegister = styled(JustifyBox)(() => ({
  background: "#1A2038",
  minHeight: "100vh !important",
  "& .card": {
    maxWidth: 800,
    minHeight: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    alignItems: "center",
  },
}));

// initial login credentials
const initialValues = {
  email: "",
  password: "",
  type: "recruiter",
  name: "",
  contactNumber: "",
  bio: "",
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 character length")
    .required("Password is required!")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
  email: Yup.string()
    .email("Invalid Email address")
    .required("Email is required!"),
  name: Yup.string().required("name is required!"),
  // contactNumber: Yup.string()
  //   .required("Contact number is required!")
  //   .min(10, "Minimum 10 digits are allowed")
  //   .max(10, "Maximum 10 digits are allowed"),
  // // .positive( " please  enter a positive number"),
  // bio: Yup.string().required("BIO is required!"),
});

export default function JwtRegister() {
  const theme = useTheme();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values) => {
    setLoading(true);

    try {
      // register(values.email, values.username, values.password);
      axios.post("http://localhost:4444/auth/signup", values)
        .then((y) => {
          if (y.status == 200) {

            console.log(y.data);
            navigate("/session/signin");
          }
        });

      // navigate("/");
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <JWTRegister>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <ContentBox>
              <img
                width="100%"
                alt="Register"
                src="/assets/images/illustrations/posting_photo.svg"
              />
            </ContentBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box p={4} height="100%">
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="type"
                      label="type"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.type}
                      onChange={handleChange}
                      helperText={touched.type && errors.type}
                      error={Boolean(errors.type && touched.type)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="name"
                      label="name"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.name}
                      onChange={handleChange}
                      helperText={touched.name && errors.name}
                      error={Boolean(errors.name && touched.name)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      name="contactNumber"
                      type="text"
                      label="contactNumber"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.contactNumber}
                      onChange={handleChange}
                      helperText={touched.contactNumber && errors.contactNumber}
                      error={Boolean(
                        errors.contactNumber && touched.contactNumber
                      )}
                      sx={{ mb: 2 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      name="bio"
                      type="bio"
                      label="bio"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.bio}
                      onChange={handleChange}
                      helperText={touched.bio && errors.bio}
                      error={Boolean(errors.bio && touched.bio)}
                      sx={{ mb: 2 }}
                    />

                    {/* <FlexBox gap={1} alignItems="center">
                      <Checkbox
                        size="small"
                        name="remember"
                        onChange={handleChange}
                        checked={values.remember}
                        sx={{ padding: 0 }}
                      />

                      <Paragraph fontSize={13}>
                        I have read and agree to the terms of service.
                      </Paragraph>
                    </FlexBox> */}

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      Register
                    </LoadingButton>

                    <Paragraph>
                      Already have an account?
                      <NavLink
                        to="/session/signin"
                        style={{
                          color: theme.palette.primary.main,
                          marginLeft: 5,
                        }}
                      >
                        Login
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  );
}
