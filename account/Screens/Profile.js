// export default function Profile() {
//   return (
//     <SafeAreaView
//       style={styles.Settings}
//     >
//       <View style={styles.profile}>
//         <View>
//           <View style={styles.each}>
//             <Text style={styles.DarkModetext}>Username : </Text>
//             <Text style={styles.valuetext}>
//               {key !== null ? dbUserData.username : "Anonymous"}
//             </Text>
//           </View>
//           <View style={styles.each}>
//             <Text style={styles.DarkModetext}>User ID : </Text>
//             <Text style={styles.valuetext}>
//               {key !== null ? key : "Anonymous"}
//             </Text>
//           </View>
//         </View>
//         <Image
//           style={styles.profileImg}
//           source={require("../assets/chatbot.png")}
//         />
//       </View>
//       <TouchableOpacity
//         onPress={() =>
//           key == null
//             ? createTwoButtonAlert()
//             : navigation.navigate({
//                 name: "apiSetting",
//                 params: { title: "Home Town", value: "Songea" },
//               })
//         }
//         style={styles.option}
//       >
//         <Text style={styles.titlekey}>{"Home Town"}</Text>
//         <Text style={styles.keyvalue}>{"Dar es salaam"}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() =>
//           key == null
//             ? createTwoButtonAlert()
//             : navigation.navigate({
//                 name: "weatherAPI",
//                 params: { title: "Weather API key", value: "key value" },
//               })
//         }
//         style={styles.option}
//       >
//         <Text style={styles.titlekey}>{"Weather API key"}</Text>
//         <Text style={styles.keyvalue}>
//           {"15acf557f15f399ee6cb026196667e6d"}
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() =>
//           key == null
//             ? createTwoButtonAlert()
//             : navigation.navigate({
//                 name: "openai",
//                 params: { title: "Open API key", value: "key value" },
//               })
//         }
//         style={styles.option}
//       >
//         <Text style={styles.titlekey}>{"OpenAi API key"}</Text>
//         <Text style={styles.keyvalue}>
//           {"2fcdb445cdmsh8dd07ba6ac9c8f8p12085ajsnbaaafbfe8f59"}
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate({
//             name: "feedback",
//             params: {},
//           })
//         }
//         style={styles.option}
//       >
//         <Text style={styles.titlekey}>{"Send FeedBack :"}</Text>
//         <Text style={styles.keyvalue}>{"Reply to the developer"}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate({
//             name: "aboutUs",
//             params: {},
//           })
//         }
//         style={styles.option}
//       >
//         <Text style={styles.titlekey}>{"About Us :"}</Text>
//         <Text style={styles.keyvalue}>{"Learn More About the Developer"}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() =>
//           navigation.navigate({
//             name: "help",
//             params: {},
//           })
//         }
//         style={styles.option}
//       >
//         <Text style={styles.titlekey}>{"Help :"}</Text>
//         <Text style={styles.keyvalue}>{"To get OpenAI API "}</Text>
//       </TouchableOpacity>
//       {/* <View style={styles.DarkMode}>
//       <Text style={styles.DarkModetext}>Dark Mode</Text>
//       <View>
//         <ToggleSwitch
//           isOn={darkMode}
//           onColor="black"
//           offColor="white"
//           labelStyle={{ color: "black", fontWeight: "900" }}
//           size="medium"
//           onToggle={(isOn) => setDarkMode(!darkMode)}
//         />
//       </View>
//     </View> */}

//       {key !== null ? (
//         <TouchableOpacity style={styles.logout} onPress={removeUser}>
//           <Text style={styles.DarkModetext}>LOG OUT</Text>
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity
//           style={styles.logout}
//           onPress={() =>
//             navigation.navigate({
//               name: "login",
//               params: {},
//             })
//           }
//         >
//           <Text style={styles.DarkModetext}>LOG IN</Text>
//         </TouchableOpacity>
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   option: {
//     margin: 5,
//     padding: 10,
//     // backgroundColor: "rgba(41, 56, 71,1)",
//     borderRadius: 6,
//     gap: 5,
//     borderBottomWidth: 3,
//     borderBottomColor: "#0a674f",
//   },
//   titlekey: {
//     fontFamily: "Russo",
//     color: "rgba(202, 230, 223, 1)",
//   },
//   keyvalue: {
//     color: "rgba(202, 230, 223,0.8)",
//     fontFamily: "ChakraPetch_Light",
//     color: "#cae6df",
//   },

//   profile: {
//     alignItems: "center",
//     margin: 30,
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   each: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   profileImg: {
//     borderRadius: 500,
//     height: 200,
//     width: 200,
//     borderColor: "#0a674f",
//     borderWidth: 1,
//   },
//   Settings: { flex: 1, backgroundColor: "#04192e" },
//   DarkMode: {
//     margin: 5,
//     padding: 10,
//     borderRadius: 6,
//     justifyContent: "space-between",
//     gap: 5,
//     padding: 20,
//     flexDirection: "row",
//     borderBottomWidth: 3,
//     borderBottomColor: "#0a674f",
//   },
//   logout: {
//     margin: 5,
//     padding: 10,
//     borderRadius: 6,
//     justifyContent: "center",
//     gap: 5,
//     padding: 20,
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 3,
//     borderColor: "#0a674f",
//   },
//   DarkModetext: {
//     fontFamily: "Russo",
//     color: "rgba(202, 230, 223, 1)",
//   },
//   valuetext: {
//     fontFamily: "ChakraPetch_Light",
//     color: "rgba(202, 230, 223, 1)",
//   },
// });

import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profileCard}>
        <Image
          resizeMode="cover"
          style={styles.profileImage}
          source={require('../../assets/profile.png')}
        />
        <View style={styles.profileDetails}>
          <Text style={{ fontFamily: "Urban" }}>User Name</Text>
          <Text style={{ fontFamily: "Ageo", textAlign: "justify" }}>
            Bio : Font Awesome is the internet's icon library and toolkit used
            by millions of designers, developers, and content creators.{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileCard: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    margin: 5,
    borderRadius: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  profileDetails: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
