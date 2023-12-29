import Image from '@/shared/Image';
import clsx from 'clsx';
import { VendorDetails } from '../../types';
import Styles from './VendorCard.module.scss';
import { formatNumberWithCommas, toFa } from '@/utils';
import Rate from '../Rate';

interface Props extends VendorDetails {
    className?: string;
}

const getDeliveryFee = (fee: number) =>
    fee > 0 ? `${toFa(formatNumberWithCommas(fee))} تومان` : 'رایگان';

export default function VendorCard({
    className,
    logo,
    countReview,
    backgroundImage,
    deliveryFee,
    description,
    rate,
    title,
    deliveryTime,
}: Props) {
    return (
        <div className={clsx('p-2', className)}>
            <div className='relative'>
                <Image
                    src={backgroundImage}
                    width='100%'
                    height='114px'
                    objectFit='cover'
                    borderRadius={8}
                />

                <div
                    className={clsx(
                        'absolute bg-white radius-rounded',
                        Styles.VendorCard__logo,
                    )}
                >
                    <Image
                        src={logo}
                        width='54px'
                        height='54px'
                        objectFit='cover'
                        borderRadius='50%'
                        className='border-ultralight'
                    />
                </div>
            </div>

            <div className='flex jc-between ai-center mt-8'>
                <p className='text-bold-1 color-gray'>{title}</p>
                <div className='flex ai-center'>
                    <span className='color-gray-light'>{`(${toFa(
                        countReview,
                    )})`}</span>

                    <Rate rate={rate} className='mr-2' />
                </div>
            </div>

            <p className='text-normal mt-1'>{description}</p>

            <div className='flex jc-between'>
                <p className='text-normal mt-1'>{`پیک رستوران: ${getDeliveryFee(
                    deliveryFee,
                )}`}</p>

                {deliveryTime > 0 && <p>{`تا ${toFa(deliveryTime)} دقیقه`}</p>}
            </div>
        </div>
    );
}
