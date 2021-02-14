import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
  width,
  height,

  colors: {
    primaryColor: "#53B175",
    bgColor: "#FCFCFC",
    bgColor2: "rgba(252, 252, 252, 0.6)",
    white: "#FFFFFF",
    offWhite: "#FFF9FF",
    offWhiteBtn: "#F2F3F2",
    captionColor: "rgba(252, 252, 252, 0.7)",
    black: "#030303",
    offshadeBlack: "#181725",
    searchText: "#181B19",
    google: "#5383EC",
    facebook: "#4A66AC",
    borderColor: "#E2E2E2",
    secondryTextColor: "#828282",
    secondryTextColor2: "#7C7C7C",
    placeholderColor: "#CCC",
  },

  fontLight: "Gilroy-Light",
  fontRegular: "Gilroy-Regular",
  fontMedium: "Gilroy-Medium",
  fontBold: "Gilroy-Bold",
  fontHeavy: "Gilroy-Heavy",

  images: {
    logoMain: require("../../assets/images/logo_main.png"),
    logo: require("../../assets/images/logo.png"),
    bgGetStart: require("../../assets/images/bgImg1.png"),
    bgSignIn: require("../../assets/images/signinbg.png"),
    bgNum: require("../../assets/images/signupprocessbg.png"),
    bgAllProcess: require("../../assets/images/signupprocessbg2.png"),
    location: require("../../assets/images/location.png"),
    logoColor: require("../../assets/images/colorlogo.png"),
    banana: require("../../assets/images/banana.png"),
    apple: require("../../assets/images/apple.png"),
    redBellPepper: require("../../assets/images/redbellpepper.png"),
    ginger: require("../../assets/images/ginger.png"),
    beefBone: require("../../assets/images/beefbone.png"),
    broilerChicken: require("../../assets/images/broilerchicken.png"),
    orderAccepted: require("../../assets/images/accept.png"),
    userIcon: require("../../assets/images/user.png"),
    cat1: require("../../assets/images/cat1_veg_fruit.png"),
    cat2: require("../../assets/images/cat2_oil_ghee.png"),
    cat3: require("../../assets/images/cat3_meat_fish.png"),
    cat4: require("../../assets/images/cat4_bake_snack.png"),
    cat5: require("../../assets/images/cat5_dairy_egg.png"),
    cat6: require("../../assets/images/cat6_bev.png"),
  },
};
