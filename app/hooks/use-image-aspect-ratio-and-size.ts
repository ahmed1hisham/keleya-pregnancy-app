import { useEffect, useState } from "react";
import { Image, ImageSourcePropType } from "react-native";

// A hook to get image file actual size and aspect ratio
export const useImageAspectRatioAndSize = ({
  localSource,
  uri,
}: {
  localSource?: ImageSourcePropType;
  uri?: string;
}) => {
  const [aspectRatio, setAspectRatio] = useState(0);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (localSource) {
      const image = Image.resolveAssetSource(localSource);
      setAspectRatio(image.width / image.height);
      setImageDimensions({ width: image.width, height: image.height });
    } else if (uri) {
      Image.getSize(uri, (width, height) => {
        setAspectRatio(width / height);
        setImageDimensions({ width: width, height: height });
      });
    }
  }, [localSource, uri]);

  return { aspectRatio, imageDimensions };
};
