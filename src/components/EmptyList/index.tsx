import { Image, Text, View } from "react-native";

import emptyImage from '../../../assets/Clipboard.png'
import { styles } from "./styles";

export function EmptyList(){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={emptyImage} />
            <Text style={styles.firstLine}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.secondLine}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}