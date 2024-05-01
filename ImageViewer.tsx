import {StyleSheet, Image, ImageBackground} from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage } : any) {
    const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
    return (
    <ImageBackground source={imageSource} style={styles.image}/>

    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
