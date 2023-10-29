import axios from "axios";


export async function getCuentas(id_user){
    try {
        const response = await axios.get(`http://localhost:3800/api/budget-management/account/${id_user}`)
        console.log(response);
        return response
        
    } catch (error) {
        console.error(error);
    }
}