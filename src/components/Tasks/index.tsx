import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { EmptyList } from "../EmptyList";
import { Task } from "../Task";
import { useState } from "react";

interface TasksProps{
    tasks: string[];
    removeTask: (task: string) => void;

}

export function Tasks({tasks, removeTask}:TasksProps){

    const [completedTasks, setCompletedTasks] = useState<string[]>([])

    function handleCompletedTask(CompletedTask: string){
        setCompletedTasks(oldState => [...oldState, CompletedTask])
    }

    function handleIncompletedTask(CompletedTask: string){
        setCompletedTasks(oldState => oldState.filter(item => item !== CompletedTask))
    }

    function handleRemoveTaskWithCompleted(task: string){
        if(completedTasks.includes(task)){
            handleIncompletedTask(task)
            removeTask(task)
        }else{
            removeTask(task)
        
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                 <View style={styles.infos}>
                    <Text style={styles.createdInfo}>Criadas</Text>
                    <Text style={styles.numberInfo}>{tasks.length}</Text>
                 </View>
                 <View style={styles.infos}>
                    <Text style={styles.concludeInfo}>Concluídas</Text>
                    <Text style={styles.numberInfo}>{completedTasks.length}</Text>
                 </View>
            </View>

            <View>
                <FlatList 
                    data={tasks}
                    keyExtractor={item => item} 
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>  <Task completeTask={handleCompletedTask} incompleteTasl={handleIncompletedTask} task={item} removeTask={handleRemoveTaskWithCompleted} />}
                    ListEmptyComponent={() => <EmptyList />}
                />
            </View>
        </View>
    )
}