import authApi from "../AxiosConfig";


const login = async (credentials) => {
    try {
        const response = await authApi.post('/auth/signin', credentials);
        // localStorage.setItem('accessToken', response.data.accessToken);
        // localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('user',response.data.user)
        localStorage.setItem('role',response.data.role)
        console.log('User logged in successfully.');
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};


const register = async (userData) => {
    try {
        console.log("Register data", userData);
        const response = await authApi.post('/auth/signup', userData);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
export  {login,register};