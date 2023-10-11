import axios from "axios";
import { useAuth } from "./auth/AuthProvider";


const WeatherPage = () => {
    const { clearToken } = useAuth();

    const logout = async () => {
        await axios
            .post<{ token: string }>('https://localhost:7203/api/authentication/logout');
        clearToken?.()        
    }


    return (
        <div className="form">
            <h2>Weather Information</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export { WeatherPage };
