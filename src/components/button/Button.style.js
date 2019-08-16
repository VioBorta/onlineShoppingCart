
import { StyleSheet } from "react-native";
import { colors } from "../../styles/base";

export default (styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.buttonColor,
    width: "100%",
    borderRadius: 10
  },
  button: {
    width: "70%",
    alignSelf: "center"
  },

}));

