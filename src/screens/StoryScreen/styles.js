import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    container: {
        height: "100%",
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
        width: "100%"
    },
    userInfo: {
        marginTop: 10.0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userName: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    postedTime: {
        color: '#808080',
        fontWeight: '700',

        fontSize: 16,
        marginLeft: 10,
    },
    bottomContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        marginHorizontal: 10,
    },
    cameraButton: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: 'white',
    },
    messageButton: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputContainer: {
        flex: 1,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
        paddingHorizontal: 6.0,
        height: 50,
    },
    textInput: {
        height: "100%",
        color: "white",
        fontSize: 16,
    }

});
export default styles;