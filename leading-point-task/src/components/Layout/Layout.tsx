import React, { ReactNode } from "react";
import { Layout as AntdLayout, Col, Row } from "antd";
import classnames from "classnames";

// Components
import SideBar from "components/Sidebar";
// Style
import "./Layout.scss";

const { Content } = AntdLayout;

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <React.Suspense fallback={<div />}>
            <AntdLayout
                key="main-layout"
                className={classnames({
                    "app-layout": true

                })}
            >
                <SideBar />

                <AntdLayout>
                    <Content>
                        <Row>
                            <Col xs={24} sm={18} md={12} lg={8} xl={6}>
                                {/* Your content */}
                                {children}
                            </Col>
                        </Row>
                    </Content>


                </AntdLayout>
            </AntdLayout>
        </React.Suspense>
    );
};

export default Layout;
