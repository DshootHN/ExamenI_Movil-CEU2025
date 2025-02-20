import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";


export default function LoginScreen() {
const [email, setEmail] = useState('');
const router = useRouter();
const {login} = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TouchableOpacity style={styles.button} onPress={()=>{login(email); router.replace('/home')}}>
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFF",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    title: { 
      fontSize: 24, 
      fontWeight: 'bold', 
      marginBottom: 20, 
      textAlign: 'center' 
    },
    input: { height: 40, 
      borderWidth: 1, 
      borderColor: '#ccc', 
      paddingHorizontal: 10, 
      marginBottom: 10 
    },
    userText: { fontSize: 16, 
      fontWeight: 'bold', 
      color: '#555', 
      textAlign: 'center', 
      marginTop: 20 
    },
    button: {
      marginTop: 10,
      backgroundColor: "#FFD700",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    buttonText: {
      color: "#000",
      fontWeight: "bold",
    },
  });