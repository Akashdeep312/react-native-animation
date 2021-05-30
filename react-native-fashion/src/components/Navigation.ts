import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface StackNavigationProps<
  PramList extends ParamListBase,
  RouteName extends keyof PramList = string
> {
  navigation: StackNavigationProp<PramList, RouteName>;
  route: RouteProp<PramList, RouteName>;
}

export type Routes = {
  Onboarding: undefined;
  Welcome: undefined;
};
