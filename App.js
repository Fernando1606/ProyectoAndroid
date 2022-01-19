import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 50,
          }}>
          <Text style={{ fontSize: 25, textAlign: 'center' }}>
            Bienvenido a la historia de los dispositivos
          </Text>
          <Image
            source={{
              uri: 'https://www.moviles.com/fotos/blackberry-blackberrycurve8330-2048-g.jpg',
            }}
            style={{ width: 250, height: 350, marginTop: 30 }}
          />
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
              }}>
              Fecha de Lanzamiento:
            </Text>
            <Text style={{ textAlign: 'center' }}>
              15 de febrero del 2015
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
                paddingLeft: 8,
              }}>
              Historia:
            </Text>
            <Text style={{ textAlign: 'center' }}>
              BlackBerry es una marca de teléfonos inteligentes desarrollada por
              la compañía canadiense BlackBerry,3​ que integra el servicio de
              correo electrónico móvil desde 1999; aunque incluye las
              aplicaciones típicas de un teléfono inteligente: libreta de
              direcciones, agenda, calendario, lista de tareas, bloc de notas,
              navegador, aplicaciones de redes sociales, así como cámara de
              fotografía integrada en todos los dispositivos. BlackBerry se hizo
              famosa por su teclado QWERTY incorporado, y por su capacidad para
              enviar y recibir correos electrónicos de Internet accediendo a las
              redes de las compañías de telefonía celular que brindan este
              servicio. Debido a esta popularidad, el término blackberry también
              ha pasado a ser de uso común para hacer referencia a cualquier
              teléfono celular inteligente que incorpore un teclado completo.
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
                paddingLeft: 8,
              }}>
              Conclusion:
            </Text>
            <Text style={{ textAlign: 'center' }}>
              Teléfono muy seguro
            </Text>
          </Text>

          <Image
            source={{
              uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/main_card_image/https/bdt.computerhoy.com/sites/default/files/Galaxy-SII-Plus-I9105.png?itok=AfyeSPZG',
            }}
            style={{ width: 250, height: 450, marginTop: 30 }}
          />
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
              }}>
              Fecha de Lanzamiento:
            </Text>
            <Text style={{ textAlign: 'center'}}>
              13 de febrero del 2011
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
                paddingLeft: 8,
              }}>
              Historia:
            </Text>
            <Text style={{ textAlign: 'center'}}>
              El Samsung Galaxy S II (GT-I9100) es un teléfono inteligente
              anunciado por Samsung el 13 de febrero de 2011 en el Mobile World
              Congress, y lanzado en mayo del mismo año.5​ Es el sucesor del
              Samsung Galaxy S.
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
                paddingLeft: 8,
              }}>
              Conclusion:
            </Text>
            <Text style={{ textAlign: 'center'}}>
              Cámara muy potente para la época
            </Text>
          </Text>
          <Image
            source={{
              uri: 'https://cdn-files.kimovil.com/phone_front/0001/26/thumb_25780_phone_front_big.jpeg',
            }}
            style={{ width: 250, height: 450, marginTop: 30 }}
          />
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
              }}>
              Fecha de Lanzamiento:
            </Text>
            <Text style={{ textAlign: 'center'}}>
              8 de abril del 2013
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
                paddingLeft: 8,
              }}>
              Historia:
            </Text>
            <Text style={{ textAlign: 'center'}}>
              El HTC One está llamado a ser uno de los smartphones importantes
              de este 2013. Sus argumentos son muy convincentes: más publicidad
              en los medios, diseño magnífico y una arriesgada jugada con la
              cámara de fotos que demuestra que es el momento de apostar al todo
              o nada.{' '}
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                paddingTop: 10,
                fontWeight: 'bold',
                paddingLeft: 8,
              }}>
              Conclusion:
            </Text>
            <Text style={{ textAlign: 'center'}}>
              Un teléfono hecho para escuchar música
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
function ListScreen({ navigation, route }) {
  const [instrumento, setInstrumento] = React.useState('');
  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
      }}>
      <Image
        source={{
          uri: 'data:image/png;base64,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',
        }}
        style={{ width: 50, height: 50, marginRight: 5 }}
      />
      <View>
        <Text
          style={{
            fontFamily: 'Gill Sans Extrabold',
          }}>
          {item.nombre}
        </Text>
        <Text
          style={{
            fontFamily: 'Comic',
            color: 'gray',
          }}>
          {item.instrumento}
        </Text>
        <Image
          source={{
            uri: 'https://cpng.pikpng.com/pngl/s/363-3630181_de-venta-en-fondos-png-linea-azul-clipart.png',
          }}
          style={{ height: 10, width: 200, marginBottom: 15 }}
        />
      </View>
    </View>
  );
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: 50,
        }}>
        <Text style={{ fontSize: 25, textAlign: 'center' }}>
          Busca aquí tus usuarios por instrumento
        </Text>
        <TextInput
          placeholder="Escribe el instrumento"
          onChangeText={(x) => setInstrumento(x)}
          keyboardType="alphabetic"
          style={{
            fontSize: 15,
            paddingTop: 25,
            paddingBottom: 35,
            marginLeft: 5,
          }}
        />
        <Button
          title="Buscar"
          color="#0015FF"
          onPress={() => navigation.navigate('Usuarios', { z: instrumento })}
        />
        <FlatList
          data={usuarios}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}>
          marginTop: 25
        </FlatList>
      </View>
    </ScrollView>
  );
}
function UserScreen({ route }) {
  const { z } = route.params;

  function funcionFiltrado({ item }) {
    if (item.instrumento == z) {
      return (
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginBottom: 10,
            marginTop: 10,
          }}>
          <Image
            source={{
              uri: 'data:image/png;base64,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',
            }}
            style={{ width: 50, height: 50, marginRight: 5 }}
          />
          <View>
            <Text
              style={{
                fontFamily: 'Gill Sans Extrabold',
              }}>
              {item.nombre}
            </Text>
            <Text
              style={{
                fontFamily: 'Comic',
                color: 'gray',
              }}>
              {item.edad}
            </Text>
            <Text
              style={{
                fontFamily: 'Comic',
                color: 'gray',
              }}>
              {item.instrumento}
            </Text>
            <Image
              source={{
                uri: 'https://cpng.pikpng.com/pngl/s/363-3630181_de-venta-en-fondos-png-linea-azul-clipart.png',
              }}
              style={{ height: 10, width: 200, marginBottom: 15 }}
            />
          </View>
        </View>
      );
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Usuario filtrado: {route.params.numero}</Text>
      <FlatList
        data={usuarios}
        renderItem={funcionFiltrado}
        keyExtractor={(item) => item.id}></FlatList>
    </View>
  );
}

