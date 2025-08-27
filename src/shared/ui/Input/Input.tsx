import { forwardRef, memo, type ForwardedRef, type InputHTMLAttributes } from "react"
import clsx from "clsx"

import styles from './Input.module.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    type?: 'text' | 'number';
};

const Input = (
    { className = "", placeholder = "", required = false, type = 'text', ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
) => {
    return (
        <input
            ref={ref}
            type={type}
            className={clsx(styles.input, className)}
            placeholder={placeholder}
            required={required}
            {...rest}
        />
    )
}

export default memo(forwardRef(Input))
