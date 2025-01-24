export const formatPhoneNumber = (number: number): string => {
 const numStr = number.toString();
 return `(${numStr.slice(0,3)}) ${numStr.slice(3,6)}-${numStr.slice(6)}`;
};