import { ReactNode } from 'react';
import clsx from 'clsx';
import Styles from './Layout.module.scss';

interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return <div className={clsx('mx-auto', Styles.Layout)}>{children}</div>;
}
