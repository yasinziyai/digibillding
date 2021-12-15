import {
  StyleSheet,
  Text,
  View,
  Input,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
export function Product({ name, photosource, price }) {
  return (
    <View styl={styles.wrapper}>
      <View style={styles.mahsulat}>
        <Image source={{ uri: photosource, width: 126, height: 110 }} />

        <Text>{name}</Text>
        <View style={styles.Text}>
          <Text>تومان{price}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  mahsulat: {
    width: 160,
    backgroundColor: "white",
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
  },
  text: {
    width: "100%",
  },
});
