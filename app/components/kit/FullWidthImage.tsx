import React, { FunctionComponent, memo, useEffect, useState } from "react";
import { Image, ImageSourcePropType, useWindowDimensions } from "react-native";

// This component renders an image with full screen width, while maintaining the image aspect ratio
const FullWidthImage: FunctionComponent<{
  localSource?: ImageSourcePropType;
  uri?: string;
}> = ({ localSource, uri }) => {
  const { width: screenWidth } = useWindowDimensions();
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (localSource) {
      const image = Image.resolveAssetSource(localSource);
      const scaleFactor = image.width / screenWidth;
      const imageHeight = image.height / scaleFactor;
      setImageDimensions({ width: screenWidth, height: imageHeight });
    } else if (uri) {
      Image.getSize(uri, (width, height) => {
        const scaleFactor = width / screenWidth;
        const imageHeight = height / scaleFactor;
        setImageDimensions({ width: screenWidth, height: imageHeight });
      });
    }
  }, [localSource, uri]);
  return (
    <Image
      source={localSource ?? { uri }}
      style={{
        width: imageDimensions.width,
        height: imageDimensions.height,
      }}
    />
  );
};

export default memo(FullWidthImage);
