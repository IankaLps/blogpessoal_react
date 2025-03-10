import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-[#900551] to-[#F30086]">
            <div className="container grid grid-cols-2 text-white">
                <div className="flex flex-col items-center justify-center gap-4 py-4">
                    <h2 className="text-5xl max-sm:text-2xl font-bold">
                        Seja Bem-Vindo(a)!
                    </h2>
                    <p className="text-xl">
                        💬 Expresse aqui seus pensamentos e opiniões
                    </p>

                    <div className="flex justify-around gap-4">
                    <div className="flex justify-around gap-4">
                        <ModalPostagem />
                        </div>
                    </div>
                </div>
 
                <div id="imagem" className="flex justify-center">
                    <img
                        src="https://ik.imagekit.io/yijg14v4w/Blog_pessoal_React/Sharing%20articles-amico.png?updatedAt=1739790988460"
                        alt="Imagem da Página Home"
                        className="w-2/3"
                        />
                        </div>
                    </div>
                </div>
                <ListaPostagens />
            </>
        )
    }
    
    export default Home