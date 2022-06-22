import { Component } from 'react';

import styles from './PageNotFound.module.scss';


class PageNotFound extends Component {
    render() {
        return (
            <>
                <div className={styles['message']}>
                    <span className={styles['message-title']}>OOPS! PAGE NOT BE FOUND </span>
                    Sorry but the page you are looking for does not exist, have been removed. name
                    changed or is temporarily unavailable
                </div>
            </>
        );
    }
}

export default PageNotFound;
