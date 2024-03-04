/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Details from '../screens/Details/Details';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavoriteIcon, HomeIcon} from '../components/Icons';
import Favorites from '../screens/Favorites/Favorites';
import colors from '../core/colors';
import {t} from 'i18next';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabRoute = () => {
  const renderHomeIcon = ({color}: {color: string}) => {
    return <HomeIcon color={color} />;
  };

  const renderFavoritesIcon = ({color}: {color: string}) => {
    return <FavoriteIcon color={color} />;
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HOME_TAB"
        component={Home}
        options={{
          title: t('home_tab_title'),
          tabBarIcon: renderHomeIcon,
          headerShown: false,
          tabBarActiveTintColor: colors.coralRed,
        }}
      />
      <Tab.Screen
        name="FAVORITES_TAB"
        component={Favorites}
        options={{
          title: t('favorites_tab_title'),
          tabBarIcon: renderFavoritesIcon,
          headerShown: false,
          tabBarActiveTintColor: colors.coralRed,
        }}
      />
    </Tab.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="TAB">
      <Stack.Screen
        name="TAB"
        component={TabRoute}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DETAILS"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Router;
