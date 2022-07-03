import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import { ReactComponent as Menu } from '../../assets/menu-icon.svg';
import { ReactComponent as Close } from '../../assets/close-icon.svg';
import { CategoryType } from '../../types/types'

import styles from './NavigationBar.module.scss';

interface NavigationBarProps{
    category: CategoryType[] | null;
}

interface NavigationBarState {
    click: boolean;
}

class NavigationBar extends Component<NavigationBarProps, NavigationBarState> {
    state: NavigationBarState = {
        click: false,
    };

    toggle = () => {
        this.setState(({ click }) => ({ click: !click }));
    };

    closeMobileMenu = () => {
        this.setState({ click: false });
    };

    onKeydown = ({ key }: { key:string }) => {
        switch (key) {
            case 'Escape':
                this.closeMobileMenu();
                break;
            default:
                break;
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.onKeydown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeydown);
    }

    render() {
        const { category } = this.props;

        return (
            <>
                <div className={styles['nav']}>
                    {this.state.click && (
                        <div className={styles['nav-overlay']} onClick={this.toggle}></div>
                    )}
                    <div className={styles['nav-icon']} onClick={this.toggle}>
                        {this.state.click ? <Close /> : <Menu />}
                    </div>
                    <div
                        className={
                            this.state.click
                                ? `${styles['nav-menu']} ${styles['nav-menu--active']}`
                                : styles['nav-menu']
                        }
                        onClick={this.closeMobileMenu}
                    >
                        {category?.map((item) => (
                            <NavLink
                                to={`/catalog/${item.name}`}
                                key={item.name}
                                className={({ isActive }) =>
                                    classnames(styles['nav-link'], {
                                        [styles['nav-link--active']]: isActive,
                                    })
                                }
                                onClick={this.closeMobileMenu}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default NavigationBar;
