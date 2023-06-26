import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
   const renderPreview = (props) => {
      return (
         <div tabIndex="-1" {...props}>
            <PopperWrapper>
               <AccountPreview />
            </PopperWrapper>
         </div>
      );
   };

   return (
      <div>
         <Tippy interactive delay={[800, 0]} offset={[-19, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
               <img
                  className={cx('avatar')}
                  src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4dbb77b350208c84988745b99936e2b1~c5_100x100.jpeg?x-expires=1687834800&x-signature=OT65tbE%2BVHw%2BUp6y563oxdD8KqY%3D"
                  alt=""
               />
               <div className={cx('item-info')}>
                  <p className={cx('nickname')}>
                     <strong>ThanhTho1103</strong>
                     <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                  </p>
                  <p className={cx('name')}>Lê Thành Thọ</p>
               </div>
            </div>
         </Tippy>
      </div>
   );
}

export default AccountItem;
