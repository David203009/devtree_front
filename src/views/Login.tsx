import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className=" bg-gradient-to-br">
            <div className="w-full mt-2 bg-slate-800 rounded-2xl shadow-2xl p-8 shadow-cyan-500/50">
                <h1 className="text-4xl text-center text-white font-bold mb-8">Iniciar Sesión</h1>

                <form
                    className="space-y-6"
                    onSubmit={() => { }}>
                    <div>
                        <label htmlFor="email" className="block text-white text-lg font-medium mb-2">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ingrese su correo electrónico"
                            className="w-full bg-slate-700 rounded-lg mt-2 text-white p-4 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-200"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-white text-lg font-medium mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Ingrese su contraseña"
                            className="w-full bg-slate-700 rounded-lg mt-2 text-white p-4 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-200"
                        />
                    </div>

                    <input
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-600 p-4 text-lg uppercase text-white rounded-lg font-bold cursor-pointer transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                        value="Iniciar Sesión" />
                </form>

                <nav className="mt-6 text-center">
                    <Link
                        to="/auth/register"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                        ¿No tienes una cuenta? Crea una cuenta
                    </Link>
                </nav>
            </div>
        </div>
    )
}