import {
  StyleSheet,
  Text,
  View,
  Input,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { Product } from "./Product";
import { useState } from "react";

export default function App(props) {
  let vizhe = <Text style={{ color: "red" }}>ویژه</Text>;
  let [products, setProducts] = useState([
    { name: "سیم برق", price: "42,000", photosource: "./sim bargh.png" },
    { name: "سیم سوکتی", price: "26,000", photosource: "./sucet.png" },
    { name: "سیم برق", price: "42,000", photosource: "./sim bargh.png" },
  ]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.site}>
          <View style={styles.header}>
            <Pressable>
              <Text style={{ color: "white", marginRight: 15.16 }}>خرید</Text>
            </Pressable>
            <Pressable>
              <Text style={{ color: "white", marginRight: 131 }}>سرچ</Text>
            </Pressable>
            <Pressable>
              <Text style={{ color: "white", marginRight: 21 }}>
               , دیجی بیلدینگ
              </Text>
            </Pressable>

            <Pressable>
              <Text style={{ color: "white", marginRight: 23.75 }}>منو</Text>
            </Pressable>
          </View>
          <Image source={{ uri: "/image 1.jpg", width: "100%", height: 220 }} />
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: "row-reverse",
                width: 450,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Pressable
                style={{
                  width: 145,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F55163",
                  borderRadius: 10,
                  marginRight: 20,
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  لیست دسته بندی ها
                </Text>
              </Pressable>

              <Pressable
                style={{
                  width: 72,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F55163",
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: "white" }}>تزئینات</Text>
              </Pressable>
              <Pressable
                style={{
                  width: 87,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F55163",
                  borderRadius: 10,
                  marginRight: 10,
                }}
              >
                <Text style={{ color: "white" }}>مواد اولیه</Text>
              </Pressable>
              <Pressable
                style={{
                  width: 87,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#F55163",
                  borderRadius: 10,
                  marginRight: 10,
                }}
              >
                <Text style={{ color: "white" }}></Text>
              </Pressable>
            </View>
          </ScrollView>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "black", fontWeight: 600 }}>
              {" "}
              فروش {vizhe}
            </Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              {products.map((Item) => (
                <Product
                  name={Item.name}
                  price={Item.price}
                  photosource={Item.photosource}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        <Text style={{ color: "white", fontWeight: 600 }}>محصولات جدید</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  site: {
    width: 375,
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
  },
  header: {
    maxwidth: "100%",
    height: 50,
    backgroundColor: "#404FD2",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});
