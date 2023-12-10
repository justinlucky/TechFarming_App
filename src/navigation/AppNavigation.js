import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import Blog from '../screens/Blog/Blog';
import Cart from '../screens/Cart/Cart';
import Checkout from '../screens/Checkout/Checkout';
import Contact from '../screens/Contact/Contact';
import Dashboard from '../screens/Dashboard/Dashboard';
import Forum from '../screens/Forum/Forum';
import Gallery from '../screens/Gallery/Gallery';
import History from '../screens/History/History';
import Login from '../screens/Login/Login';
import Payment from '../screens/Payment/Payment';
import Recommendation from '../screens/Recommendation/Recommendation';
import Robot from '../screens/Robot/Robot';
import Services from '../screens/Services/Services';
import ServiceBooking from '../screens/ServicesBooking/ServiceBooking';
import Setting from '../screens/Setting/Setting';
import Shipping from '../screens/Shipping/Shipping';
import SignUp from '../screens/SignUp/SignUp';
import Testimonials from '../screens/Testimonials/Testimonials';
import Wishlist from '../screens/Wishlist/Wishlist';
import Products from '../screens/Products/Products';
const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouter="Home">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Blog" component={Blog}/>
            <Stack.Screen name="Cart" component={Cart}/>
            <Stack.Screen name="Checkout" component={Checkout}/>
            <Stack.Screen name="Contact" component={Contact}/>
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            <Stack.Screen name="Forum" component={Forum}/>
            <Stack.Screen name="Gallery" component={Gallery}/>
            <Stack.Screen name='History' component={History}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Payment' component={Payment}/>
            <Stack.Screen name='Recommendation' component={Recommendation}/>
            <Stack.Screen name='Robot' component={Robot}/>
            <Stack.Screen name='Services' component={Services}/>
            <Stack.Screen name='Services Booking' component={ServiceBooking}/>
            <Stack.Screen name='Setting' component={Setting}/>
            <Stack.Screen name='Shipping' component={Shipping}/>
            <Stack.Screen name='Sign Up' component={SignUp}/>
            <Stack.Screen name='Testimonials' component={Testimonials}/>
            <Stack.Screen name='Wishlist' component={Wishlist}/>
            <Stack.Screen name='Products' component={Products}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation