import { ImgComponentProps } from "./types";
import { Image } from "./styles";

function ImageComponent({ src, alt, className }: ImgComponentProps) {

  return <Image src={src} alt={alt} className={className} />
}

export default ImageComponent;
