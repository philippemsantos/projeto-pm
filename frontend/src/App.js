import { useEffect,useState } from "react";
import axios from "axios";

function App(){
    const[mensagem, setMensagem] = useState("");


    useEffect(() => {
        axios.get("http://127.0.0.1:5000/api/hello")
            .then(res => setMensagem(res.data.message))
            .catch(err => console.error(err));
    }, []);

    return <h1>{mensagem}</h1>;
}
export default App;