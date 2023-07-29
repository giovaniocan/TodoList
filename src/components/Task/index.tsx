import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";

import { MaterialIcons } from '@expo/vector-icons';

interface TaskProps{
    task: string
    removeTask: (task: string) => void;
}

export function Task({task, removeTask}:TaskProps){

    function handleParticpantRemove(){
        Alert.alert("Remover", `Tem certeza que deseja remover a task ?`, [
            {
                text:'Sim',
                onPress:() => removeTask(task),
            },
            {
                text:'Não',
                style:'cancel',
            }
        ])
    }

    return(
        <View style={styles.container}>
            <Entypo name="circle" size={24} color="#4EA8DE" /> 
           {/* <MaterialIcons name="check-circle" size={24} color="#5E60CE" /> */}
            <Text style={styles.task}>{task}</Text>
            <TouchableOpacity onPress={handleParticpantRemove}>
                 <Feather name="trash-2" size={20} color="#808080" />
            </TouchableOpacity>
            
        </View>
    )
}