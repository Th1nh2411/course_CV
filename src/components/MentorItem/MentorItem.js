import classNames from 'classnames/bind';
import styles from './MentorItem.module.scss';
import Image from '../Image';
import images from '../../assets/images';
const cx = classNames.bind(styles);

function MentorItem({ className, data }) {
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('header')}>
                <Image src={data.mentorAvatar} className={cx('img')} />
            </div>
            <div className={cx('body')}>
                <a href={data.link} className={cx('title')}>
                    {data.mentor}
                </a>
                <h4 className={cx('desc')}>{data.description}</h4>
            </div>
        </div>
    );
}

export default MentorItem;
