export const CalculateGSTAmount = (originalAmount) => {
     const gstRate = 0.18;
     const gstAmount = (originalAmount * gstRate);
     return gstAmount;
}