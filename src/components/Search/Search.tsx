import styles from './Search.module.css';
import cn from 'classNames';
import { SearchProps } from './Search.props';
import { forwardRef } from 'react';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, className, ...props }, ref) {
    return (
        <div className={styles['input-wrapper']}>
            <input ref={ref} className={cn(styles['input'], className, {
                [styles['invalid']]: isValid
            })} {...props} />
            <img className={styles['icon']} src='/search-icon.svg' alt='Иконка лупы' />
        </div>
    );
});

export default Search;