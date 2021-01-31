import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GettingStartedScreen from "../screens/GettingStartedScreen";
import SignInScreen from "../screens/SignInScreen";
import SplashScreen from "../screens/SplashScreen";
import NumberScreen from "../screens/NumberScreen";
import VerificationScreen from "../screens/VerificationScreen";

const GroceryNavigator = createStackNavigator({
  Splash: SplashScreen,
  GettingStarted: GettingStartedScreen,
  SignIn: SignInScreen,
  Number: NumberScreen,
  Verification: VerificationScreen,
});

export default createAppContainer(GroceryNavigator);
