export const UPDATE_USER_INFO = "UPDATE_USER_INFO"
export const UPDATE_INVOICES = "UPDATE_INVOICES"

export const updateUserInfor = (payload)=>{

    return {
        type:UPDATE_USER_INFO,
        payload
    }
}

export const updateInvoices = (payload)=>{
    return {
        type:UPDATE_INVOICES,
        payload
    }
}