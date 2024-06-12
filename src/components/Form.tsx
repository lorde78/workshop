import React, { useState } from "react";
import { safeParse } from "valibot";
import * as v from "valibot";

const FormSchema = v.object({
	email: v.pipe(
		v.string("Your email must be a string."),
		v.nonEmpty("Please enter your email."),
		v.email("The email address is badly formatted.")
	),
	password: v.pipe(
		v.string("Your password must be a string."),
		v.nonEmpty("Please enter your password."),
		v.minLength(8, "Your password must have 8 characters or more.")
	),
});

type FormInputs = {
	email: string;
	password: string;
};

const Form = () => {
	const [formData, setFormData] = useState<FormInputs>({
		email: "",
		password: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);
	const [submissionError, setSubmissionError] = useState<string>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const result = safeParse(FormSchema, formData);
		if (result.success) {
			setIsSubmitted(true);
		} else {
			const fieldErrors: { [key in keyof FormInputs]?: string } = {};

			setSubmissionError("Failed to submit the form");
		}
	};

	return (
		<div>
			{isSubmitted && <p>Form submitted successfully!</p>}
			{submissionError && <p>{submissionError}</p>}

			<form onSubmit={handleSubmit}>
				<div>
					<label>Email</label>
					<input
						className="input"
						name="email"
						type="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label>Password</label>
					<input
						className="input"
						name="password"
						type="password"
						value={formData.password}
						onChange={handleChange}
					/>
				</div>

				<input type="submit" />
			</form>
		</div>
	);
};

export default Form;
