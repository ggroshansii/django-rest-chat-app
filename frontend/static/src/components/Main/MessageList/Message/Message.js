import React from "react";
import "./Message.css";
import { FiSend } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Message(props) {
    const [updatedText, setUpdatedText] = useState("");
    const [editMessageFlag, setEditMessageFlag] = useState(false);

    function handleCloseClick(e) {
        props.deleteMessage(e.currentTarget.value);
    }

    function handleEditClick(e) {
        // props.updateMessage(e.currentTarget.value)
        setEditMessageFlag(true);
    }
    function handleSubmitEdit(e) {
        setEditMessageFlag(false);
        let updatedObj = { ...props };
        updatedObj.body = updatedText;
        props.updateMessage(e.currentTarget.value, updatedObj);
    }

    function handleChange(e) {
        setUpdatedText(e.currentTarget.value);
    }

    console.log("PROPSSSSSSS", props);

    let htmlRendered;

    if (editMessageFlag) {
        htmlRendered = (
            <>
                <div className="message-bubble-editing">
                    <div className="message-icon-container">
                        <button
                            type="submit"
                            value={props.id}
                            onClick={(e) => handleSubmitEdit(e)}
                            className="message-submit-edit-btn"
                        >
                            <FiSend />
                        </button>
                    </div>

                    <input
                        onChange={(e) => handleChange(e)}
                        value={updatedText}
                        type="textarea"
                        placeholder="Edit message here..."
                        className="form-control"
                    />
                    <span className="message-content-author">
                        {props.username}:
                    </span>
                </div>
            </>
        );
    } else {
        htmlRendered = (
            <div className={props.currentUser.username === props.username ? "message-bubble-user" : "message-bubble"}>
                {props.currentUser.username === props.username ? (
                    <div className="message-icon-container">
                        <button
                            onClick={(e) => handleEditClick(e)}
                            className="message-edit-btn"
                        >
                            <FaRegEdit />
                        </button>
                        <button
                            value={props.id}
                            onClick={(e) => handleCloseClick(e)}
                            className="message-close-btn"
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                ) : (
                    ""
                )}

                <div className="message-content-container">
                    <span className="message-content-author">
                        {props.username}:
                    </span>
                    <span className="message-content-body">{props.body}</span>
                </div>
            </div>
        );
    }

    return <>{htmlRendered}</>;
}
