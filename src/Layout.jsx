
import {AppShell, Button, Title} from "@mantine/core";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./redux/auth.js";

const Layout = ({children}) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <AppShell header={{ height: 60 }} padding="md">
            <AppShell.Header>
                <Title mt='xs' p='xs' order={3}>React Quiz App</Title>
                {isAuthenticated ? <Button mt='xs' p='xs' onClick={() => dispatch(logout())}>Logout</Button> : null}
            </AppShell.Header>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
};

export default Layout;
