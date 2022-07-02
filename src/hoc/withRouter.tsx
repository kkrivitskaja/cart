import { useLocation, useNavigate, useParams } from 'react-router-dom';

interface withRouterProps {
    params: ReturnType<typeof useParams>;
    location: ReturnType<typeof useLocation>;
    navigate: ReturnType<typeof useNavigate>;
    history: {
        goBack: () => void,
        location: ReturnType<typeof useLocation>,
        push: (url: string, state?: any) => void,
        replace: (url: string, state?: any) => void,
    };
}

const withRouter = <P extends object>(WrappedComponent: React.ComponentType<P>) => (props: Omit<P, keyof withRouterProps>) => {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const history = {
        goBack: () => navigate(-1),
        location,
        push: (url: string, state?: any) => navigate(url, { state }),
        replace: (url: string, state?: any) => navigate(url, { replace: true, state }),
    };

    return (
        <WrappedComponent
            params={params}
            location={location}
            navigate={navigate}
            history={history}
            {...props as P}
        />
    );
};

export default withRouter;
