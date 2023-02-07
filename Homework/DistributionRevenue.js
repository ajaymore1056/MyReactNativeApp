import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const RevenueData = [
  {
    key: 1,
    month: 'Apr-May-Jun',
    Q1: 'Quarters',
    mfRevenue: 'MF Revenue',
    mfRevenuePrice: 1,
    iPoRevenuePrice: 2,
    ipoRevenue: 'IPO Revenue',

    cashLabel: 'Equity',
    cashValue: '1000',
    mtfLabel: 'mtf Active',
    mtfVal: 'true',
    profitLabel: 'Gain/Loss',
    profit: 100,
  },
  {
    key: 2,
    month: 'Jul-Aug-Sep ',
    Q1: 'Quarters',
    mfRevenuePrice: 1000,
    iPoRevenuePrice: 2000,
    mfRevenue: 'MF Revenue',
    ipoRevenue: 'IPO Revenue',

    cashLabel: 'Equity',
    cashValue: '1000',
    mtfLabel: 'mtf Active',
    mtfVal: 'true',
    profitLabel: 'Gain/Loss',
    profit: 100,
  },
  {
    key: 3,
    month: 'Oct-Nov-Dec',
    Q1: 'Quarters',
    mfRevenuePrice: 1000,
    iPoRevenuePrice: 2000,
    mfRevenue: 'MF Revenue',
    ipoRevenue: 'IPO Revenue',

    cashLabel: 'Equity',
    cashValue: '1000',
    mtfLabel: 'mtf Active',
    mtfVal: 'true',
    profitLabel: 'Gain/Loss',
    profit: 100,
  },
  {
    key: 4,
    month: 'Jan-Feb-Mar',
    Q1: 'Quarters',
    mfRevenuePrice: 1000,
    iPoRevenuePrice: 2000,
    mfRevenue: 'MF Revenue',
    ipoRevenue: 'IPO Revenue',
    // add work 18-10-2022
    cashLabel: 'Equity',
    cashValue: '1000',
    mtfLabel: 'mtf Active',
    mtfVal: 'true',
    profitLabel: 'Gain/Loss',
    profit: 100,
  },
];

class DisributionRevenue extends Component {
  renderDash() {
    var num = 5;
    var string = '';
    for (let i = 1; i <= num; i++) {
      for (let j = i; j <= i; j++) {
        string += '|';
        console.log(string);
      }
      string += '\n';
    }
    console.log('outside console', string);
    return <Text style={{color: 'grey'}}>{string}</Text>;
  }
  ItemSeprator = () => (
    <View
      style={{
        height: 2,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
    />
  );
  renderItem = ({item, index}) => {
    // const {height, width} = Dimensions.get('window');
    // const itemWidth = (width - 15) / 1;
    const {
      key,
      month,
      Q1,
      mfRevenue,
      ipoRevenue,
      iPoRevenuePrice,
      mfRevenuePrice,
      cashLabel,
      cashValue,
      mtfLabel,
      mtfVal,
      profitLabel,
      profit,
    } = item; // Destructuring array created for flatlist
    return (
      <View style={styles.parentView}>
        <View style={{flex: 1}}>
          <View style={styles.parentView1}>
            <View style={styles.quarterView}>
              <Text style={styles.textstyle}>{month}</Text>
              <Text style={styles.Q1style}>{Q1}</Text>
            </View>
            <View style={{paddingTop: 10}}>
              <Text>{this.renderDash()}</Text>
            </View>
            <View style={styles.quarterView}>
              <Text style={styles.dashStyle}>{mfRevenuePrice}</Text>
              <Text style={styles.mfRevenueStyle}>{mfRevenue}</Text>
            </View>
            <View style={{paddingTop: 10}}>
              <Text>{this.renderDash()}</Text>
            </View>
            <View style={styles.quarterView}>
              <Text style={styles.dashStyle}>{iPoRevenuePrice}</Text>
              <Text style={styles.ipoRevenueStyle}>{ipoRevenue}</Text>
            </View>
          </View>
          <View style={styles.parentView1}>
            <View style={styles.quarterView}>
              <Text style={styles.textstyle}>{cashValue}</Text>
              <Text style={styles.equityStyle}>{cashLabel}</Text>
            </View>
            <View style={{paddingTop: 10}}>
              <Text>{this.renderDash()}</Text>
            </View>
            <View style={styles.quarterView || 33}>
              <Text style={styles.textstyle}>{mtfVal}</Text>
              <Text style={styles.mtfLabelstyle}>{mtfLabel}</Text>
            </View>
            <View style={{paddingTop: 10}}>
              <Text>{this.renderDash()}</Text>
            </View>
            <View style={styles.quarterView}>
              <Text style={styles.textstyle}>{profit}</Text>
              <Text style={styles.GainStyle}>{profitLabel}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={RevenueData}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.key}
          //   ItemSeparatorComponent={this.ItemSeprator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentView: {
    backgroundColor: '#343434',
    padding: '2%',
    flex: 1,
  },
  parentView1: {
    flexDirection:'row',
    flex: 1,
    backgroundColor: '#28282B',
    // flexWrap: 'wrap',
  },

  quarterView: {
    alignItems: 'center',
    // backgroundColor: '',
    justifyContent: 'center',
    padding: 8,
    width: '32%',
  },
  textstyle: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  dashStyle: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  Q1style: {
    color: 'orchid',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  mfRevenueStyle: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  ipoRevenueStyle: {
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  GainStyle: {
    color: 'green',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  mtfLabelstyle: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  equityStyle: {
    color: 'orchid',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
});

export default DisributionRevenue;
