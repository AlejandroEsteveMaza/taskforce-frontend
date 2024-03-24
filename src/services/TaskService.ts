import axios from "axios";

const baseUrl: string = 'http://localhost:8080/api/tasks';

export const findAllTasks = async (): Promise<any> => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
