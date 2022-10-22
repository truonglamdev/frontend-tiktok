import PropTypes from 'prop-types';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick, separate }) {
    return (
        <Button
            className={cx('menu-item', { separate: data.separate })}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
};
export default MenuItem;
