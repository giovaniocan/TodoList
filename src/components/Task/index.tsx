import { Alert, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { styles } from "./styles";

import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

interface TaskProps{
    task: string
    removeTask: (task: string) => void;
    completeTask: (task: string) => void;
    incompleteTasl: (task: string) => void;
}

export function Task({task, removeTask, completeTask, incompleteTasl}:TaskProps){
    const [isCompleted, setIsCompleted] = useState(false)

    function handleParticpantRemove(){
        Alert.alert("Remover", `Tem certeza que deseja remover a task :  ${task}`, [
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

    function handleToggleCompletedState(){
        if(isCompleted === false){
            completeTask(task)
            setIsCompleted(true)
        }else{
            incompleteTasl(task)
            setIsCompleted(false)
        
        }
    }
   
   

    return(
        <View style={styles.container}>
             
           {/*  */}
           {isCompleted ? (
                <TouchableOpacity onPress={handleToggleCompletedState}>
                     <MaterialIcons name="check-circle" size={24} color="#5E60CE" />
                </TouchableOpacity>
             )  : (
                <TouchableOpacity onPress={handleToggleCompletedState}>
                     <Entypo name="circle" size={24} color="#4EA8DE" />
                 </TouchableOpacity>
                ) 
           }

            <Text style={isCompleted ? styles.taskComleted : styles.task}>{task}</Text>

            <TouchableOpacity onPress={handleParticpantRemove}>
                 <Feather name="trash-2" size={20} color="#808080" />
            </TouchableOpacity>
            
        </View>
    )
}