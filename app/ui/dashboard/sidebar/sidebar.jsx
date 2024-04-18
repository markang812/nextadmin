import MenuLink from "./menuLink/menuLink"
import styles from "./sidebar.module.css"
import Image from "next/image"
import {MdDashboard ,MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdOutlineSettings, MdHelpCenter, MdAnalytics, MdWork, MdPeople} from "react-icons/md"
const menuItems =[
    {
        title: "Pages",
        list:[
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />
            },
            {
                title: "Users", 
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />
            },
            {
                title: "Products",
                path: "dashboard/products",
                icon: <MdShoppingBag />
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            }
        ]
    },
    {
        title: "Analytics",
        list:[
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdWork />
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdPeople />
            }
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboar/settings",
                icon: <MdOutlineSettings />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />
            }
        ]
    }
]

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
                <div className={styles.userDetail}>
                    <span className={styles.username}>Mark Ang</span>
                    <span className={styles.userTitle}>Senior Software Engineer</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;