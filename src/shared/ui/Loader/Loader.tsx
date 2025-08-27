import { memo, type FC } from "react";

import styles from './Loader.module.scss';
import clsx from "clsx";

type LoaderProps = {
    className?: string
}

const Loader: FC<LoaderProps> = ({ className = "" }) => {
    return <span className={clsx(styles.loader, className)}></span>
}

export default memo(Loader);