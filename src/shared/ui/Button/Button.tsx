import clsx from "clsx";
import { memo, type FC, type ButtonHTMLAttributes } from "react";

import styles from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    typeStyle?: 'accent' | 'danger' | 'standard';
};

const Button: FC<ButtonProps> = ({ className = "", typeStyle = 'standard', children, ...rest }) => {
    return (
        <button
            className={clsx(styles.button, styles[typeStyle], className)}
            {...rest}
        >
            {children}
        </button>
    )
}

export default memo(Button);
