import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";

export default function Register() {
    const defaultValues = {
        name: '',
        email: '',
        handle: '',
        password: '',
        repeat_password: ''
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });

    const handleRegister = () => {
        console.log('Registrando...')
    }

    return (
        <div className="bg-gradient-to-br">
            <div className="w-full mt-2 bg-slate-800 rounded-2xl shadow-2xl p-8 shadow-cyan-500/50">
                <h1 className="text-4xl text-center text-white font-bold mb-8">Crear Cuenta</h1>

                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(handleRegister)}>

                    <div>
                        <label htmlFor="name" className="block text-white text-lg font-medium mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Ingrese su nombre"
                            className="w-full bg-slate-700 rounded-lg mt-2 text-white p-4 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-200"
                            {...register('name', { required: "El nombre es obligatorio" })}
                        />
                        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-white text-lg font-medium mb-2">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ingrese su correo electrónico"
                            className="w-full bg-slate-700 rounded-lg mt-2 text-white p-4 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-200"
                            {...register('email', { required: "El email es obligatorio" })}
                        />
                        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                    </div>

                    <div>
                        <label htmlFor="handle" className="block text-white text-lg font-medium mb-2">
                            Handle
                        </label>
                        <input
                            type="text"
                            id="handle"
                            placeholder="Ingrese su handle"
                            className="w-full bg-slate-700 rounded-lg mt-2 text-white p-4 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-200"
                            {...register('handle', { required: "El handle es obligatorio" })}
                        />
                        {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
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
                            {...register('password', { required: "La contraseña es obligatoria" })}
                        />
                        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                    </div>

                    <div>
                        <label htmlFor="repeat_password" className="block text-white text-lg font-medium mb-2">
                            Repetir Contraseña
                        </label>
                        <input
                            type="password"
                            id="repeat_password"
                            placeholder="Repita su contraseña"
                            className="w-full bg-slate-700 rounded-lg mt-2 text-white p-4 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-200"
                            {...register('repeat_password', { required: "La confirmación de contraseña es obligatoria" })}
                        />
                        {errors.repeat_password && <ErrorMessage>{errors.repeat_password.message}</ErrorMessage>}
                    </div>

                    <input
                        type="submit"
                        className="w-full bg-cyan-500 hover:bg-cyan-600 p-4 text-lg uppercase text-white rounded-lg font-bold cursor-pointer transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                        value="Crear Cuenta" />
                </form>

                <nav className="mt-6 text-center">
                    <Link
                        to="/auth/login"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                        ¿Ya tienes cuenta? Inicia Sesión
                    </Link>
                </nav>
            </div>
        </div>
    )
}