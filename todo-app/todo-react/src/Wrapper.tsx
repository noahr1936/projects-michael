import { Sidebar } from "./Sidebar";
import { Todos } from "./todos/Todos";

export function Wrapper() {
    return (
        <div css={{ width: "100%", display: "flex", flexDirection: "column", height: "100%" }}>
            <header
                css={{
                    backgroundColor: "#2564cf",
                    height: 50,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                <span>To Do</span>
            </header>
            <main css={{ display: "flex", flexDirection: "row", height: "100%" }}>
                <Sidebar />
                <Todos />
            </main>
        </div>
    );
}
