import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addReview } from "../redux/feedbackSlice";

const FeedbackForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = useCallback((data) => {
        dispatch(addReview(data));
        reset();
    }, [dispatch, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
            <h2>Оставить отзыв</h2>
            <input placeholder="Name" {...register("name", { required: "Enter your name" })} />
            {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}

            <textarea placeholder="Review" {...register("message", { required: "Enter review" })} />
            {errors.message && <span style={{ color: "red" }}>{errors.message.message}</span>}

            <button type="submit">Отправить</button>
        </form>
    );
};

export default FeedbackForm;
