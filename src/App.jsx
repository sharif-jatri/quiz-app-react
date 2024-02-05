import Router from './routes/index.jsx';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import Layout from './Layout.jsx';


function App() {
    return (
        <MantineProvider>
            <Layout>
                <Router />
            </Layout>
        </MantineProvider>
    )
}

export default App
