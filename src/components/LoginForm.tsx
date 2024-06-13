import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { EmailSchema } from "../schemas/emailSchema";
import { PasswordSchema } from "../schemas/passwordSchema";
import * as v from "valibot";

type LoginFormInputs = {
	email: v.InferOutput<typeof EmailSchema>;
	password: v.InferOutput<typeof PasswordSchema>;
};

const LoginForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>({});

	const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="email">Email</label>
				<input id="email" type="email" {...register("email")} required />
				{errors.email && <div>{errors.email.message?.toString()}</div>}
			</div>

			<div>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					type="password"
					{...register("password")}
					required
				/>
				{errors.password && <div>{errors.password.message?.toString()}</div>}
			</div>

			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
