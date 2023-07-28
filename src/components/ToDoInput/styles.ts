import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        marginTop:-28,
        flex:1,
        marginHorizontal:24,
        flexDirection:"row",
        gap:4,
    
    },

    input:{
        height:56,
        flex:1,
        borderRadius:5,
        backgroundColor:'#262626',
        color: '#F2F2F2',
        padding:16,
        fontSize:16,

        
    },

    inputFocused: {
        borderWidth: 1, // Define uma largura para a borda
        borderColor: '#5E60CE', // Cor da borda quando o input estiver em foco
      },

      button:{
        height:56,
        backgroundColor: '#1E6F9F',
        padding:18,
        borderRadius:6,

      },
})