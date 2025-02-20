import { useAuth } from "@/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";


export default function AddTarea() {
    const [name, setName] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, fechaEntrega] = useState('');
  
    const handlePress = () => {
  
      if (!name.trim()) {
        Alert.alert("Error", "Por favor ingrese el nombre de la tarea.");
        return;
      }
  
      if (!fecha.trim()) {
        Alert.alert("Error", "Por favor ingrese la fecha de Entrega.");
        return;
      }
  
      Alert.alert("Bienvenido", `Hola, ${name}. \n Tienes ${fecha} años.`);
    };
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Ionicons style={styles.headerIcon} name="push" size={32} color="#fff" />
            <Text style={styles.headerText}>Agregar Tarea</Text>
            <TextInput
              style={styles.headerInputText}
              placeholder="Nombre de la Tarea"
              value={name}
              onChangeText={setName}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.headerInputText}
              placeholder="Descripción"
              value={descripcion}
              onChangeText={setDescripcion}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.headerInputText}
              placeholder="Fecha de Entrega"
              value={fecha}
              onChangeText={fechaEntrega}
            />
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={{ color: '#000', fontWeight: 'bold' }}>Agregar</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    header: {
        width: '100%',
        backgroundColor: '#364FC7',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerIcon: {
        marginBottom: 10,
    },
    headerText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    headerInputText: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: "#fff",
        fontSize: 16,
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    button: {
      marginTop: 10,
      backgroundColor: '#FFD700',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    }
  })