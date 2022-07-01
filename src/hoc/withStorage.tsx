import { useReactiveVar } from '@apollo/client';

import storage from '../storage/initialState';
import { storageVarType } from '../types/types'

interface withStorageProps {
    storageVar: storageVarType
}

const withStorage = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    return (props: Omit<P, keyof withStorageProps>) => {
        const storageVar = useReactiveVar(storage);
        return <WrappedComponent storageVar={storageVar} {...props as P} />;
    };
};

export default withStorage;
