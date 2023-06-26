import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>
            <img
               className={cx('avatar')}
               src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4dbb77b350208c84988745b99936e2b1~c5_100x100.jpeg?x-expires=1687834800&x-signature=OT65tbE%2BVHw%2BUp6y563oxdD8KqY%3D"
               alt=""
            />
            <Button className={cx('follow-btn')} primary>
               Follow me
            </Button>
         </div>
         <div className={cx('body')}>
            <p className={cx('nickname')}>
               <strong>ThanhTho1103</strong>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Lê Thành Thọ</p>
            <p className={cx('analytics')}>
               <strong className={cx('value')}>7.7M </strong>
               <span className={cx('label')}>Followers</span>
               <strong className={cx('value')}>8.9M </strong>
               <span className={cx('label')}>Likes</span>
            </p>
         </div>
      </div>
   );
}

export default AccountPreview;
