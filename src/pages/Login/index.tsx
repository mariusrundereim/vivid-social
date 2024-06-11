import { useForm, SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../../store/auth/apiSlice";
import { LoginRequest } from "../../store/auth/types";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const [loginUser, { isLoading, isSuccess, isError, error }] =
    useLoginMutation();

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    try {
      const response = await loginUser(data).unwrap();
      console.log("Login successful:", response);
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <>
      <h2 className="font-bold text-xl">Login Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="border border-slate-400 p-2"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="border border-slate-400 p-2"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button
          type="submit"
          className="border bg-pink-400 p-2"
          disabled={isLoading}
        >
          Login
        </button>

        {isSuccess && <p>Login successful!</p>}
      </form>
    </>
  );
}

export default LoginForm;
