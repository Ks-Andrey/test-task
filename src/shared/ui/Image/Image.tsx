import { type FC, memo, useState } from "react";

type ImageProps = {
    src: string,
    alt?: string,
    className?: string,
    skeletonColor?: string
}

const Image: FC<ImageProps> = ({ src, alt, className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadHandler = () => setIsLoaded(true);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={loadHandler}
        style={{ 
          opacity: isLoaded ? '1' : '0',
          transition: '0.3s',
          position: "relative",
          zIndex: 1
        }}
      />
      {!isLoaded && <span>...</span>}
    </>
  );
};

export default memo(Image);