import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
            <h2>Регистрация</h2>
            <input placeholder="Имя" {...register("name", { required: "Введите имя" })} />
            {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}

            <input type="email" placeholder="Email" {...register("email", { required: "Введите email" })} />
            {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

            <input type="password" placeholder="Пароль" {...register("password", { required: "Введите пароль", minLength: { value: 6, message: "Минимум 6 символов" } })} />
            {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}

            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default RegisterForm;
