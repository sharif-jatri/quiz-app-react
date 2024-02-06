import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes
} from "react-router-dom";
import Login from '../pages/login/Login.jsx'
import Questions from "../pages/questions/Questions.jsx";
import Answers from "../pages/answers/Answers.jsx";
import {useSelector} from "react-redux";

const Router = () => {
    const { isAuthenticated, userDetails } = useSelector((state) => state.auth);

    const hasAlreadyAuthenticated = () => {
        if(userDetails.username === 'user') return <Navigate to='/quiz' replace />
        else if(userDetails.username === '01521485583') return <Navigate to='/questions' replace />
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />

                <Route path="/login" element={!isAuthenticated ? <Login /> : hasAlreadyAuthenticated() } />
                <Route path="/questions" element={isAuthenticated ? <Questions /> : <Navigate to="/login" /> } />
                <Route path="/quiz" element={isAuthenticated ? <Answers /> : <Navigate to="/login" /> } />

                <Route path="*" element={<div>page not found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
