import { Component } from 'react';

import { ReactComponent as Error } from '../../assets/404-error-icon.svg';
import styles from './PageNotFound.module.scss';

const steps=['Shipping', 'Review&Payments', 'Succes']
class PageNotFound extends Component {
    render() {
        return (
            <>
                <div className={styles['message']}>
                    <Error/>
                    <span className={styles['message-title']}>OOPS! PAGE NOT BE FOUND </span>
                    Sorry but the page you are looking for does not exist, have been removed. name
                    changed or is temporarily unavailable
                </div>
                
            </>
        );
    }
}

export default PageNotFound;
