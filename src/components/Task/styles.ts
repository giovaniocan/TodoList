import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#262626',
        padding:12,
        borderRadius:10,
        marginBottom:8,
    },

    task:{
        color:'#F2F2F2',
        fontSize:16,
    },

    taskFinished:{
        color:'#F2F2F2',
        fontSize:16,
    },
})