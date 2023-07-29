import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { EmptyList } from "../EmptyList";
import { Task } from "../Task";

interface TasksProps{
    tasks: string[];
    removeTask: (task: string) => void;
}

export function Tasks({tasks, removeTask}:TasksProps){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                 <View style={styles.infos}>
                    <Text style={styles.createdInfo}>Criadas</Text>
                    <Text style={styles.numberInfo}>{tasks.length}</Text>
                 </View>
                 <View style={styles.infos}>
                    <Text style={styles.concludeInfo}>Concluídas</Text>
                    <Text style={styles.numberInfo}>0</Text>
                 </View>
            </View>

            <View>
                <FlatList 
                    data={tasks}
                    keyExtractor={item => item} 
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) =>  <Task task={item} removeTask={removeTask} />}
                    ListEmptyComponent={() => <EmptyList />}
                />
            </View>
        </View>
    )
}