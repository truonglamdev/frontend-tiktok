import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import ConvertLikeFollow from '~/utilts/ConvertLikeFollow';
import styles from './PreviewAccount.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
function PreviewAccount({ account }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image src={account.avatar} className={cx('avatar')} alt={account.nickname} />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <div className={cx('nickname')}>
                    <strong>{account.nickname}</strong>
                    <span className={cx('check')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </div>
                <strong className={cx('name')}>{`${account.first_name} ${account.last_name}`}</strong>
                <div className={cx('interactive')}>
                    <strong className={cx('follow-count')}>{ConvertLikeFollow(account.followers_count)}</strong>
                    <p className={cx('follower')}>Followers</p>
                    <strong className={cx('like-count')}>{ConvertLikeFollow(account.likes_count)}</strong>
                    <p className={cx('like')}>Likes</p>
                </div>
            </div>
        </div>
    );
}

PreviewAccount.propType = {
    account: PropTypes.object,
};
export default PreviewAccount;
