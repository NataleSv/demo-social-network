import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';

const SideBar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navItems}>
                <li className={styles.item}>
                    <NavLink to="/profile" className = { navData => navData.isActive ? styles.active : styles.item }> Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs" className = { navData => navData.isActive ? styles.active : styles.item }> Messages</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/users" className = { navData => navData.isActive ? styles.active : styles.item }> Users</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/news" className = { navData => navData.isActive ? styles.active : styles.item }> News</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/music" className = { navData => navData.isActive ? styles.active : styles.item }> Music</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings" className = { navData => navData.isActive ? styles.active : styles.item }> Settings</NavLink>
                </li>
            </ul>

        </nav>
      );
}

export default SideBar;