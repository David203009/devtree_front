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

    const { register, watch, handleSubmit, formState: { errors } } = useForm({ defaultValues });

    const handleRegister = () => {
        console.log('Registrando...')
    }

    return (
        <>
            <h1 className=" text-4xl text-center text-white font-bold">Crear Cuenta</h1>

            <form
                className=" form mt-10 block"
                onSubmit={handleSubmit(handleRegister)}>

                <div className=" mb-4">
                    <label htmlFor="name" className=" text-white text-2xl px-1">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Ingrese su nombre"
                        className=" w-full bg-slate-900 rounded mt-2 text-white p-4"
                        {...register('name', { required: "El nombre es obligatorio" })}
                    />

                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </div>

                <div className=" mb-4">
                    <label htmlFor="email" className=" text-white text-2xl px-1">Correo Electronico</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingrese su correo electronico. Ej: correo@correo.com"
                        className=" w-full bg-slate-900 rounded mt-2 text-white p-4"
                        {...register('email', { required: "El email es obligatorio" })}
                    />

                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </div>

                <div className=" mb-4">
                    <label htmlFor="handle" className=" text-white text-2xl px-1">Handle</label>
                    <input
                        type="text"
                        id="handle"
                        placeholder="Ingrese su handle. Ej: mihandle"
                        className=" w-full bg-slate-900 rounded mt-2 text-white p-4"
                        {...register('handle', { required: "El handle es obligatorio" })}
                    />

                    {errors.handle && <ErrorMessage>{errors.handle.message}</ErrorMessage>}
                </div>

                <div className=" mb-4">
                    <label htmlFor="password" className=" text-white text-2xl px-1">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Ingrese su contraseña"
                        className=" w-full bg-slate-900 rounded mt-2 text-white p-4"
                        {...register('password', { required: "La contraseña es obligatorio" })}
                    />

                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </div>

                <div className=" mb-5">
                    <label htmlFor="repeat_password" className=" text-white text-2xl px-1">Repetir Contraseña</label>
                    <input
                        type="password"
                        id="repeat_password"
                        placeholder="Repita su contraseña"
                        className=" w-full bg-slate-900 rounded mt-2 text-white p-4"
                        {...register('repeat_password', { required: "El nombre es obligatorio" })}
                    />

                    {errors.repeat_password && <ErrorMessage>{errors.repeat_password.message}</ErrorMessage>}
                </div>


                <input
                    type="submit"
                    className=" bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                    value="Crear Cuenta" />

            </form>

            <nav className=" mt-4">
                <Link
                    to="/auth/login"
                    className=" text-right text-white block underline">
                    ¿Ya tienes cuenta? Inicia Sesion
                </Link>
            </nav>
        </>
    )
}