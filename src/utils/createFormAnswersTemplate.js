export const products = ["Ulgicid", "AminoGuard", "Myozox", "Cetlevo", "Masks"];

export function createStateFramework(productArray) {
  const formAnswers = {
    town: "", // Town/Area (Dropdown single value)
    pharmacyName: "",
    products: [],
  };

  productArray.forEach((productName) => {
    formAnswers.products.push({
      name: productName,
      available: false,
      otcAvailability: 0,
      presciptionAvailability: 0,
      presciptionAvailabilitySources: [],
    });
  });

  return formAnswers;
}
