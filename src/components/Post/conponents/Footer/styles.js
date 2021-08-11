import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    like: {
        fontWeight: "bold",
        margin: 3,
    },
    caption: {
        margin: 3,
        color: 'black'
    },
    postedAt: {
        color: "#8c8c8c",
        margin: 3,
    },
    iconsContainer: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
    },
    leftIcons: {
        flexDirection: "row",
        width: 100,
        justifyContent: 'space-between',
    },



});
export default styles;