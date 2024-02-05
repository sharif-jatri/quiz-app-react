import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes
} from "react-router-dom";
import Login from '../pages/login/Login.jsx'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />

                <Route path="/login" element={<Login /> } />

                <Route path="*" element={<div>page not found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
