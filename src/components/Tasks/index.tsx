import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { EmptyList } from "../EmptyList";
import { Task } from "../Task";

export function Tasks(){
    const [tasks, setTasks] = useState<string[]>(['ir para o pilates', 'ir para a academia', 'estudar ingles'])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                 <View style={styles.infos}>
                    <Text style={styles.createdInfo}>Criadas</Text>
                    <Text style={styles.numberInfo}>0</Text>
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
                    renderItem={({item}) => <Task task={item} />}
                    ListEmptyComponent={() => <EmptyList />}
                />
            </View>
        </View>
    )
}