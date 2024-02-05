import { useState } from "react";
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

function Login() {
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
                <Button fullWidth mt="xl">
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}

export default Login;
