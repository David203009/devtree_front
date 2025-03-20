import { Link } from "react-router-dom"

export default function Login() {
    return (
        <>
            <h1 className=" text-4xl text-center text-white font-bold text-center\">Iniciar Sesion</h1>

            <form
                className=" form mt-10"
                onSubmit={() => { }}>
                <div className=" mb-5">
                    <label htmlFor="email" className=" text-white text-2xl px-1">Correo Electronico</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingrese su correo electronico. Ej: correo@correo.com"
                        className=" w-full bg-slate-900 rounded mt-2 text-white p-4"
                    />
                </div>

                <div className=" mb-5">
                    <label htmlFor="password" className=" text-white text-2xl px-1">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Ingrese su contraseña"
                        className=" w-full bg-slate-900 rounded mt-2 text-white p-4"
                    />
                </div>

                <input
                    type="submit"
                    className=" bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                    value="Iniciar Sesion" />
            </form>

            <nav className="mt-2">
                <Link
                    to="/auth/register"
                    className=" text-right text-white block underline">
                    ¿No tienes una cuenta? Crea una cuenta
                </Link>
            </nav>
        </>
    )
}