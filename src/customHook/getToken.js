import axios from 'axios';

const getToken = async () => {
    try {
        const response = await axios.post('https://zerzuraexperiences.com/blogs/wp-json/jwt-auth/v1/token', {
            username: 'zerzura-api',
            password: 'cKV6UkAE(3Hu8z(v9dd7!Qgy'
        });

        const token = response.data.token;
        return token;
    } catch (error) {
        console.error('Error fetching token:', error.response ? error.response.data : error.message);
        throw new Error('Unable to fetch token');
    }
};
export default getToken;
