import { useEffect,useState } from "react";
import axios from "axios";

function App(){
    const[mensagem, setMensagem] = useState("");


    useEffect(() => {
        axios.get("https://projeto-pm.onrender.com")
            .then(res => setMensagem(res.data.message))
            .catch(err => console.error(err));
    }, []);

    return <h1>{mensagem}</h1>;
}
export default App;