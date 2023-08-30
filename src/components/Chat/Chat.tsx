import React from "react";
import NewMessage from "./NewMessage/NewMessage";
import ButtonOption from "./NewMessage/img/svg/buttonOption";

const Chat = () => {
    return (
        <>
            <div style={styles.chatName}>
                <div>
                    <div style={styles.chatTitle}>
                        <img src="" alt="" />
                        <p style={styles.nameTitle}>
                            Why Imagine Dragons supports Ukraine through the
                            UNITED24 platform?
                        </p>
                    </div>

                    <div style={styles.chatPeople}>
                        <img src="" alt="" />
                        <p style={styles.namePeople}>23 Members, 15 online </p>
                    </div>
                </div>
                <div style={styles.chatBtn}>
                    <button style={styles.chatNameBtn}>
                        <ButtonOption />
                    </button>
                </div>
            </div>
            <div style={styles.chatBox}></div>
            <NewMessage />
        </>
    );
};

const styles = {
    chatName: {
        backgroundColor: "#292B31",
        width: "100%",
        minHeight: "91px",
        padding: "17px 0 26px 40px",
        display: "flex",
        justifyContent: "space-between",
    },
    chatTitle: {
        display: "flex",
    },
    nameTitle: {
        color: "#fff",
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "125%",
    },
    chatPeople: {
        display: "flex",
        paddingTop: "8px",
    },
    namePeople: {
        color: " #BBB",
        fontSize: "14px",
        lineHeight: "142.857%",
    },
    chatBtn: { paddingRight: "40px" },
    chatNameBtn: {
        borderRadius: "1000px",
        backgroundColor: "#222326",
        width: "30px",
        height: "30px",
    },
    chatBox: {
        width: "100%",
        minHeight: "561px",
        backgroundColor: "#222326",
    },
};

export default Chat;
