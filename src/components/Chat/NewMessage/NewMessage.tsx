import React from "react";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { sendMessage } from "../../../redux/activeChat/slice";

const NewMessage = () => {
    interface IForm {
        messageText: string;
    }
    const dispatch = useDispatch();

    const { register, handleSubmit, reset } = useForm<IForm>();

    const onSubmit: SubmitHandler<IForm> = (data) => {
        dispatch(sendMessage(data.messageText));
        reset();
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Write a message..."
                    {...register("messageText", {
                        required: "Entry text",
                        minLength: 1,
                    })}
                />
                <button type="submit">Send</button>
            </form>
        </>
    );
};

export default NewMessage;
