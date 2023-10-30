import Spinner from 'components/Spinner';

const SplashPage = () => {
    return (
        <div className="bg-ui dark:bg-ui-dark grid content-center h-[100vh]">
            <Spinner variant="normal" message="Loading" />
        </div>
    );
};

export default SplashPage;
