import { View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { ToDoInput } from "../../components/ToDoInput";
import { Tasks } from "../../components/Tasks";
import { useState } from "react";

export function Home(){
    const [tasks, setTasks] = useState<string[]>([])

    function handleAddTask(newTaskTitle: string){
        setTasks(oldState => [...oldState, newTaskTitle])
    }

    function handleRemoveTask(task: string){
        setTasks(oldState => oldState.filter(item => item !== task))
    }

    return(
        <View style={styles.container}>
             <Header />
             <ToDoInput tasks={tasks} addTask={handleAddTask} />
             <Tasks removeTask={handleRemoveTask}  tasks={tasks} />
        </View>
    )
}