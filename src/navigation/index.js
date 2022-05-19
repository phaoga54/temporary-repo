import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Fonts } from "@src/assets/theme";
import { SCREEN_NAME } from '@src/utils/constants';
import { HomeScreen } from "@src/screens/home-screen";
import { TouchableOpacity } from "react-native";
import BackSvg from '@asset/svgs/Back.svg';
import { InvoiceDetailScreen } from "@src/screens/invoice-detail";
const Stack = createStackNavigator();

export const Navigation = ({ theme }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={null}
        screenOptions={{
          headerTitleStyle: [Fonts.interReg16, { color: "#44465B" }],
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerLeft: ({ onPress }) => {
            return (
              <TouchableOpacity style={{ paddingLeft: 20 }} onPress={onPress}>
                <BackSvg />
              </TouchableOpacity>
            );
          },
        }}
        initialRouteName={SCREEN_NAME.HOME_SCREEN}
      >
        <Stack.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name={SCREEN_NAME.INVOICE_DETAIL} component={InvoiceDetailScreen}
          options={{
            title: "Invoice Detail"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
