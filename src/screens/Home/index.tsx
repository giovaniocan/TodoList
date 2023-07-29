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

    return(
        <View style={styles.container}>
             <Header />
             <ToDoInput addTask={handleAddTask} />
             <Tasks tasks={tasks} />
        </View>
    )
}