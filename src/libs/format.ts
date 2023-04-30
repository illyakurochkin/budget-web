export const formatPrice = (amount: number, currency: string): string => {
  if(amount < 0.01) return `${amount} ${currency}`;
  return `${+Number(amount).toFixed(2)} ${currency}`
}

