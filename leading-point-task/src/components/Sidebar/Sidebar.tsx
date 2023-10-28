import { SettingOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';

// Style
import './Sidebar.scss';

const { Sider } = Layout;

interface MenuItem {
    label: string;
    icon: JSX.Element | string;
}



const MENUS_ITEMS: MenuProps['items'] = [
    {
        label: 'Dashboard',
        key: 'Dashboard',
        icon: <img src='dashboard.svg' />,
    },
    {
        label: 'Available units',
        key: 'units',
        icon: <img src='units.svg' />,
    },
    {
        label: 'Invoices',
        key: 'invoices',
        icon: <img src='invoices.svg' />,
    },
    {
        label: 'Projects',
        key: 'projects',
        icon: <img src='projects.svg' />,
    },
    {
        label: 'Socail media',
        key: 'Socail_media',
        icon: <img src='share.svg' />,
    },
    {
        label: 'Integrations',
        key: 'integrations',
        icon: <img src='integration.svg' />,
    },
    {
        label: 'Documentation',
        key: 'documentation',
        icon: <img src='doc.svg' />,
    },
    {
        label: 'Settings',
        key: 'settings',
        className:"custom-menu-item",
        icon: <img src='settings.svg'/>,
    },
    {
        label: 'Help center',
        key: 'help_center',
        className:"help-center-class",
        icon: <img src='help-outline.svg' />,
    },
    {
        label: 'Louise Thompson',
        key: 'name',
        icon: <img src='user.svg' />,
    },
]


const SideBar = () => {
    return (
        <div className="sidebar">
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                width={"240"}
            >
                <div className="sidebar--logo" >
                    <img src="/Logo.svg" alt="My Logo" />
                </div>
                <Menu
                    className="sidebar__menu"
                    onClick={() => {
                        console.log("Menu clicked")
                    }}
                    defaultSelectedKeys={[location.pathname.replace('/','')]}
                    items={MENUS_ITEMS}
                />
            </Sider>
        </div>
    )
}

export default SideBar