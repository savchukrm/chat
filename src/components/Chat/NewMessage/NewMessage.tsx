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
            <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input
                    style={styles.input}
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

const styles = {
    form: {
        width: "100%",
        height: "60px",
        backgroundColor: "#292B31",
    },
    input: {
        height: "100%",
        backgroundColor: "#292B31",
        color: "#BBB",
        paddingLeft: "40px",
    },
};

export default NewMessage;
