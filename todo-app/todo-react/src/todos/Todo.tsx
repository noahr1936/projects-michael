import { CSSObject } from "@emotion/react";
import { ITodo } from "./Todos";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useState } from "react";

const todocss: CSSObject = {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    padding: 25,
};

interface TodoProps {
    todo: ITodo;
}

export function Todo(props: TodoProps) {
    const { completed, note, task } = props.todo;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div css={[todocss]}>
            <div css={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <input type="radio" checked={completed} />
                <span css={{ flex: 1 }}>{task}</span>
                <span css={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}>
                    <ArrowDropDownOutlinedIcon />
                </span>
            </div>
            {isOpen && <div id="dropdown">{note}</div>}
        </div>
    );
}
