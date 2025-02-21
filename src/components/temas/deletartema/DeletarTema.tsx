import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import { RotatingLines } from "react-loader-spinner"; // Adicionado

function DeletarTema() {
    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams(); // Corrigido

    async function buscarTemaPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout(); // -> Zera o token.
            }
        }
    }

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado!");
            navigate("/");
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarTemaPorId(id);
        }
    }, [id]);

    async function deletarTema() {
        setIsLoading(true);

        try {
            await deletar(`/temas/${id}`, {
                headers: { Authorization: token },
            });

            alert("Tema foi apagado com sucesso!");
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout(); // -> Zera o token.
            } else {
                alert("Erro ao excluir o tema!");
            }
        }

        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/temas");
    }

    return (
        <div className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4 text-[#900551]">Deletar tema</h1>
            <p className="text-center font-semibold mb-4 text-[#900551]">
                Você tem certeza de que deseja apagar o tema a seguir?
            </p>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-[#900551] text-white font-bold text-2xl">
                    Tema
                </header>
                <p className="p-8 text-3xl bg-[#fff5fb] h-full">{tema.descricao}</p>
                <div className="flex">
                    <button 
                        className="text-slate-100 bg-[#ff555d] hover:bg-[#f31d1f] w-full py-2"
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className="w-full text-slate-100 bg-[#900551]
                                hover:bg-[#fc2199] flex items-center justify-center"
                        onClick={deletarTema} // Corrigido
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarTema;