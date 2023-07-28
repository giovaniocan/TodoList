import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from "./styles";
import { useState } from "react";

export function ToDOInput(){
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);

    function handleAddTask(){
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
            />   

            <TouchableOpacity style={styles.button} onPress={handleAddTask}>
                <AntDesign name="pluscircleo" size={16} color="#fff" /> 
            </TouchableOpacity>
        </View>
    )
}