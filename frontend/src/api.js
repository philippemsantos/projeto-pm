//api.ts


const API_BASE = process.env.REACT_APP_API_BASE;

//função generica para fazer fetch
export async function getData(rota) {
    try{
        const response = await fetch(`${API_BASE}${rota}`);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);

        }
        return await response.json();
    }   catch (error) {
        console.error(error);
        return null;
    };

}