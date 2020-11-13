import image_22 from "../images/image 22.png";
import image_23 from "../images/image 23.png";
import image_24 from "../images/image 24.png";
import image_26 from "../images/image 26.png";
import image_27 from "../images/image 27.png";
const products = [
  {
    id: 1,
    name: "Apple MacBook Pro 16inch Corei7 / 512GB",
    brand: "Apple",
    price: "950,000",
    image: image_22,
  },
  {
    id: 2,
    name: "Hp Notebook 15 Intel Pentium Silver 4GB RAM 500GB HDD Win 10",
    brand: "Hp",
    price: "150,990",
    image: image_23,
  },
  {
    id: 3,
    name: "Mtk High Quality 10.1 Inch Android 6.0 Netbook Computer Laptop",
    brand: "Netbook",
    price: "54,999",
    image: image_24,
  },
  {
    id: 4,
    name: "Asus E203MAH Intel Celeron 500GB HDD 4GB RAM 11.6-Inch Windows 10",
    brand: "Asus",
    price: "129,980",
    image: image_26,
  },
  {
    id: 5,
    name: "Asus E203MAH Intel Celeron 500GB HDD 4GB RAM 11.6-Inch Windows 10",
    brand: "Asus",
    price: "129,980",
    image: image_26,
  },
  {
    id: 6,
    name: "Apple Macbook Pro (2020)",
    brand: "Apple",
    price: "675,000",
    image: image_27,
  },
];




export function getProdcts() {
  return products;
}
export function getProdct(id) {
  return products.filter((product) => product.id === id)[0];
}
