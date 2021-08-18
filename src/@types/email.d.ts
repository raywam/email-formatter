export interface Email {
  userCode: number,
  userEmail: string,
  userName: string,
  deliveryAddress: string,
  deliveryDate: string,
  emailSubject: string,
  emailType: string,
  orderNumber: string,
  quantityItems: number,
  paymentMethod: string,
  products: Products,
  shipping: number,
  taxes: number,
  orderTotalPrice: number
}

interface Products {
  code: string,
  name: string,
  points: number,
  quantity: number,
  small_picture: number,
  price: number
}