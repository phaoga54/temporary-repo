import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet, Text, TouchableOpacity, View,
} from "react-native"; 
const { width } = Dimensions.get('window')
export const InvoiceDetailScreen = () => {
  const route = useRoute()
  const [invoiceDetail,setInvoiceDetail]=useState(undefined)
  const _renderItem =({item})=>{
    return <ItemComponent
      item={item}
    />
  }

  const getFullAddress = (addresses) => {
    if(!addresses || !addresses.length) return 'No address given'
    return [
      addresses.premise,
      addresses.county,
      addresses.countryCode,
      addresses.city,
      addresses.postcode
    ].join(', ')
    
  }

  useEffect(() => {
    let invoice = route?.params?.invoice
    if(invoice) {
      // destructure invoice object to flattern the object
      const { customer: { firstName, lastName ,addresses,contact}, invoiceNumber, invoiceDate, description,items,totalPaid,currency } = invoice
      setInvoiceDetail({firstName,lastName,invoiceNumber,invoiceDate,description,items,addresses,contact,totalPaid,currency})
    }
  }, [])
  if(!invoiceDetail)return null
  return (

    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>{invoiceDetail.description}</Text>
        <Text style={{marginTop:10}}>Total paid: {invoiceDetail.totalPaid}</Text>
        <Text style={{marginTop:10}}>Paid date: {invoiceDetail.invoiceDate}</Text>

        <Text style={{marginTop:10}}>Customer: {invoiceDetail.firstName} {invoiceDetail.lastName}</Text>
        <Text style={{marginTop:10}}>Email: {invoiceDetail?.contact?.email}</Text>
        <Text style={{marginTop:10}}>Phone: {invoiceDetail?.contact?.mobileNumber}</Text>
        
        <Text style={{marginTop:10}}>Address: {getFullAddress(invoiceDetail.addresses[0])}</Text>
        <FlatList
          data={invoiceDetail.items}
          renderItem={_renderItem}
          ItemSeparatorComponent={()=><View style={{height:10}}/>} 
          ListHeaderComponent={()=><Text style={{fontWeight:'700',fontSize:20,marginVertical:10}}>Item List</Text>}
        />
      </View>
    </SafeAreaView>

  );
};

const ItemComponent = ({ item }) => {
  const { itemName,quantity,description } = item
  
  return <View style={{ paddingHorizontal: 16, paddingVertical: 10, borderRadius: 6, borderWidth: 1 }}
  >
    <Text style={{ fontSize: 16, fontWeight: '700' }}>{itemName}</Text>
    <Text style={{ marginVertical: 5 }}>{description}</Text>
    <Text>Quantity: {quantity}</Text>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
    paddingHorizontal:16
  },
})

