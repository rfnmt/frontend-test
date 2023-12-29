import { toFa } from '@/utils';
import clsx from 'clsx';

interface Props {
    className?: string;
    rate: number;
}

export default function Rate({ rate, className }: Props) {
    return (
        <div
            className={clsx('bg-gray-ultralight radius-8 py-1 px-2', className)}
        >
            ★ {toFa(rate)}
        </div>
    );
}
