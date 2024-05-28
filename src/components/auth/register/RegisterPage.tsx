import { colors } from "../../../styles/colors";
import { Box } from "@mui/system";
import { Auth, Form, IncitingText } from "./styles";
import { useState } from "react";
import { instance } from "../../../utils/axios";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../../Header";
import Footer from "../../Footer";



function RegisterPage() {
  // const [username, setEmailLog] = useState("");
  // const [password, setPasswordLog] = useState("");
  // const navigate = useNavigate();

  // Создаем схему валидации с Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Поле email обязательное")
      .email("Неправильный формат email"),
    password: Yup.string()
      .required("Поле password обязательное")
      .min(5, "минимум 5 символов")
      .matches(/^[A-Za-z0-9]+$/, "Пароль должен содержать только латинские символы и цифры"),
  });


  // Инициализируем useFormik для управления формой и валидации
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      country: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {

      const { login, password, firstName, lastName, email, country } = values;
      try {
        const newUser = await instance.post("/api/signup", { login, password, firstName, lastName, email, country }, {
          headers: { accept: "*/*", "Content-Type": "application/json" }
        });
        console.log("user", newUser.data);
        // // После успешной регистрации автоматически выполняем вход
        // const response = await instance.post("/api/signup", { login, password }, {
        //   headers: { accept: "*/*", "Content-Type": "application/json" },
        // });
        // const { accessToken } = response.data;

        // navigate("/user_login/user_account");
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }

  });

  return (
    <>
      <Header />
      <Auth>
        <Form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              maxWidth: 560,
              margin: "auto",
              padding: 5,
              borderRadius: 5,
              boxShadow: `5px 5px 10px ${colors.baseGray50}`,
            }}
          >

            <Typography
              variant="h4"
              sx={{ mb: 0, fontFamily: "Montserrat", fontWeight: 500, textAlign: "center" }}
            >
              Регистрация
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 0, fontFamily: "Montserrat", fontWeight: 400, textAlign: "center" }}
            >
              Введите данные для регистрации
            </Typography>
            <TextField
              fullWidth
              margin="dense"
              label="Логин"
              variant="outlined"
              placeholder="Введите ваш логин"
              size="small"
              name="login"
              value={formik.values.login}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.login && Boolean(formik.errors.login)}
              helperText={formik.touched.login && formik.errors.login}
            />
            <TextField
              fullWidth
              margin="dense"
              label="Password"
              variant="outlined"
              placeholder="Введите ваш пароль"
              size="small"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              fullWidth
              margin="dense"
              label="Имя"
              variant="outlined"
              placeholder="Введите ваше имя"
              size="small"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />

            <TextField
              fullWidth
              margin="dense"
              label="Фамилия"
              variant="outlined"
              placeholder="Введите вашу фамилию"
              size="small"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />

            <TextField
              fullWidth
              margin="dense"
              label="Email"
              variant="outlined"
              placeholder="Введите ваш Email"
              size="small"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />


            <TextField
              fullWidth
              margin="dense"
              label="Страна"
              variant="outlined"
              placeholder="Введите вашу страну"
              size="small"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
            />

            <Button
              type="submit"
              variant="contained"
              size="small"
              sx={{
                width: "80%",
                mt: 2,
                mb: 2,
                fontFamily: "Montserrat",
                padding: 2,
              }}
            >
              Регистрация
            </Button>
            <Typography variant="body2" sx={{ fontFamily: "Montserrat", fontWeight: 400 }}>
              У вас уже есть аккаунт? <IncitingText to="/login">Авторизация</IncitingText>
            </Typography>

          </Box>
        </Form>
      </Auth>
      <Footer />
    </>
  );
}

export default RegisterPage;
