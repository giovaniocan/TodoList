import { Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";

import { MaterialIcons } from '@expo/vector-icons';

interface TaskProps{
    task: string
}

export function Task({task}:TaskProps){
    return(
        <View style={styles.container}>
            <Entypo name="circle" size={24} color="#4EA8DE" /> 
           {/* <MaterialIcons name="check-circle" size={24} color="#5E60CE" /> */}
            <Text style={styles.task}>{task}</Text>
            <Feather name="trash-2" size={20} color="#808080" />
        </View>
    )
}