export const products = ["Ulgicid", "AminoGuard", "Myozox", "Cetlevo", "Masks"];

export function createStateFramework(productArray) {
  const formAnswers = {
    town: "", // Town/Area (Dropdown single value)
    pharmacyName: "",
    products: {},
  };

  productArray.forEach((productName) => {
    formAnswers.products[productName] = {
      available: false,
      availability: 0,
      otcMovement: 0,
      presciptionMovement: 0,
      presciptionMovementSources: [],
    };
  });

  return formAnswers;
}
