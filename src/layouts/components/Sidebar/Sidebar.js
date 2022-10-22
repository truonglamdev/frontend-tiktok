import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import MenuItem, { Menu } from './Menu';
import * as userService from '~/services/userService';
import SuggestAccounts from '~/components/SuggestAccounts/SuggestAccounts';

import config from '~/config';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UseGroupActiveIcon,
    UseGroupIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestAccount, setSuggestAccount] = useState([]);
    // const [followingAccount, setFollowingAccount] = useState([]);
    const [perPage, setPerPage] = useState(5);
    const [isSeeMore, setIsSeeMore] = useState(false);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: perPage })
            .then((data) => {
                setSuggestAccount(data);
            })
            .catch((error) => console.log(error));
    }, [perPage]);

    // useEffect(() => {
    //     userService
    //         .getFollowingList({ page:1 })
    //         .then((data) => {
    //             setFollowingAccount(data);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

    const handleViewChange = (seeMore) => {
        setIsSeeMore((prevState) => !prevState);
        if (seeMore) {
            setPerPage(12);
        } else {
            setPerPage(5);
        }
    };


    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UseGroupIcon />}
                    activeIcon={<UseGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestAccounts
                label={'Suggest Accounts'}
                titleBtn={['See All', 'See Less']}
                data={suggestAccount}
                onViewChange={handleViewChange}
                isSeeMore={isSeeMore}
            />
            <SuggestAccounts label={'Accounts Following'} titleBtn={['See More', 'Hide']} />
        </aside>
    );
}

export default Sidebar;
