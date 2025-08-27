import { memo, type FC, type ReactNode } from "react";

import styles from './Container.module.scss';
import clsx from "clsx";

type ContainerProps = {
    className?: string,
    children: ReactNode
}

const Container: FC<ContainerProps> = ({ className = "", children }) => {
    return <div className={clsx(styles.container, className)}>{children}</div>
}

export default memo(Container);