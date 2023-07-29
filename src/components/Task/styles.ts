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
        gap:8,
        alignItems:'center',
    },

    task:{
        flex:1,
        color:'#F2F2F2',
        fontSize:16,
/*         textDecorationLine:'line-through', */
    },

    taskComleted:{
        flex:1,
        color:'#808080',
        fontSize:16,
        textDecorationLine:'line-through', 
    },

    taskFinished:{
        color:'#F2F2F2',
        fontSize:16,
    },
})