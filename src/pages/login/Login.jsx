import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    TextInput,
    PasswordInput,
    Paper,
    Title,
    Container,
    Button,
    Text
} from "@mantine/core";
import classes from "./Login.module.css";
import {login, logout} from "../../redux/auth.js";

function Login() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Welcome!
            </Title>
            <Text mt='xl'>Username: user or admin</Text>
            <Text>Password: user or {JSON.stringify(data)}</Text>
            <h1> The auth is: { isAuthenticated ? 'logged in' : 'guest'}</h1>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput value={data.username} name="username" onChange={changeHandler} label="Username" placeholder="Your username" />
                <PasswordInput
                    value={data.password}
                    name="password"
                    onChange={changeHandler}
                    label="Password"
                    placeholder="Your password"
                    mt="md"
                />
                <Button onClick={() => dispatch(login(data))} fullWidth mt="xl">
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}

export default Login;
