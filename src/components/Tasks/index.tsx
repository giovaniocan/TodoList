import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { EmptyList } from "../EmptyList";

export function Tasks(){
    const [tasks, setTasks] = useState<string[]>([])

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
                    renderItem={({item}) => <Text>{item}</Text>}
                    ListEmptyComponent={() => <EmptyList />}
                />
            </View>
        </View>
    )
}