import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import PreviewAccount from '../PreviewAccount';
import classNames from 'classnames/bind';
import styles from './SuggestItem.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function SuggestItem({ account }) {
    const renderPreview = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                <PreviewAccount account={account} />
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom" offset={[-32, 0]} render={renderPreview}>
                <div className={cx('wrapper')}>
                    <Image src={account.avatar} className={cx('avatar')} alt={account.nickname} />

                    <div className={cx('info')}>
                        <div className={cx('nickname')}>
                            <strong>{account.nickname}</strong>
                            <span className={cx('check')}>
                                {account.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                            </span>
                        </div>
                        <p className={cx('name')}>{`${account.first_name} ${account.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

SuggestItem.propType = {
    account: PropTypes.object,
};

export default SuggestItem;
