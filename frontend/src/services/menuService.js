import axios from "axios";

const API_URL = "http://localhost:5000/api/menus"; // Adjust API URL

const getMenus = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

const menuService = { getMenus };
export default menuService;
