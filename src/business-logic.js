export const functions = {
  formatTwoDecimalPlaces: num => Number.isNaN(num) ? '$0.00' : `$${(Math.round(num*100)/100).toFixed(2)}`,
  calculateTip: (bill, tip) => Number(bill * tip/100),
  totalBill: (bill, tip) => Number(bill) + Number(tip),
  splitBill: (bill,split) => Number(bill / split),
  splitTip: (tip, split) => Number(tip / split)
}
