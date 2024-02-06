import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes
} from "react-router-dom";
import Login from '../pages/login/Login.jsx'
import Questions from "../pages/questions/Questions.jsx";
import {useSelector} from "react-redux";

const Router = () => {
    const { isAuthenticated, userDetails } = useSelector((state) => state.auth);
    const hasAlreadyAuthenticated = () => {
        if(userDetails.username === 'user') return <Navigate to='/quiz' replace />
        if(userDetails.username === 'admin') return <Navigate to='/questions' replace />
        return <></>
    }
    console.log(userDetails)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />

                <Route path="/login" element={!isAuthenticated ? <Login /> : hasAlreadyAuthenticated() } />
                <Route path="/questions" element={<Questions /> } />

                <Route path="*" element={<div>page not found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
