import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './homeScreen';
import ModulesScreen from './modulesScreen';
import NotificationsScreen from './notificationsScreen';
// ... y así sucesivamente para cada pantalla

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Modules':
                            iconName = focused ? 'book' : 'book-outline';
                            break;
                        case 'Notifications':
                            iconName = focused ? 'bell' : 'bell-outline';
                            break;
                    }

                    // Puedes personalizar los colores y tamaños de los iconos aquí
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Modules" component={ModulesScreen} />
            <Tab.Screen name="Notifications" component={NotificationsScreen} />
        </Tab.Navigator>
    );
}

export default BottomTabs;