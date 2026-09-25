import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-md w-96"
      >
        <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center">
          Iniciar sesión
        </h1>

        <label className="block mb-2 font-semibold">
          Correo electrónico
        </label>

        <input
          type="email"
          placeholder="correo@ejemplo.com"
          className="w-full border border-gray-300 p-2 rounded mb-2"
          {...register('email', {
            required: 'El correo es obligatorio',
          })}
        />

        {errors.email && (
          <p className="text-red-500 text-sm mb-4">
            {errors.email.message}
          </p>
        )}

        <label className="block mb-2 font-semibold">
          Contraseña
        </label>

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full border border-gray-300 p-2 rounded mb-2"
          {...register('password', {
            required: 'La contraseña es obligatoria',
            minLength: {
              value: 6,
              message: 'Debe tener mínimo 6 caracteres',
            },
          })}
        />

        {errors.password && (
          <p className="text-red-500 text-sm mb-4">
            {errors.password.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-2 rounded mt-4 hover:bg-purple-700"
        >
          Ingresar
        </button>
      </form>

    </div>
  )
}

export default App