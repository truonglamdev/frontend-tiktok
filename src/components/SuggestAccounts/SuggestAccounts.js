import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import SuggestItem from './SuggestItem';

const cx = classNames.bind(styles);
function SuggestAccounts({ label, titleBtn, data = [], onViewChange,isSeeMore }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>{label}</p>
            {data.map((account) => (
                <SuggestItem key={account.id} account={account} />
            ))}
            {titleBtn && (
                <p className={cx('more-btn')} onClick={() => onViewChange(!isSeeMore)}>
                    {!isSeeMore ? titleBtn[0] : titleBtn[1]}
                </p>
            )}
        </div>
    );
}

SuggestAccounts.propType = {
    label: PropTypes.string.isRequired,
    titleBtn: PropTypes.array,
    data: PropTypes.array,
    onViewChange: PropTypes.func,
};
export default SuggestAccounts;
