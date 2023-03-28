import { useEffect } from 'react';
import styles from '../BurgerMenu.module.css';
import NavbarList from './Lists/NavbarList';

interface MenuProps {
    isMobile: boolean;
    open: boolean;
    onClose: () => void;
}

function BurgerMenu(props: MenuProps) {
    const { isMobile, open, onClose } = props;

    useEffect(() => {
        function fn(event: KeyboardEvent) {
            if (event.keyCode === 27) {
                onClose();
            }
        }
        document.addEventListener('keydown', fn);
        return () => document.removeEventListener('keydown', fn);
    }, [onClose]);

    return (
        <div>
            <div
                onClick={onClose}
                role="presentation"
                data-open={JSON.stringify(open)}
                className={styles.overlay}
            />
            <div data-open={JSON.stringify(open)} className={styles.menu}>
                <NavbarList isMobile={isMobile} onClose={onClose} />
            </div>
        </div>
    );
}

export default BurgerMenu;