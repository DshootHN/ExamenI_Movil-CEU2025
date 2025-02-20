import { Ionicons } from "@expo/vector-icons"
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from "react-native"

const tareas = [
    { id: '1', nombre: 'Prueba de Expo', categoria: 'Prueba', fecha: "05/02/2025" },
    { id: '2', nombre: 'Examen Movil', categoria: 'Accesorios', fecha: "05/02/2025" },
    { id: '3', nombre: 'Escritorio', categoria: 'Muebles', fecha: "05/02/2025" },
]

interface TareasScreen {
    tarea: { name: string; description: string; fecha: string },
}

export default function TareasScreen({tarea} : TareasScreen) {

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Ionicons style={styles.headerIcon} name="newspaper" size={32} color="#fff" />
            <Text style={styles.headerText}>Asignaciones Pendientes</Text>
            <FlatList
                data={tareas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    style={styles.item}
                    >
                        <Text style={styles.text}>{item.nombre}</Text>
                        <Text style={styles.text}>Tipo Tarea: {item.categoria}</Text>
                        <Text style={styles.text}>Fecha de Entrega: {item.fecha}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16},
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom:20},
    item: { 
        padding: 10, 
        backgroundColor: "#8dc4fa", 
        borderColor:"#78786d", 
        borderWidth: 1, 
        borderRadius:10},
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