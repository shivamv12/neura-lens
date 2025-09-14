/** Package Imports */
import { Modal } from 'react-native';
import ImageViewerLib from 'react-native-image-zoom-viewer';

/** Components/Utils/Styles/Types Imports */


const ImageViewer = ({ imageUri, onClose }: { imageUri: string; onClose?: () => void; }) => {
  // Improvement, allow orientation change for full screen image.
  return (
    <Modal visible={!!imageUri} transparent={true}>
      <ImageViewerLib
        imageUrls={[{ url: imageUri }]}
        enableSwipeDown
        onSwipeDown={onClose}
        onClick={onClose}
      />
    </Modal>
  );
};

export default ImageViewer;
