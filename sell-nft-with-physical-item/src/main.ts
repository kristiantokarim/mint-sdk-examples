import './style.css'
import { MintSDK } from '@kyuzan/mint-sdk-js'

const BACKEND_URL = ''
const MINT_SDK_KEY = ''

const sdk = new MintSDK(
  MINT_SDK_KEY,
  {
    selectWalletModal: {
      cacheProvider: false,
    },
    providers: {
      torus: {
        options: {
          showTorusButton: true,
        },
      },
    },
  },
  {
    backendUrl: BACKEND_URL,
  })

sdk.connectWallet()

const registerButton = document.querySelector<HTMLButtonElement>('#registerButton')!
registerButton.addEventListener("click", async () => {
  const itemStockId = document.querySelector<HTMLInputElement>('#itemStockId')!
  if (itemStockId && itemStockId.value) {
    try {
      const firstName = document.querySelector<HTMLInputElement>("#firstName")!
      const lastName = document.querySelector<HTMLInputElement>("#lastName")!
      const country = document.querySelector<HTMLInputElement>("#country")!
      const email = document.querySelector<HTMLInputElement>("#email")!
      const postalCode = document.querySelector<HTMLInputElement>("#postalCode")!
      const city = document.querySelector<HTMLInputElement>("#city")!
      const state = document.querySelector<HTMLInputElement>("#state")!
      const address1 = document.querySelector<HTMLInputElement>("#address1")!
      const phoneNumber = document.querySelector<HTMLInputElement>("#phoneNumber")!
      const address2 = document.querySelector<HTMLInputElement>("#address2")!
      const address3 = document.querySelector<HTMLInputElement>("#address3")!

      await sdk.registerShippingInfo({
        itemStockId: itemStockId.value,
        firstName: firstName.value,
        lastName: lastName.value,
        country: country.value,
        email: email.value,
        postalCode: postalCode.value,
        city: city.value,
        state: state.value,
        address1: address1.value,
        phoneNumber: phoneNumber.value,
        address2: address2.value,
        address3: address3.value,
      })
    } catch (err) {
      M.toast({ html: err })
      return;
    }
  }
})

const fetchButton = document.querySelector<HTMLButtonElement>('#fetchButton')!
fetchButton.addEventListener("click", async () => {
  const itemStockId = document.querySelector<HTMLInputElement>('#itemStockId')!
  if (itemStockId && itemStockId.value) {
    try {
      const shippingStatus = await sdk.getShippingInfoStatus(itemStockId.value)
      if (!shippingStatus) {
        throw new Error("can not fetch shipping status : ", shippingStatus)
      }
      const shippingInfo = await sdk.getShippingInfo(itemStockId.value)
      if (!shippingInfo) {
        throw new Error("can not fetch shipping info : ", shippingInfo)
      }

      const status = document.querySelector<HTMLInputElement>('#status')!
      const firstName = document.querySelector<HTMLInputElement>("#firstName")!
      const lastName = document.querySelector<HTMLInputElement>("#lastName")!
      const country = document.querySelector<HTMLInputElement>("#country")!
      const email = document.querySelector<HTMLInputElement>("#email")!
      const postalCode = document.querySelector<HTMLInputElement>("#postalCode")!
      const city = document.querySelector<HTMLInputElement>("#city")!
      const state = document.querySelector<HTMLInputElement>("#state")!
      const address1 = document.querySelector<HTMLInputElement>("#address1")!
      const phoneNumber = document.querySelector<HTMLInputElement>("#phoneNumber")!
      const address2 = document.querySelector<HTMLInputElement>("#address2")!
      const address3 = document.querySelector<HTMLInputElement>("#address3")!

      status.value = shippingStatus
      firstName.value = shippingInfo.firstName
      lastName.value = shippingInfo.lastName
      country.value = shippingInfo.country
      email.value = shippingInfo.email
      postalCode.value = shippingInfo.postalCode
      city.value = shippingInfo.city
      state.value = shippingInfo.state
      address1.value = shippingInfo.address1
      phoneNumber.value = shippingInfo.phoneNumber
      address2.value = shippingInfo.address2
      address3.value = shippingInfo.address3
    } catch (err) {
      M.toast({ html: err })
      return;
    }
  }
})

const clearButton = document.querySelector<HTMLButtonElement>('#clearButton')!
clearButton.addEventListener("click", async () => {
  const itemStockId = document.querySelector<HTMLInputElement>('#itemStockId')!
  const status = document.querySelector<HTMLInputElement>('#status')!
  const firstName = document.querySelector<HTMLInputElement>("#firstName")!
  const lastName = document.querySelector<HTMLInputElement>("#lastName")!
  const country = document.querySelector<HTMLInputElement>("#country")!
  const email = document.querySelector<HTMLInputElement>("#email")!
  const postalCode = document.querySelector<HTMLInputElement>("#postalCode")!
  const city = document.querySelector<HTMLInputElement>("#city")!
  const state = document.querySelector<HTMLInputElement>("#state")!
  const address1 = document.querySelector<HTMLInputElement>("#address1")!
  const phoneNumber = document.querySelector<HTMLInputElement>("#phoneNumber")!
  const address2 = document.querySelector<HTMLInputElement>("#address2")!
  const address3 = document.querySelector<HTMLInputElement>("#address3")!
  itemStockId.value = ''
  status.value = ''
  firstName.value = ''
  lastName.value = ''
  country.value = ''
  email.value = ''
  postalCode.value = ''
  city.value = ''
  state.value = ''
  address1.value = ''
  phoneNumber.value = ''
  address2.value = ''
  address3.value = ''

})