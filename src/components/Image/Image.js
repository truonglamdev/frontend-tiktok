import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

const  Image = forwardRef(({ className , src,fallback : customFallback = images.noImage  ,alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            {...props}
            alt={alt}
            onError={handleError}
        />
    );
})

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
}

export default Image;
