import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:32,
        marginHorizontal:24,
        gap:20,
    },

    header:{
        flexDirection:'row',
        justifyContent:'space-between',
    },

    infos:{
        flexDirection:'row',
        alignItems:'center',
        gap:8,
    },

    createdInfo:{
        fontSize:14,
        color: '#4EA8DE',
        fontWeight:'bold',
    },

    concludeInfo:{
        fontSize:14,
        color: '#8284FA',
        fontWeight:'bold',
    },

    numberInfo:{
        fontSize:12,
        fontWeight:'bold',
        color: '#D9D9D9',
        paddingHorizontal:8,
        paddingVertical:2,
        borderRadius:300,
        backgroundColor:'#333333',
    },
})