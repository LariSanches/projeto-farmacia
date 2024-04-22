import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from '../../../services/Service';


function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();


  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categoria))
  }

  async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        toastAlerta('Categoria atualizada com sucesso', 'success');
        retornar();
      } catch (error: any) {
        console.error('Erro ao atualizar a categoria:', error);
        toastAlerta('Erro ao atualizar a categoria', 'error');
      }
    }

    else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        toastAlerta('Categoria cadastrada com sucesso', 'success');
        retornar();
      } catch (error: any) {
        console.error('Erro ao cadastrar a categoria:', error);
        toastAlerta('Erro ao cadastrar a categoria', 'error');
      }
    }
    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }


  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre um novo Categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;

function toastAlerta(arg0: string, arg1: string) {
    throw new Error('Function not implemented.');
}
function handleLogout() {
    throw new Error('Function not implemented.');
}

