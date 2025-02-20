import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { Button, Text, View, StyleSheet } from "react-native";


export default function HomeScreen() {
    const router = useRouter();
    const { user, logout } = useAuth();

    return (
        <View style={styles.container}>
          <Text style={styles.userText}>Usuario actual: {user?.email || 'Desconocido'}</Text>
          <Text style={styles.title}>Diario de Tareas</Text>
        </View>
      );

}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
    input: { height: 40, borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 10, marginBottom: 10 },
    userText: { fontSize: 16, fontWeight: 'bold', color: '#555', textAlign: 'center', marginTop: 20 },
  });