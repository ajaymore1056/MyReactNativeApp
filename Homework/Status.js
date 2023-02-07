import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BankDetails from "./bank_details.svg";
import BrokerageDetails from "./brokerage_details.svg";
import FatcaDetails from "./fatca_details.svg";
import NomineeDetails from "./nominee_details.svg";
import PersonalDetails from "./personal_details.svg";
import DocumentsSvg from "./documents.svg";
import GreenTickIcon from "./green_tick_circle.svg";

const ListData = [
  {
    DetailsName: "Personal_Details",
    SvgImage: PersonalDetails
  },
  {
    DetailsName: "FATCA Details",
    SvgImage: FatcaDetails
  },
  {
    DetailsName: "Brokerage Details",
    SvgImage: BrokerageDetails
  },
  {
    DetailsName: "Nominee Details",
    SvgImage: NomineeDetails
  },
  {
    DetailsName: "Bank Details",
    SvgImage: BankDetails
  }
];
class Status extends Component {
  render() {
    return (
      <View style={styles.MainView}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.TextStyleHead}> PAN : </Text>
          <Text style={styles.TextStyleHead2}> GMNPS6449L </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.TextStyleHead}> LeadID : </Text>
          <Text style={styles.TextStyleHead2}> 667256 </Text>
        </View>
        <View style={styles.MapView}>
          {ListData.map(({ DetailsName, SvgImage }) =>
            <View style={styles.MapChildView}>
              <View style={styles.SvgImageUserStyle}>
                {<SvgImage height={40} width={40} />}
                <Text style={styles.TextStyle}>
                  {DetailsName}
                </Text>
              </View>
              <GreenTickIcon height={15} width={15} />
            </View>
          )}
          <View style={styles.Documents}>
            <View style={styles.SvgImageUserStyle}>
              <DocumentsSvg height={40} width={40} fill="red" />
              <Text style={styles.TextStyle}>Documents</Text>
            </View>
            <GreenTickIcon height={15} width={15} fill="#00FF00" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: "#161621"
  },
  TextStyleHead: {
    fontSize: 15,
    fontWeight: "normal",
    paddingStart: 10,
    color: "white"
  },
  TextStyleHead2: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  },
  MapView: {
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginTop: 10,
    backgroundColor: "#1B2036"
  },

  MapChildView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderColor: "white",
    padding: 10,
    paddingHorizontal: 20
  },
  Documents: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderColor: "white",
    padding: 10,
    paddingHorizontal: 20
  },

  SvgImageUserStyle: {
    flexDirection: "row"
    // paddingHorizontal: 10
  },
  TextStyle: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    paddingStart: 10,
    color: "white"
  }
});

export default Status;
