import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Usuario from "../../models/Usuario";
import { RotatingLines } from "react-loader-spinner";
import { cadastrarUsuario } from "../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario("/usuarios/cadastrar", usuario, setUsuario)
				ToastAlerta("Usuário Cadastrado com sucesso!", "success")
			} catch (error) {
				ToastAlerta("Erro ao cadastrar o Usuário!", "erro")
			}
		} else {
			ToastAlerta("Dados do usuário inconsistentes! Verifique as informações e tente novamente", "info")
			setUsuario({ ...usuario, senha: "" })
			setConfirmaSenha("")
		}

		setIsLoading(false)
  }

  console.log(JSON.stringify(usuario));
  console.log(confirmaSenha);

  return (
    <>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 h-screen 
                  place-items-center font-bold"
      >
        <div className="fundoCadastro hidden lg:block"></div>
        <form
					className="flex justify-center items-center flex-col w-2/3 gap-3"
					onSubmit={cadastrarNovoUsuario}
				>
          <h2 className="text-[#900551] text-5xl">Cadastrar</h2>

          <div className="flex flex-col w-full">
            <label htmlFor="nome" className="text-[#900551]">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-[#900551] rounded p-2"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="usuario" className="text-[#900551]">
            E-mail
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="E-mail"
              className="border-2 border-[#900551] rounded p-2"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="foto" className="text-[#900551]">
              Foto
            </label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-[#900551] rounded p-2"
              value={usuario.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="senha" className="text-[#900551]">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-[#900551] rounded p-2"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>atualizarEstado(e)}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha" className="text-[#900551]">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-[#900551] rounded p-2"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            />
          </div>

          <div className="flex justify-around w-full gap-8">
            <button
              type='reset'
              className="rounded text-white bg-[#ff555d] [#ed4c57] #ff97ca
                      hover:bg-[#f31d1f] w-1/2 py-2"
              onClick={retornar}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="rounded text-white bg-[#fc2199]
                          hover:bg-[#900551] w-1/2 py-2
                          flex justify-center"
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
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