function HomeStack() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#28FF06',
        inactiveBackgroundColor: '#91EF83',
      }}
      screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen
        name="Historia"
        component={HomeScreen}
        options={{ headerStyle: { backgroundColor: '#28FF06' } }}
      />
      <Tab.Screen
        name="Listado"
        component={ListScreen}
        options={{ headerStyle: { backgroundColor: '#28FF06' } }}
      />
    </Tab.Navigator>
  );
}

function ListStack() {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Tab.Screen name="Historia" component={HomeScreen} />
      <Tab.Screen name="Listado" component={ListScreen} />
    </Tab.Navigator>
  );
}

const usuarios = [
  {
    id: 1,
    nombre: 'Antonio Romero',
    edad: 32,
    género: 'Masculino',
    instrumento: 'Saxofón',
  },
  {
    id: 2,
    nombre: 'Sara Durán',
    edad: 35,
    género: 'Femenino',
    instrumento: 'Violín',
  },
  {
    id: 4,
    nombre: 'Raul Coronado',
    edad: 21,
    género: 'Masculino',
    instrumento: 'Trompeta',
  },
  {
    id: 5,
    nombre: 'Isabel Sánchez',
    edad: 45,
    género: 'Femenino',
    instrumento: 'Piano',
  },
  {
    id: 6,
    nombre: 'Josefa Navarro',
    edad: 77,
    género: 'Femenino',
    instrumento: 'Violín',
  },
  {
    id: 7,
    nombre: 'Juan Pedrosa',
    edad: 19,
    género: 'Masculino',
    instrumento: 'Saxofón',
  },
  {
    id: 9,
    nombre: 'Ramon Rey',
    edad: 50,
    género: 'Masculino',
    instrumento: 'Trompeta',
  },
  {
    id: 10,
    nombre: 'Esther Barros',
    edad: 33,
    género: 'Femenino',
    instrumento: 'Trompeta',
  },
  {
    id: 11,
    nombre: 'Ignacio Villalba',
    edad: 56,
    género: 'Masculino',
    instrumento: 'Piano',
  },
  {
    id: 12,
    nombre: 'Roberto Soria',
    edad: 42,
    género: 'Masculino',
    instrumento: 'Saxofón',
  },
  {
    id: 13,
    nombre: 'Cristina Macia',
    edad: 25,
    género: 'Femenino',
    instrumento: 'Guitarra',
  },
  {
    id: 14,
    nombre: 'Erica Escudero',
    edad: 39,
    género: 'Femenino',
    instrumento: 'Guitarra',
  },
  {
    id: 15,
    nombre: 'Angel Lima',
    edad: 63,
    género: 'Masculino',
    instrumento: 'Guitarra',
  },
];
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Listado"
          component={ListStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Usuarios" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
