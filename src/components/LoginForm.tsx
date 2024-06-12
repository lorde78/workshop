import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import * as v from "valibot";
import { InferOutput } from "valibot";

// Définition du schéma de validation
// const Schema = v.object({
// 	email: v.pipe(v.string(), v.email()),
// 	password: v.pipe(v.string(), v.minLength(8)),
// });
const Schema = v.object({
	email: v.string(),
	password: v.string(),
});

// Typage des valeurs du formulaire à partir du schéma
export type LoginFormInputs = v.InferOutput<typeof Schema>;

// Exemple de validation de données (au chargement du composant)
const result = v.safeParse(Schema, {
	email: "jane@example.com",
	password: "12345689",
});

console.log(result);

const LoginForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm<LoginFormInputs>({
		resolver: valibotResolver(Schema),
	});

	const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
		const validationResult = v.safeParse(Schema, data);
		console.log(validationResult);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					{...register("email", { required: "Email is required" })}
				/>
			</div>

			<div>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					type="password"
					{...register("password", { required: "Password is required" })}
				/>
			</div>

			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
