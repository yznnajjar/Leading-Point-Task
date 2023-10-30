import { Space, Spin } from "antd";

const LoadingOverlay: React.FC = () => {
    return (
        <>

            <div className={'LoadingOverlay'}>
                <Space size="middle" align={'center'}>
                    <Spin size="large" />
                </Space>
            </div>
        </>
    );
};

export default LoadingOverlay;