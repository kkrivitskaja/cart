import { ApolloClient, ApolloConsumer } from '@apollo/client';

interface withApolloClientProps {
    client: ApolloClient<object>}

const withApolloClient = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return (props: Omit<P, keyof withApolloClientProps>) => (
        <ApolloConsumer>
            {(ApolloClient) => {
                return <WrappedComponent client={ApolloClient} {...props as P} />;
            }}
        </ApolloConsumer>
    );
};

export default withApolloClient;
