import React from "react";
import { useSelector } from "react-redux";

const FeedbackList = () => {
    const reviews = useSelector((state) => state.feedback.reviews);

    return (
        <div style={{ marginTop: "30px" }}>
            <h2>Отзывы</h2>
            {reviews.length === 0 ? (
                <p></p>
            ) : (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            {review.name}: {review.message}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FeedbackList;
