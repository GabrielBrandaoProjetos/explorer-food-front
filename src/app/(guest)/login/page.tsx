import Link from "next/link";



export default function Login() {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-10 ">
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="email" className="text-zinc-400">Email</label>
          <input id="email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br"
            className="px-3 h-12 rounded-lg bg-dark-900"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="email" className="text-zinc-400">Email</label>
          <input id="email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br"
            className="px-3 h-12 rounded-lg bg-dark-900"
          />
        </div>

        <button
          type="submit"
          className="bg-red-900 px-8 py-3 rounded text-white text-sm font-medium font-button"
        >
          Entrar
        </button>

        <Link href="" className="text-white text-sm font-medium font-button text-center">Criar uma conta</Link>
      </form>
    </div>
  )
}