import { CSSProperties } from 'react';

interface Props {
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
    objectFit?: CSSProperties['objectFit'];
    src: string;
    alt?: string;
    className?: string;
    borderRadius?: CSSProperties['borderRadius'];
}

export default function Image({
    height,
    src,
    width,
    alt,
    objectFit = 'contain',
    className,
    borderRadius,
}: Props) {
    return (
        <div
            style={{
                width,
                height,
                borderRadius,
            }}
            className={className}
        >
            <img
                className='w-100 h-100'
                src={src}
                style={{
                    objectFit: objectFit,
                    borderRadius,
                }}
                alt={alt}
            />
        </div>
    );
}
