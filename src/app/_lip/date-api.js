import axios from 'axios';

export const getUsersByid = async (par) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        return response.data.filter(user => user.id === parseInt(par));

    } catch (error) {
        console.error(error);
        
    }
}


export const getUsers = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        return response.data

    } catch (error) {
        console.error(error);
      
    }
}