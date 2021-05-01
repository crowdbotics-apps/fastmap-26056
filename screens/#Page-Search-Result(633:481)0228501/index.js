import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_633_482}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db3b/fb9c/4d929503821c07980fc5950064ce6c9c"
          }}
          style={styles.ImageBackground_I633_482_559_109473}
        />
      </View>
      <View style={styles.View_633_483}>
        <View style={styles.View_I633_483_556_588} />
        <View style={styles.View_I633_483_556_598}>
          <View style={styles.View_I633_483_556_597}>
            <Text style={styles.Text_I633_483_556_597}>242.07m</Text>
          </View>
        </View>
        <View style={styles.View_I633_483_556_596}>
          <View style={styles.View_I633_483_556_595}>
            <Text style={styles.Text_I633_483_556_595}>
              -45.123456N 95.123456°W
            </Text>
          </View>
        </View>
        <View style={styles.View_I633_483_556_594}>
          <View style={styles.View_I633_483_556_593}>
            <Text style={styles.Text_I633_483_556_593}>Cam: 5,400 m</Text>
          </View>
        </View>
        <View style={styles.View_I633_483_556_591}>
          <View style={styles.View_I633_483_556_590}>
            <Text style={styles.Text_I633_483_556_590}>FastMap © 2021</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_633_484}>
        <View style={styles.View_I633_484_556_78840} />
        <View style={styles.View_I633_484_556_78841}>
          <View style={styles.View_I633_484_556_78842}>
            <Text style={styles.Text_I633_484_556_78842}>
              -45.123456, 95.123456
            </Text>
          </View>
          <View style={styles.View_I633_484_556_78843}>
            <Text style={styles.Text_I633_484_556_78843}>Winnipeg, MB</Text>
          </View>
          <View style={styles.View_I633_484_556_78844}>
            <Text style={styles.Text_I633_484_556_78844}>2043 Burton Ave</Text>
          </View>
        </View>
        <View style={styles.View_I633_484_556_78845}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b84c/df5f/57480787f09b9f1ad4bdaa8440765e0a"
            }}
            style={styles.ImageBackground_I633_484_556_78846}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c7cc/7b3c/abc77b7a6849677ad297ec93e92f2ae1"
            }}
            style={styles.ImageBackground_I633_484_556_78847}
          />
        </View>
        <View style={styles.View_I633_484_556_78851}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41c2/7e69/729b468e3a3158922a8f1ab223276ee5"
            }}
            style={styles.ImageBackground_I633_484_556_78852}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a4b/f8f2/3734e4ef99d87f8cbc212706c57777ef"
            }}
            style={styles.ImageBackground_I633_484_556_78853}
          />
        </View>
        <View style={styles.View_I633_484_556_78855}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62b8/fbc0/fe114f604db2087f2541d31a5913a1df"
            }}
            style={styles.ImageBackground_I633_484_556_78856}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1402/a803/54968c27d98f74e49210332f97a007a8"
            }}
            style={styles.ImageBackground_I633_484_556_78857}
          />
        </View>
        <View style={styles.View_I633_484_556_78859}>
          <View style={styles.View_I633_484_556_78860} />
          <View style={styles.View_I633_484_556_78861}>
            <Text style={styles.Text_I633_484_556_78861}>16oC</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87d5/048a/e3bd3841171997ff98c3168fd275a234"
            }}
            style={styles.ImageBackground_I633_484_556_78862}
          />
        </View>
      </View>
      <View style={styles.View_633_485}>
        <View style={styles.View_I633_485_596_78936}>
          <View style={styles.View_I633_485_596_78936_559_109466} />
          <View style={styles.View_I633_485_596_78936_559_109467}>
            <View style={styles.View_I633_485_596_78936_562_78766}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6322/cd1b/8ce486f81565359385f912d953263165"
                }}
                style={
                  styles.ImageBackground_I633_485_596_78936_562_78766_562_78762
                }
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4d3/784a/35341a52b0c38ef3d7c19b481fcefde3"
              }}
              style={styles.ImageBackground_I633_485_596_78936_559_109469}
            />
          </View>
        </View>
        <View style={styles.View_I633_485_587_166}>
          <View style={styles.View_I633_485_587_166_585_79353} />
          <View style={styles.View_I633_485_587_166_585_79354}>
            <Text style={styles.Text_I633_485_587_166_585_79354}>
              Date Collected
            </Text>
          </View>
          <View style={styles.View_I633_485_587_166_585_79355}>
            <Text style={styles.Text_I633_485_587_166_585_79355}>
              City Name
            </Text>
          </View>
        </View>
        <View style={styles.View_I633_485_587_162}>
          <View style={styles.View_I633_485_587_162_585_79353} />
          <View style={styles.View_I633_485_587_162_585_79354}>
            <Text style={styles.Text_I633_485_587_162_585_79354}>
              Date Collected
            </Text>
          </View>
          <View style={styles.View_I633_485_587_162_585_79355}>
            <Text style={styles.Text_I633_485_587_162_585_79355}>
              City Name
            </Text>
          </View>
        </View>
        <View style={styles.View_I633_485_587_158}>
          <View style={styles.View_I633_485_587_158_585_79353} />
          <View style={styles.View_I633_485_587_158_585_79354}>
            <Text style={styles.Text_I633_485_587_158_585_79354}>
              Date Collected
            </Text>
          </View>
          <View style={styles.View_I633_485_587_158_585_79355}>
            <Text style={styles.Text_I633_485_587_158_585_79355}>
              City Name
            </Text>
          </View>
        </View>
        <View style={styles.View_I633_485_587_154}>
          <View style={styles.View_I633_485_587_154_585_79353} />
          <View style={styles.View_I633_485_587_154_585_79354}>
            <Text style={styles.Text_I633_485_587_154_585_79354}>
              Date Collected
            </Text>
          </View>
          <View style={styles.View_I633_485_587_154_585_79355}>
            <Text style={styles.Text_I633_485_587_154_585_79355}>
              City Name
            </Text>
          </View>
        </View>
        <View style={styles.View_I633_485_587_134}>
          <View style={styles.View_I633_485_587_134_587_100}>
            <View style={styles.View_I633_485_587_134_587_101}>
              <Text style={styles.Text_I633_485_587_134_587_101}>View all</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/872a/a1db/ccaebcc8de32983bd069ee9a60b367e8"
              }}
              style={styles.ImageBackground_I633_485_587_134_587_102}
            />
            <View style={styles.View_I633_485_587_134_587_104}>
              <Text style={styles.Text_I633_485_587_134_587_104}>
                Recent Projects
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I633_485_587_144}>
          <View style={styles.View_I633_485_587_144_585_79353} />
          <View style={styles.View_I633_485_587_144_585_79354}>
            <Text style={styles.Text_I633_485_587_144_585_79354}>
              Project Tag
            </Text>
          </View>
          <View style={styles.View_I633_485_587_144_585_79355}>
            <Text style={styles.Text_I633_485_587_144_585_79355}>
              Recent Project
            </Text>
          </View>
        </View>
        <View style={styles.View_I633_485_587_140}>
          <View style={styles.View_I633_485_587_140_585_79353} />
          <View style={styles.View_I633_485_587_140_585_79354}>
            <Text style={styles.Text_I633_485_587_140_585_79354}>
              Project Tag
            </Text>
          </View>
          <View style={styles.View_I633_485_587_140_585_79355}>
            <Text style={styles.Text_I633_485_587_140_585_79355}>
              Recent Project
            </Text>
          </View>
        </View>
        <View style={styles.View_I633_485_587_148}>
          <View style={styles.View_I633_485_587_148_587_100}>
            <View style={styles.View_I633_485_587_148_587_101}>
              <Text style={styles.Text_I633_485_587_148_587_101}>View all</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/872a/a1db/ccaebcc8de32983bd069ee9a60b367e8"
              }}
              style={styles.ImageBackground_I633_485_587_148_587_102}
            />
            <View style={styles.View_I633_485_587_148_587_104}>
              <Text style={styles.Text_I633_485_587_148_587_104}>
                Featured Cities
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I633_485_577_78745}>
          <View style={styles.View_I633_485_577_78745_559_109564} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80c6/ab13/45b1eee8b07662d3a3eef8f935ac186a"
            }}
            style={styles.ImageBackground_I633_485_577_78745_559_109565}
          />
          <View style={styles.View_I633_485_577_78745_559_109567}>
            <Text style={styles.Text_I633_485_577_78745_559_109567}>
              Where to?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_633_486}>
        <View style={styles.View_I633_486_585_79309} />
        <View style={styles.View_I633_486_628_132}>
          <View style={styles.View_I633_486_628_133}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e880/478e/6d5f615672c954f2a57cd7d25899a78f"
              }}
              style={styles.ImageBackground_I633_486_628_133_585_79332}
            />
            <View style={styles.View_I633_486_628_133_585_79333}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d74/8e40/ab8ae4e0969ba52daa411ba3c6ac5341"
                }}
                style={styles.ImageBackground_I633_486_628_133_585_79334}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e33/abf2/8a41d7bd4c1ecde1dcde1b2c4f57a7fb"
            }}
            style={styles.ImageBackground_I633_486_628_134}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6508/768a/3b0110b329233f5caf2dec1ff7c6159c"
            }}
            style={styles.ImageBackground_I633_486_628_135}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a007/3e5e/5064ae0405ad62ff620e8dfcd61d4144"
            }}
            style={styles.ImageBackground_I633_486_628_136}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2293/fd3d/ed246edcb81f71594746d3deec99e36a"
            }}
            style={styles.ImageBackground_I633_486_628_137}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e37e/f25e/cfe4dee629f815520d59760d080bc5ef"
            }}
            style={styles.ImageBackground_I633_486_628_138}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3b1/a5ae/f4a57692319b47feceda7e6dfc695bda"
            }}
            style={styles.ImageBackground_I633_486_628_139}
          />
        </View>
        <View style={styles.View_I633_486_628_140}>
          <View style={styles.View_I633_486_628_141}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e8f/7685/456e1927bd5588023cb9a018400a7bff"
              }}
              style={styles.ImageBackground_I633_486_628_141_585_79312}
            />
            <View style={styles.View_I633_486_628_141_585_79313}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f6f/de1b/42566061b05af454e84aba76bc8dc137"
                }}
                style={styles.ImageBackground_I633_486_628_141_585_79314}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0596/1bc1/cdd79d4e2e8d32046a8d20bbd3ac8aa6"
            }}
            style={styles.ImageBackground_I633_486_628_142}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2dd/e0df/644ea9755a2042e02f5579f352c5e43f"
            }}
            style={styles.ImageBackground_I633_486_628_143}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d24/55cb/e561f0a3e55a5aa0f689d9468b8b810d"
            }}
            style={styles.ImageBackground_I633_486_628_144}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce23/42fa/ed291ea8cd828f57526966e720bd2ff4"
            }}
            style={styles.ImageBackground_I633_486_628_145}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/564a/373e/781661eb3e3f24da0eb83cc45f1d3ccb"
            }}
            style={styles.ImageBackground_I633_486_628_147}
          />
        </View>
      </View>
      <View style={styles.View_633_487}>
        <View style={styles.View_I633_487_556_601} />
        <View style={styles.View_I633_487_556_602}>
          <View style={styles.View_I633_487_556_603} />
          <View style={styles.View_I633_487_556_604}>
            <Text style={styles.Text_I633_487_556_604}>Nov 2020</Text>
          </View>
        </View>
        <View style={styles.View_I633_487_556_609}>
          <View style={styles.View_I633_487_556_610} />
          <View style={styles.View_I633_487_556_611}>
            <Text style={styles.Text_I633_487_556_611}>
              Friday August 10, 2020
            </Text>
          </View>
          <View style={styles.View_I633_487_556_617}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf1d/4fda/cafd13f834e08a800beac97a0977d16d"
              }}
              style={styles.ImageBackground_I633_487_556_618}
            />
          </View>
        </View>
        <View style={styles.View_I633_487_556_612}>
          <View style={styles.View_I633_487_556_613} />
          <View style={styles.View_I633_487_556_761}>
            <View style={styles.View_I633_487_556_614}>
              <Text style={styles.Text_I633_487_556_614}>Oct 2019</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I633_487_612_40}>
          <View style={styles.View_I633_487_612_40_556_605} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b50f/9e9c/6ac6330654b618a56cade36402374c60"
          }}
          style={styles.ImageBackground_I633_487_644_1833}
        />
        <View style={styles.View_I633_487_644_4995}>
          <View style={styles.View_I633_487_644_4995_556_605} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddfe/ad60/212b43f1066cfef4bab92cebb5218846"
            }}
            style={styles.ImageBackground_I633_487_644_4995_556_606}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_633_482: {
    width: wp("69.02777777777777%"),
    minWidth: wp("69.02777777777777%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.97222222222222%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I633_482_559_109473: {
    flexGrow: 1,
    width: wp("69.02777777777777%"),
    height: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_633_483: {
    width: wp("69.02777777777777%"),
    minWidth: wp("69.02777777777777%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.97222222222222%"),
    top: hp("118.30601092896175%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_483_556_588: {
    flexGrow: 1,
    width: wp("69.02777777777777%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 47, 47, 1)"
  },
  View_I633_483_556_598: {
    flexGrow: 1,
    width: wp("3.4722222222222223%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.47222222222222%"),
    top: hp("1.229508196721298%")
  },
  View_I633_483_556_597: {
    width: wp("3.4722222222222223%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I633_483_556_597: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_483_556_596: {
    flexGrow: 1,
    width: wp("10.694444444444445%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.80555555555555%"),
    top: hp("1.229508196721298%")
  },
  View_I633_483_556_595: {
    width: wp("10.694444444444445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I633_483_556_595: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_483_556_594: {
    flexGrow: 1,
    width: wp("5.555555555555555%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.208333333333336%"),
    top: hp("1.229508196721298%")
  },
  View_I633_483_556_593: {
    width: wp("5.555555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I633_483_556_593: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_483_556_591: {
    flexGrow: 1,
    width: wp("6.597222222222222%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4583333333333357%"),
    top: hp("1.229508196721298%")
  },
  View_I633_483_556_590: {
    width: wp("6.597222222222222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I633_483_556_590: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_633_484: {
    width: wp("22.36111111111111%"),
    minWidth: wp("22.36111111111111%"),
    height: hp("40.43715846994536%"),
    minHeight: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.55555555555556%"),
    top: hp("3.415300546448088%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_484_556_78840: {
    flexGrow: 1,
    width: wp("22.36111111111111%"),
    height: hp("40.43715846994536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 47, 47, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I633_484_556_78841: {
    flexGrow: 1,
    width: wp("10.48611111111111%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888857%"),
    top: hp("28.688524590163937%")
  },
  View_I633_484_556_78842: {
    width: wp("10.48611111111111%"),
    top: hp("6.693989071038246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I633_484_556_78842: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_484_556_78843: {
    width: wp("6.319444444444445%"),
    top: hp("2.5956284153005456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I633_484_556_78843: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_484_556_78844: {
    width: wp("7.986111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I633_484_556_78844: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 11,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_484_556_78845: {
    flexGrow: 1,
    width: wp("22.36111111111111%"),
    height: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I633_484_556_78846: {
    width: wp("22.36111111111111%"),
    height: hp("24.59016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_I633_484_556_78847: {
    width: wp("2.7777777777777777%"),
    height: hp("1.092896174863388%"),
    top: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.791666666666657%")
  },
  View_I633_484_556_78851: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.388888888888886%"),
    top: hp("20.491803278688522%")
  },
  ImageBackground_I633_484_556_78852: {
    width: wp("4.166666666666666%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I633_484_556_78853: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("2.459016393442628%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.25%")
  },
  View_I633_484_556_78855: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.722222222222214%"),
    top: hp("2.3224043715846987%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I633_484_556_78856: {
    width: wp("0.9722222222222222%"),
    height: hp("1.912568306010929%"),
    top: hp("0.6830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.34722222222222854%")
  },
  ImageBackground_I633_484_556_78857: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I633_484_556_78859: {
    flexGrow: 1,
    width: wp("4.652777777777778%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9722222222222143%"),
    top: hp("1.912568306010928%")
  },
  View_I633_484_556_78860: {
    width: wp("4.652777777777778%"),
    height: hp("4.2349726775956285%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(229, 229, 229, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I633_484_556_78861: {
    width: wp("2.083333333333333%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777857%")
  },
  Text_I633_484_556_78861: {
    color: "rgba(35, 35, 35, 1)",
    fontSize: 11,
    fontFamily: "Lato-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I633_484_556_78862: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4166666666666714%")
  },
  View_633_485: {
    width: wp("27.500000000000004%"),
    minWidth: wp("27.500000000000004%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4722222222222223%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_485_596_78936: {
    flexGrow: 1,
    width: wp("27.500000000000004%"),
    height: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_485_596_78936_559_109466: {
    flexGrow: 1,
    width: wp("27.500000000000004%"),
    height: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 47, 47, 1)"
  },
  View_I633_485_596_78936_559_109467: {
    flexGrow: 1,
    width: wp("23.819444444444443%"),
    height: hp("5.947040599552008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8055555555555554%"),
    top: hp("3.415300546448088%")
  },
  View_I633_485_596_78936_562_78766: {
    width: wp("12.244844436645508%"),
    height: hp("5.947040599552008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I633_485_596_78936_562_78766_562_78762: {
    flexGrow: 1,
    width: wp("12.244844436645508%"),
    height: hp("5.947040599552008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I633_485_596_78936_559_109469: {
    width: wp("1.6666666666666667%"),
    height: hp("3.2786893062904237%"),
    top: hp("1.3661202185792343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.15277777777778%")
  },
  View_I633_485_587_166: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444446%"),
    top: hp("87.70491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_485_587_166_585_79353: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(35, 35, 35, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I633_485_587_166_585_79354: {
    flexGrow: 1,
    width: wp("5.902777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888893%"),
    top: hp("18.032786885245898%")
  },
  Text_I633_485_587_166_585_79354: {
    color: "rgba(160, 160, 160, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_166_585_79355: {
    flexGrow: 1,
    width: wp("4.861111111111112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888893%"),
    top: hp("15.027322404371589%")
  },
  Text_I633_485_587_166_585_79355: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_162: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0138888888888884%"),
    top: hp("87.70491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_485_587_162_585_79353: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(35, 35, 35, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I633_485_587_162_585_79354: {
    flexGrow: 1,
    width: wp("5.902777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888893%"),
    top: hp("18.032786885245898%")
  },
  Text_I633_485_587_162_585_79354: {
    color: "rgba(160, 160, 160, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_162_585_79355: {
    flexGrow: 1,
    width: wp("4.861111111111112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888893%"),
    top: hp("15.027322404371589%")
  },
  Text_I633_485_587_162_585_79355: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_158: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.375%"),
    top: hp("63.79781420765027%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_485_587_158_585_79353: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(35, 35, 35, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I633_485_587_158_585_79354: {
    flexGrow: 1,
    width: wp("5.902777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888893%"),
    top: hp("18.032786885245905%")
  },
  Text_I633_485_587_158_585_79354: {
    color: "rgba(160, 160, 160, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_158_585_79355: {
    flexGrow: 1,
    width: wp("4.861111111111112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888893%"),
    top: hp("15.027322404371596%")
  },
  Text_I633_485_587_158_585_79355: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_154: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0138888888888884%"),
    top: hp("63.79781420765027%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_485_587_154_585_79353: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(35, 35, 35, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I633_485_587_154_585_79354: {
    flexGrow: 1,
    width: wp("5.902777777777778%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888893%"),
    top: hp("18.032786885245905%")
  },
  Text_I633_485_587_154_585_79354: {
    color: "rgba(160, 160, 160, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_154_585_79355: {
    flexGrow: 1,
    width: wp("4.861111111111112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888893%"),
    top: hp("15.027322404371596%")
  },
  Text_I633_485_587_154_585_79355: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_134: {
    flexGrow: 1,
    width: wp("23.47222222222222%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0138888888888884%"),
    top: hp("26.09289617486339%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_485_587_134_587_100: {
    flexGrow: 1,
    width: wp("23.343781365288628%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371584597%")
  },
  View_I633_485_587_134_587_101: {
    width: wp("3.4027777777777777%"),
    top: hp("0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.94100358751085%")
  },
  Text_I633_485_587_134_587_101: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I633_485_587_134_587_102: {
    width: wp("1.246310340033637%"),
    height: hp("2.459016393442623%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.86381615532769%")
  },
  View_I633_485_587_134_587_104: {
    width: wp("8.75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I633_485_587_134_587_104: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_144: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.444444444444446%"),
    top: hp("31.557377049180328%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_485_587_144_585_79353: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(35, 35, 35, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I633_485_587_144_585_79354: {
    flexGrow: 1,
    width: wp("4.513888888888888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888893%"),
    top: hp("18.0327868852459%")
  },
  Text_I633_485_587_144_585_79354: {
    color: "rgba(160, 160, 160, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_144_585_79355: {
    flexGrow: 1,
    width: wp("6.944444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888893%"),
    top: hp("15.027322404371585%")
  },
  Text_I633_485_587_144_585_79355: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_140: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0138888888888884%"),
    top: hp("31.557377049180328%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_485_587_140_585_79353: {
    flexGrow: 1,
    width: wp("11.11111111111111%"),
    height: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(35, 35, 35, 1)",
    opacity: 0.800000011920929,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  View_I633_485_587_140_585_79354: {
    flexGrow: 1,
    width: wp("4.513888888888888%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888893%"),
    top: hp("18.0327868852459%")
  },
  Text_I633_485_587_140_585_79354: {
    color: "rgba(160, 160, 160, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_140_585_79355: {
    flexGrow: 1,
    width: wp("6.944444444444445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7638888888888893%"),
    top: hp("15.027322404371585%")
  },
  Text_I633_485_587_140_585_79355: {
    color: "rgba(196, 196, 196, 1)",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_587_148: {
    flexGrow: 1,
    width: wp("23.47222222222222%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0138888888888884%"),
    top: hp("58.333333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_485_587_148_587_100: {
    flexGrow: 1,
    width: wp("23.343781365288628%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%")
  },
  View_I633_485_587_148_587_101: {
    width: wp("3.4027777777777777%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.94100358751085%")
  },
  Text_I633_485_587_148_587_101: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I633_485_587_148_587_102: {
    width: wp("1.246310340033637%"),
    height: hp("2.459016393442623%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.86381615532769%")
  },
  View_I633_485_587_148_587_104: {
    width: wp("8.402777777777779%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I633_485_587_148_587_104: {
    color: "rgba(229, 229, 229, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_485_577_78745: {
    flexGrow: 1,
    width: wp("23.47222222222222%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.0138888888888884%"),
    top: hp("13.661202185792352%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_485_577_78745_559_109564: {
    flexGrow: 1,
    width: wp("23.47222222222222%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 47, 47, 1)",
    borderColor: "rgba(160, 160, 160, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  ImageBackground_I633_485_577_78745_559_109565: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.833333333333336%"),
    top: hp("1.775956284153004%")
  },
  View_I633_485_577_78745_559_109567: {
    flexGrow: 1,
    width: wp("6.111111111111111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111116%"),
    top: hp("1.775956284153004%")
  },
  Text_I633_485_577_78745_559_109567: {
    color: "rgba(160, 160, 160, 1)",
    fontSize: 14,
    fontFamily: "OpenSans-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_633_486: {
    width: wp("3.4722222222222223%"),
    minWidth: wp("3.4722222222222223%"),
    height: hp("122.95081967213115%"),
    minHeight: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_486_585_79309: {
    flexGrow: 1,
    width: wp("3.4722222222222223%"),
    height: hp("122.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(35, 35, 35, 1)"
  },
  View_I633_486_628_132: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("114.75409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9027777777777777%"),
    top: hp("4.098360655737705%")
  },
  View_I633_486_628_133: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("111.47540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I633_486_628_133_585_79332: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: hp("2.7322409582919764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888884%"),
    top: hp("0.2732240437158282%")
  },
  View_I633_486_628_133_585_79333: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I633_486_628_133_585_79334: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I633_486_628_134: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("68.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I633_486_628_135: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("62.29508196721311%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I633_486_628_136: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("55.73770491803278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I633_486_628_137: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I633_486_628_138: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("42.622950819672134%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I633_486_628_139: {
    width: wp("1.6666666666666667%"),
    height: hp("3.2786893062904237%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I633_486_628_140: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("114.75409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9027777777777777%"),
    top: hp("4.098360655737705%")
  },
  View_I633_486_628_141: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("111.47540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I633_486_628_141_585_79312: {
    flexGrow: 1,
    width: wp("1.3888888888888888%"),
    height: hp("2.7322409582919764%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13888888888888884%"),
    top: hp("0.2732240437158282%")
  },
  View_I633_486_628_141_585_79313: {
    flexGrow: 1,
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I633_486_628_141_585_79314: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I633_486_628_142: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("68.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I633_486_628_143: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("62.29508196721311%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I633_486_628_144: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("55.73770491803278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I633_486_628_145: {
    width: wp("1.6666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("49.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I633_486_628_147: {
    width: wp("1.6666666666666667%"),
    height: hp("3.2786893062904237%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_633_487: {
    width: wp("17.63888888888889%"),
    minWidth: wp("17.63888888888889%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.666666666666664%"),
    top: hp("108.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_487_556_601: {
    flexGrow: 1,
    width: wp("16.11111111111111%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 47, 47, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 3
  },
  View_I633_487_556_602: {
    flexGrow: 1,
    width: wp("3.6111111111111107%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.05555555555555%"),
    top: hp("0%")
  },
  View_I633_487_556_603: {
    width: wp("3.6111111111111107%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(47, 47, 47, 1)"
  },
  View_I633_487_556_604: {
    width: wp("2.256944444444444%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444571%")
  },
  Text_I633_487_556_604: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_487_556_609: {
    flexGrow: 1,
    width: wp("8.333333333333332%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.7222222222222285%"),
    top: hp("0%")
  },
  View_I633_487_556_610: {
    width: wp("8.333333333333332%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(72, 123, 242, 1)"
  },
  View_I633_487_556_611: {
    width: wp("7.057822545369466%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.625%")
  },
  Text_I633_487_556_611: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_487_556_617: {
    width: wp("0.8333333333333334%"),
    minWidth: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.222222222222221%"),
    top: hp("0.40983606557378494%")
  },
  ImageBackground_I633_487_556_618: {
    width: wp("0.8333333333333334%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I633_487_556_612: {
    flexGrow: 1,
    width: wp("4.166666666666666%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555571%"),
    top: hp("0%")
  },
  View_I633_487_556_613: {
    width: wp("4.166666666666666%"),
    height: hp("7.5136612021857925%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(47, 47, 47, 1)"
  },
  View_I633_487_556_761: {
    width: wp("2.083333333333333%"),
    height: hp("4.918032786885246%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0416666666666714%")
  },
  View_I633_487_556_614: {
    width: wp("2.083333333333333%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_I633_487_556_614: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontFamily: "OpenSans-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I633_487_612_40: {
    flexGrow: 1,
    width: wp("1.4583333333333333%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.9027777777777715%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_487_612_40_556_605: {
    flexGrow: 1,
    width: wp("1.4583333333333333%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 47, 47, 1)",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 3
  },
  ImageBackground_I633_487_644_1833: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.7638888888888857%"),
    top: hp("2.4590163934426386%")
  },
  View_I633_487_644_4995: {
    flexGrow: 1,
    width: wp("1.4583333333333333%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.666666666666664%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I633_487_644_4995_556_605: {
    flexGrow: 1,
    width: wp("1.4583333333333333%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(47, 47, 47, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 0
  },
  ImageBackground_I633_487_644_4995_556_606: {
    flexGrow: 1,
    width: wp("1.25%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2083333333333428%"),
    top: hp("2.4590163934426386%")
  },
  View_2: { height: 900 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
