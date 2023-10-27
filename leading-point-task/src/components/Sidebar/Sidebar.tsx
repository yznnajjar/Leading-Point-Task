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
        key: 'Available_units',
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
]

const SETTINGS_MENU: Record<string, MenuItem> = {
    SETTINGS: { label: 'Settings', icon: <SettingOutlined /> },
    HELP_CENTER: { label: 'Help center', icon: <QuestionCircleOutlined /> },
}
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
                    onClick={() => {
                        console.log("Menu clicked")
                    }}
                    defaultSelectedKeys={['projects']}
                    items={MENUS_ITEMS}
                />
            </Sider>
        </div>
    )
}

export default SideBar