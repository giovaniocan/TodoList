import { View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { ToDOInput } from "../../components/ToDoInput";
import { Tasks } from "../../components/Tasks";

export function Home(){
    return(
        <View style={styles.container}>
             <Header />
             <ToDOInput />
             <Tasks />
        </View>
    )
}