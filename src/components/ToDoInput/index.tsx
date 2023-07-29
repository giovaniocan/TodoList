import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";
import { useState } from "react";

interface ToDoProps{
    addTask: (task: string) => void;
}

export function ToDoInput({addTask}:ToDoProps){
    const [isFocused, setIsFocused] = useState(false);
    const [taskName, setTaskName] = useState('');

    const handleFocus = () => setIsFocused(true);

    function handleAddTask(){
        if(taskName.trim() === ''){
            return Alert.alert('Campo vazio', 'preencha uma task valida para adicionar')
        }
        

        addTask(taskName)

        setTaskName('');
        setIsFocused(false);
    }

    return(
        <View style={styles.container}>
         
            <TextInput 
            style={[
                styles.input,
                isFocused && styles.inputFocused,
              ]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor='#808080'
            onFocus={handleFocus}
            onChangeText={name => setTaskName(name)}
            value={taskName}
            />   

            <TouchableOpacity
                style={styles.button}
                onPress={handleAddTask}
            >
                <AntDesign name="pluscircleo" size={18} color="#fff" /> 
            </TouchableOpacity>
        </View>
    )
}