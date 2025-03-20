type ErrorMessageProps = {
    children: React.ReactNode
}

export default function ErrorMessage({children} : ErrorMessageProps) {
    return (
        <p className=" text-red-500 text-sm pt-2 px-2 font-bold uppercase">
            {children}
        </p>
    )
}