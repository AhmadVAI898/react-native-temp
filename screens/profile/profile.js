// Core components
import { Text, View, Image } from "react-native";

// UO Components
import InputField from "../../components/ui/InputField/InputField";

// Libraries
import RNPickerSelect from "react-native-picker-select";

// Assets
import profile from "../../assets/profile.png";

// Styles
import { styles, pickerStyle } from "./styles";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={profile} />
      <View style={styles.body}>
        <Text style={styles.name}>ALi Molhem</Text>
        <Text style={styles.info}>@ali.molhe</Text>
      </View>
      <View style={[styles.wrapper]}>
        <InputField
          placeholder="Email"
          label="Email"
          value="ali.molhem@gmail.com"
        />
        <Text style={[styles.computedLabel]}>App Language</Text>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          style={pickerStyle}
          items={[
            { label: "English", value: "EN" },
            { label: "French", value: "FR" },
            { label: "Italian", value: "IT" },
          ]}
        />
      </View>
    </View>
  );
};
export default Profile;
