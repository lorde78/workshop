import React from "react";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import userSchema from "../validation/userSchema";

interface FormInput {
	username: string;
	email: string;
	password: string;
}

const Form: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>({
		resolver: valibotResolver(userSchema),
	});

	const onSubmit = (data: FormInput) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label>Username</label>
				<input {...register("username")} />
				{errors.username && <p>{errors.username.message}</p>}
			</div>
			<div>
				<label>Email</label>
				<input {...register("email")} />
				{errors.email && <p>{errors.email.message}</p>}
			</div>
			<div>
				<label>Password</label>
				<input type="password" {...register("password")} />
				{errors.password && <p>{errors.password.message}</p>}
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Form;
