import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet, Text, TextInput, TouchableOpacity, View,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from "@react-navigation/native";
import { ratioW } from "@src/utils";
import { Fonts } from "@asset/theme";
import { SCREEN_NAME } from '@src/utils/constants';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccessToken, fetchInvoices, fetchUserInfo } from '@src/services';
import { updateInvoices, updateUserInfor } from '@src/store/actions';
import moment from 'moment'
const { width } = Dimensions.get('window')
export const HomeScreen = () => {

  const { firstName, lastName, email, avatar,token,access_token } = useSelector((root) => root.userInfo) || ''
  const invoices = useSelector((root) => root.userInfo?.invoices)
  const [filteredInvoices,setFilteredInvoices]=useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSort, setIsSort] = useState(false)
  const [isFilter,setIsFilter] = useState(false)
  const [value,setValue]=useState('')
  const dispatch = useDispatch()
  const navigation = useNavigation();

  const _renderItem = ({ item }) => {
    return <InvoiceComponent
      invoice={item}
      navigation={navigation}
    />
  }
  // sort the array by invoice date
  const sortInvoicesByDate = (invoices)=>{
    return invoices.sort((first, second)=>{
      const format = 'YYYY-MM-DD'
      let firstMoment = moment(first.invoiceDate,format)
      let secondMoment = moment(second.invoiceDate, format)
      if (firstMoment.isSame(secondMoment)) return 0
      return firstMoment.isBefore(secondMoment) ? 1 : -1
    })
  }
  //filter the array, default filterd is by total paid
  const filterInvoices = (invoices,value)=>{
    if(value) return invoices.filter(invoice=>invoice.invoiceNumber.includes(value))
    return invoices.filter(invoice=>invoice.totalPaid >0)
  }
  useEffect(() => {
    const getUserInfo = async () => {
      setIsLoading(true)
      const { access_token } = await fetchAccessToken()
      const { data: { firstName, lastName, memberships, email,addresses,contacts } } = await fetchUserInfo(access_token)
      let token = memberships[0].token
      dispatch(updateUserInfor({ access_token, firstName, lastName, token, email,addresses,contacts }))
      setIsLoading(false)
    }
    getUserInfo()
  }, [])
  useEffect(() => {
    const getInvoice =async ()=>{
      setIsLoading(true)
      const {data} = await fetchInvoices(access_token,token)
      console.log('invoices: ',data);
      dispatch(updateInvoices(data))
      setIsLoading(false)
    }
    if (token) {
      getInvoice()
    }
  }, [token])
  // listen to filter variable changes to perform filter
  useEffect(()=>{
    if(!invoices?.length) return 
    let tempInvoices = [...invoices]
    console.log('sorted0: ',tempInvoices);
    if(value) tempInvoices = filterInvoices(tempInvoices,value)
    console.log('sorted1: ',tempInvoices);
    if(isFilter) tempInvoices=filterInvoices(tempInvoices)
    console.log('sorted2: ',tempInvoices);
    if(isSort) tempInvoices = sortInvoicesByDate(tempInvoices)
    console.log('sorted3: ',tempInvoices);
    setFilteredInvoices(tempInvoices)
  },[invoices,isFilter,isSort,value])
  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.contentContainer}>
        <Image
          source={{ uri: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/264337259_2252607928212886_4302177480969780488_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=OWT6kgbwMs8AX9ctJNR&_nc_oc=AQm5G5OZW_6kyfN9m-Q4iT-SiBpMZG_gDaRxVqgcpBwMo5b5RI1Z3bNb5YEEcC4fSms&_nc_ht=scontent-hkt1-2.xx&oh=00_AT_bd92wFBdzgla2_6XkHnvei67TPo_qRSqnFgi50OvUXQ&oe=6288DA6D' }}
          style={styles.avatar}
          resizeMode={'contain'}
        />
        <View style={styles.secondRow}>
          <Text style={styles.textName}>{firstName} {lastName}</Text>

          <Text style={styles.emailText}>{email}</Text>
        </View>
      </View>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={'Search invoice by invoice number'}
        style={styles.textInput}
      />
      <FlatList
        data={filteredInvoices}
        keyExtractor={item => item.invoiceNumber}
        renderItem={_renderItem}
        style={{ flex: 1, paddingHorizontal: 16 }}
        ListHeaderComponent={() => <HeaderFlatlistComponent 
          isSort={isSort}
          isFilter={isFilter}
          setIsSort={setIsSort}
          setIsFilter={setIsFilter}
        />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />

      {isLoading && <View style={{ ...StyleSheet.absoluteFill, backgroundColor: 'rgba(12, 12, 12, 0.7)', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} color={'white'} />
      </View>}
    </SafeAreaView>

  );
};
const HeaderFlatlistComponent =({isSort,isFilter,setIsSort,setIsFilter})=>{
  return <View style={{flexDirection:'row', justifyContent:'space-between',marginVertical:10}}>
    <Text style={{ fontWeight: '700', fontSize: 20 }}>Invoice List</Text>
    <View style={{flexDirection:'row',}}>
      <Text style={styles.textButton} onPress={()=>setIsSort(!isSort)}>{isSort ? 'Sort: date' :'Sort: original' }</Text>
      <Text style={styles.textButton} onPress={()=>setIsFilter(!isFilter)}>{isFilter ? 'Total Paid > 0': 'Filter: original' }</Text>
    </View>
  </View>
}
const InvoiceComponent = ({ invoice, navigation }) => {
  const { customer: { firstName, lastName }, invoiceNumber, invoiceDate, description,totalPaid } = invoice
  return <TouchableOpacity style={{ paddingHorizontal: 16, paddingVertical: 10, borderRadius: 6, borderWidth: 1 }}
    onPress={() => { navigation.navigate(SCREEN_NAME.INVOICE_DETAIL, { invoice }) }}
  >
    <Text style={{ fontSize: 16, fontWeight: '700' }}>{description}</Text>
    <Text style={{ marginVertical: 5 }}>Invoice Number: {invoiceNumber}</Text>
    <Text>Total paid: {totalPaid}</Text>
    <Text>Paid Date: {invoiceDate}</Text>
  </TouchableOpacity>
}
const styles = StyleSheet.create({
  textInput:{ padding: 10, borderWidth: 1, borderRadius: 5,marginHorizontal:16},
  textButton:{textAlign:'center', paddingHorizontal:10,borderWidth:1,borderRadius:5,marginHorizontal:5},
  emailText:{ marginTop: 10, color: '#7A8193', fontSize: 14 },
  secondRow:{ marginLeft: 10, justifyContent: 'flex-start' },
  textName:{
    color: '#2D3143',
    fontSize: 16
  },
  avatar:{ width: 92, height: 92, borderRadius: 6 },
  contentContainer:{
    width: width - 32, padding: 16, backgroundColor: 'white',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

