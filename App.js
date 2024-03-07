import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.banner_container}>
          <Image
            style={styles.oval_img}
            source={require("./assets/icons/Oval.png")}
          />
          <View>
            <Text style={styles.banner_title}>The Octocat</Text>
            <Text style={styles.username}>@octocat</Text>
            <Text style={styles.date}>Joined 25 Jan 2011</Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              marginTop: 40,
              letterSpacing: 1,
              lineHeight: 30,
              fontSize: 20,
              color: "gray",
              fontWeight: "400",
            }}
          >
            Lorem Ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.{" "}
          </Text>
        </View>
        <View style={styles.status_container}>
          <View>
            <Text style={styles.status_title}>Repos</Text>
            <Text style={styles.status_count}>8</Text>
          </View>
          <View>
            <Text style={styles.status_title}>Followers</Text>
            <Text style={styles.status_count}>3938</Text>
          </View>
          <View>
            <Text style={styles.status_title}>Following</Text>
            <Text style={styles.status_count}>9</Text>
          </View>
        </View>

        <View style={{ marginTop: 50 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 25,
            }}
          >
            <Image
              style={{ width: 30, height: 35, objectFit: "contain" }}
              source={require("./assets/icons/pin.png")}
            />
            <Text
              style={{
                color: "#4B6A9B",
                fontWeight: "400",
                fontSize: 22,
              }}
            >
              San Francisco
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 25,
              marginTop: 15,
            }}
          >
            <Image
              style={{ width: 30, height: 35, objectFit: "contain" }}
              source={require("./assets/icons/url.png")}
            />
            <Text
              style={{
                color: "#4B6A9B",
                fontWeight: "400",
                fontSize: 22,
              }}
            >
              https://github.blog
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 25,
              marginTop: 15,
            }}
          >
            <Image
              style={{ width: 30, height: 35, objectFit: "contain" }}
              source={require("./assets/icons/twitter.png")}
            />
            <Text
              style={{
                color: "#BBC7D9",
                fontWeight: "400",
                fontSize: 22,
              }}
            >
              Not Available
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 25,
              marginTop: 15,
            }}
          >
            <Image
              style={{ width: 30, height: 35, objectFit: "contain" }}
              source={require("./assets/icons/office-building.png")}
            />
            <Text
              style={{
                color: "#4B6A9B",
                fontWeight: "400",
                fontSize: 22,
              }}
            >
              @github
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  banner_container: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
  },
  oval_img: {
    width: 120,
    height: 120,
  },

  banner_title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2B3442",
  },

  username: {
    fontSize: 20,
    fontWeight: "400",
    color: "#2479FF",
  },
  date: {
    fontSize: 22,
    fontWeight: "400",
    color: "#8E9CB3",
    marginTop: 5,
  },

  // status section
  status_container: {
    marginTop: 50,
    backgroundColor: "#F6F8FF",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  status_title: {
    fontSize: 20,
    color: "#4B6A9B",
    fontWeight: "bold",
    textAlign: "center",
  },
  status_count: {
    fontSize: 25,
    color: "#2B3442",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
