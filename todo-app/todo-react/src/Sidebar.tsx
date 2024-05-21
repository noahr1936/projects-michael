import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const Sidebar = () => {
    return (
        <aside css={{ width: 290 }}>
            <ul>
                <Item text="My Day">
                    <WbSunnyOutlinedIcon />
                </Item>
                <Item text="Important">
                    <StarBorderOutlinedIcon />
                </Item>
                <Item text="Planned">
                    <CalendarMonthOutlinedIcon />
                </Item>
                <Item text="Assigned To Me">
                    <PersonOutlineOutlinedIcon />
                </Item>
                <Item text="Tasks">
                    <HomeOutlinedIcon />
                </Item>
            </ul>
        </aside>
    );
};

interface ItemProps {
    children: React.ReactNode;
    text: string;
}
const Item = ({ children, text }: ItemProps) => (
    <div>
        <li>
            <div css={{ display: "flex", alignItems: "center", padding: "12px 24px 12px 24px" }}>
                {children}
                <span css={{ marginLeft: 16 }}>{text}</span>
            </div>
        </li>
    </div>
);
