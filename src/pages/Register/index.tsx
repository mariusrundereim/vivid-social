import { useForm, SubmitHandler } from "react-hook-form";
import { useRegisterMutation } from "../../store/auth/apiSlice";
import { RegisterRequest } from "../../store/auth/types";
function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterRequest>();
  const [registerUser, { isLoading, isSuccess, isError, error }] =
    useRegisterMutation();

  const onSubmit: SubmitHandler<RegisterRequest> = async (data) => {
    try {
      const response = await registerUser(data).unwrap();
      console.log("Reg success", response);
    } catch (error) {
      console.error("Registration errror", error);
    }
  };

  return (
    <>
      <h2 className="font-bold text-xl">Register form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="border border-slate-400"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="border border-slate-400"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="border border-slate-400"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            className="border border-slate-400"
            {...register("bio")}
          />
        </div>

        <div>
          <label htmlFor="avatarUrl">Avatar URL</label>
          <input
            id="avatarUrl"
            className="border border-slate-400"
            {...register("avatar.url")}
          />
        </div>

        <div>
          <label htmlFor="avatarAlt">Avatar Alt Text</label>
          <input
            id="avatarAlt"
            className="border border-slate-400"
            {...register("avatar.alt")}
          />
        </div>

        <div>
          <label htmlFor="bannerUrl">Banner URL</label>
          <input
            id="bannerUrl"
            className="border border-slate-400"
            {...register("banner.url")}
          />
        </div>

        <div>
          <label htmlFor="bannerAlt">Banner Alt Text</label>
          <input
            id="bannerAlt"
            className="border border-slate-400"
            {...register("banner.alt")}
          />
        </div>

        <button
          type="submit"
          className="bg-pink-200 px-4 p-2"
          disabled={isLoading}
        >
          Register
        </button>

        {isSuccess && <p>Registration successful!</p>}
      </form>
    </>
  );
}

export default RegisterForm;
