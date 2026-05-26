"use client";

import { useMemo, useRef, useState } from "react";
import { toPng } from "html-to-image";

const employees = [
  {
    name: "Nguyễn Tuấn Vũ",
    phone: "0335 952 952",
  },

  {
    name: "Nguyễn Ngọc Vinh",
    phone: "0356 197 836",
  },

  {
    name: "Nguyễn Văn Hướng",
    phone: "0345 109 555",
  },

  {
    name: "Nguyễn Ngọc Tân",
    phone: "0962 807 555",
  },

  {
    name: "Lương Văn Nhạn",
    phone: "0983 783 005",
  },

  {
    name: "Trần Trọng Tiến",
    phone: "0971 333 758",
  },
];

const products = [

  // SƠN LÓT KHÁNG KIỀM

  {
    vn: "Sơn lót chống kiềm nội thất",
    en: "MYKOLOR PASSION ALKALI PRIMER FOR INTERIOR",
    size: "4.375L",
    basePrice: 1130000,
    canMixColor: false,
  },

  {
    vn: "Sơn lót chống kiềm nội thất",
    en: "MYKOLOR PASSION ALKALI PRIMER FOR INTERIOR",
    size: "15L",
    basePrice: 3215000,
    canMixColor: false,
  },

  {
    vn: "Sơn lót chống kiềm ngoại thất",
    en: "MYKOLOR PASSION ALKALI PRIMER FOR EXTERIOR",
    size: "4.375L",
    basePrice: 1498000,
    canMixColor: false,
  },

  {
    vn: "Sơn lót chống kiềm ngoại thất",
    en: "MYKOLOR PASSION ALKALI PRIMER FOR EXTERIOR",
    size: "18L",
    basePrice: 5260000,
    canMixColor: false,
  },

  {
    vn: "Sơn lót chống thấm ngược",
    en: "MYKOLOR PASSION DAMP SEALER FOR EXTERIOR & INTERIOR",
    size: "4.375L",
    basePrice: 1845000,
    canMixColor: false,
  },

  {
    vn: "Sơn lót siêu kháng kiềm ngoại thất",
    en: "MYKOLOR PASSION SUPREME PRIMER FOR EXTERIOR",
    size: "4.375L",
    basePrice: 1560000,
    canMixColor: false,
  },

  {
    vn: "Sơn lót siêu kháng kiềm ngoại thất",
    en: "MYKOLOR PASSION SUPREME PRIMER FOR EXTERIOR",
    size: "18L",
    basePrice: 5700000,
    canMixColor: false,
  },

  // NỘI THẤT

  {
    vn: "Sơn nước nội thất bóng mờ cao cấp",
    en: "MYKOLOR PASSION SILKY MATTE FOR INTERIOR - WHITE",
    size: "4.375L",
    basePrice: 1760000,
    canMixColor: true,
  },

  {
    vn: "Sơn nước nội thất bóng mờ cao cấp",
    en: "MYKOLOR PASSION SILKY MATTE FOR INTERIOR - WHITE",
    size: "15L",
    basePrice: 5525000,
    canMixColor: true,
  },

  {
    vn: "Sơn nước nội thất mờ",
    en: "MYKOLOR PASSION SOFT SILK - WHITE",
    size: "4.375L",
    basePrice: 886000,
    canMixColor: true,
  },

  {
    vn: "Sơn nước nội thất mờ",
    en: "MYKOLOR PASSION SOFT SILK - WHITE",
    size: "15L",
    basePrice: 2350000,
    canMixColor: true,
  },

  {
    vn: "Sơn nước nội thất cao cấp mùi tự nhiên",
    en: "MYKOLOR PASSION SATIN SILK - WHITE",
    size: "4.375L",
    basePrice: 2532000,
    canMixColor: true,
  },

  {
    vn: "Sơn trần trắng sáng cao cấp",
    en: "MYKOLOR PASSION CEILING PREMIUM",
    size: "4.375L",
    basePrice: 1145000,
    canMixColor: false,
  },

  {
    vn: "Sơn trần trắng sáng cao cấp",
    en: "MYKOLOR PASSION CEILING PREMIUM",
    size: "15L",
    basePrice: 3405000,
    canMixColor: false,
  },

  {
    vn: "Sơn nước nội thất bóng sang trọng",
    en: "MYKOLOR PASSION VIVID SHINE FOR INTERIOR - WHITE",
    size: "1L",
    basePrice: 446000,
    canMixColor: true,
  },
  {
    vn: "Sơn nước nội thất bóng sang trọng",
    en: "MYKOLOR PASSION VIVID SHINE FOR INTERIOR - WHITE",
    size: "4.375L",
    basePrice: 2115000,
    canMixColor: true,
  },

  {
    vn: "Sơn nước nội thất bóng sang trọng",
    en: "MYKOLOR PASSION VIVID SHINE FOR INTERIOR - WHITE",
    size: "15L",
    basePrice: 6450000,
    canMixColor: true,
  },

  // NGOẠI THẤT

  {
    vn: "Sơn nước ngoại thất bóng nhẹ",
    en: "MYKOLOR PASSION CHIFFON",
    size: "4.375L",
    basePrice: 1968000,
    canMixColor: true,
  },

  {
    vn: "Sơn nước ngoại thất bóng nhẹ",
    en: "MYKOLOR PASSION CHIFFON",
    size: "18L",
    basePrice: 6445000,
    canMixColor: true,
  },

  {
    vn: "Sơn nước ngoại thất bóng cao cấp",
    en: "MYKOLOR PASSION SILKY FOR EXTERIOR - WHITE",
    size: "0.875L",
    basePrice: 639000,
    canMixColor: true,
  },

  {
    vn: "Sơn nước ngoại thất bóng cao cấp",
    en: "MYKOLOR PASSION SILKY FOR EXTERIOR - WHITE",
    size: "4.375L",
    basePrice: 2735000,
    canMixColor: true,
  },

  {
    vn: "Sơn nước ngoại thất bóng cao cấp",
    en: "MYKOLOR PASSION SILKY FOR EXTERIOR - WHITE",
    size: "15L",
    basePrice: 7540000,
    canMixColor: true,
  },

  {
    vn: "Sơn ngoại thất cao cấp siêu bóng",
    en: "MYKOLOR PASSION ROYALSILK - WHITE",
    size: "0.875L",
    basePrice: 965000,
    canMixColor: true,
  },

  {
    vn: "Sơn ngoại thất cao cấp siêu bóng",
    en: "MYKOLOR PASSION ROYALSILK - WHITE",
    size: "4.375L",
    basePrice: 3695000,
    canMixColor: true,
  },

  {
    vn: "Sơn ngoại thất chống phai màu tối đa",
    en: "MYKOLOR PASSION UV SCREEN FOR EXTERIOR - WHITE",
    size: "0.875L",
    basePrice: 1045000,
    canMixColor: true,
  },

  {
    vn: "Sơn ngoại thất chống phai màu tối đa",
    en: "MYKOLOR PASSION UV SCREEN FOR EXTERIOR - WHITE",
    size: "4.375L",
    basePrice: 4025000,
    canMixColor: true,
  },

  // CHỐNG THẤM

  {
    vn: "Sơn chống thấm cao cấp Mykolor",
    en: "MYKOLOR PASSION WATER SEAL - WHITE",
    size: "3.5L",
    basePrice: 1365000,
    canMixColor: true,
  },

  {
    vn: "Sơn chống thấm cao cấp Mykolor",
    en: "MYKOLOR PASSION WATER SEAL - WHITE",
    size: "15L",
    basePrice: 5320000,
    canMixColor: true,
  },

  {
    vn: "Sơn chống thấm gốc xi măng",
    en: "MYKOLOR PASSION WATERPROOF CEMENT-BASED",
    size: "4.375L",
    basePrice: 1440000,
    canMixColor: false,
  },

  {
    vn: "Sơn chống thấm gốc xi măng",
    en: "MYKOLOR PASSION WATERPROOF CEMENT-BASED",
    size: "18L",
    basePrice: 5945000,
    canMixColor: false,
  },

  {
    vn: "Sơn chống thấm nhà liền kề màu ghi",
    en: "MYKOLOR PASSION TOWNHOUSE DYNAMIC FOR EXTERIOR",
    size: "3.5L",
    basePrice: 1160000,
    canMixColor: false,
  },

  {
    vn: "Sơn chống thấm nhà liền kề màu ghi",
    en: "MYKOLOR PASSION TOWNHOUSE DYNAMIC FOR EXTERIOR",
    size: "15L",
    basePrice: 4385000,
    canMixColor: false,
  },

  // BỘT BẢ

  {
    vn: "Bột trét tường nội thất cao cấp",
    en: "MYKOLOR HI-FILLER FOR INTERIOR",
    size: "20KG",
    basePrice: 608000,
    canMixColor: false,
  },

  {
    vn: "Bột trét tường ngoại thất cao cấp",
    en: "MYKOLOR HI-FILLER FOR EXTERIOR",
    size: "20KG",
    basePrice: 760000,
    canMixColor: false,
  },

  {
    vn: "Bột trét tường nội thất chất lượng cao",
    en: "MYKOLOR HI-Q FILLER FOR INTERIOR",
    size: "23KG",
    basePrice: 410000,
    canMixColor: false,
  },

  {
    vn: "Bột trét tường nội thất chất lượng cao",
    en: "MYKOLOR HI-Q FILLER FOR INTERIOR",
    size: "40KG",
    basePrice: 710000,
    canMixColor: false,
  },

  {
    vn: "Bột trét tường nội và ngoại thất",
    en: "MYKOLOR PREMIUM POWDER PUTTY FOR INTERIOR & EXTERIOR",
    size: "23KG",
    basePrice: 475000,
    canMixColor: false,
  },

  {
    vn: "Bột trét tường nội và ngoại thất",
    en: "MYKOLOR PREMIUM POWDER PUTTY FOR INTERIOR & EXTERIOR",
    size: "40KG",
    basePrice: 820000,
    canMixColor: false,
  },

  {
    vn: "Bột trét tường ngoại thất chất lượng cao",
    en: "MYKOLOR HI-Q FILLER FOR EXTERIOR",
    size: "40KG",
    basePrice: 910000,
    canMixColor: false,
  },

  // GOLD-X

  {
    vn: "Sơn lót chống kiềm nội thất GOLD-X",
    en: "GOLD-X ALKALI SEAL FOR INTERIOR",
    size: "15L",
    basePrice: 1382000,
    canMixColor: false,
  },

  {
    vn: "Sơn lót chống kiềm ngoại thất GOLD-X",
    en: "GOLD-X ALKALI SEAL FOR EXTERIOR",
    size: "15L",
    basePrice: 1890000,
    canMixColor: false,
  },

  {
    vn: "Sơn nước trong nhà GOLD-X",
    en: "GOLD-X FOR INTERIOR",
    size: "15L",
    basePrice: 705000,
    canMixColor: true,
  },
];
const forichProducts = [
  {
  vn: "R65 - SEALER PRO",
  en: "Sơn lót kháng kiềm nội thất cao cấp",
  size: "5L",
  basePrice: 750000,
  canMixColor: false,
  type: "interior-primer",
},

{
  vn: "R65 - SEALER PRO",
  en: "Sơn lót kháng kiềm nội thất cao cấp",
  size: "18L",
  basePrice: 2450000,
  canMixColor: false,
  type: "interior-primer",
},

{
  vn: "R85 - ULTRA PRIMER",
  en: "Sơn lót siêu kháng kiềm ngoại thất đặc biệt",
  size: "5L",
  basePrice: 1350000,
  canMixColor: false,
  type: "exterior-primer",
},

{
  vn: "R85 - ULTRA PRIMER",
  en: "Sơn lót siêu kháng kiềm ngoại thất đặc biệt",
  size: "18L",
  basePrice: 4200000,
  canMixColor: false,
  type: "exterior-primer",
},

{
  vn: "R85(R90) - ULTRA PRIMER",
  en: "Sơn lót siêu kháng kiềm ngoại thất đặc biệt",
  size: "5L",
  basePrice: 1850000,
  canMixColor: false,
  type: "exterior-primer",
},

{
  vn: "R68 - SAPPHIRE",
  en: "Sơn bóng ngọc trai nội thất cao cấp",
  size: "5L",
  basePrice: 1250000,
  canMixColor: true,
  type: "interior",
},

{
  vn: "R68 - SAPPHIRE",
  en: "Sơn bóng ngọc trai nội thất cao cấp",
  size: "15L",
  basePrice: 3380000,
  canMixColor: true,
  type: "interior",
},

{
  vn: "R69 - PLATINUM",
  en: "Sơn siêu bóng nội thất cao cấp 7 in 1",
  size: "1L",
  basePrice: 395000,
  canMixColor: true,
  type: "interior",
},

{
  vn: "R69 - PLATINUM",
  en: "Sơn siêu bóng nội thất cao cấp 7 in 1",
  size: "5L",
  basePrice: 1580000,
  canMixColor: true,
  type: "interior",
},

{
  vn: "R69 - PLATINUM",
  en: "Sơn siêu bóng nội thất cao cấp 7 in 1",
  size: "15L",
  basePrice: 4050000,
  canMixColor: true,
  type: "interior",
},

{
  vn: "R69(NC99) - PLATINUM",
  en: "Sơn siêu bóng nội thất cao cấp 7 in 1",
  size: "1L",
  basePrice: 455000,
  canMixColor: true,
  type: "interior",
},

{
  vn: "R69(NC99) - PLATINUM",
  en: "Sơn siêu bóng nội thất cao cấp 7 in 1",
  size: "5L",
  basePrice: 1750000,
  canMixColor: true,
  type: "interior",
},

{
  vn: "R69(NC99) - PLATINUM",
  en: "Sơn siêu bóng nội thất cao cấp 7 in 1",
  size: "15L",
  basePrice: 4880000,
  canMixColor: true,
  type: "interior",
},

{
  vn: "R66 - SUPER WHITE",
  en: "Sơn siêu trắng trần nội thất cao cấp",
  size: "5L",
  basePrice: 1300000,
  canMixColor: false,
  type: "interior",
},

{
  vn: "R66 - SUPER WHITE",
  en: "Sơn siêu trắng trần nội thất cao cấp",
  size: "15L",
  basePrice: 3550000,
  canMixColor: false,
  type: "interior",
},

{
  vn: "R86(R35) - TITANIUM",
  en: "Sơn bóng ngọc trai ngoại thất cao cấp",
  size: "5L",
  basePrice: 1550000,
  canMixColor: true,
  type: "exterior",
},

{
  vn: "R86(R35) - TITANIUM",
  en: "Sơn bóng ngọc trai ngoại thất cao cấp",
  size: "15L",
  basePrice: 4150000,
  canMixColor: true,
  type: "exterior",
},

{
  vn: "R86 - TITANIUM",
  en: "Sơn siêu bóng men sứ ngoại thất cao cấp 8 in 1",
  size: "1L",
  basePrice: 500000,
  canMixColor: true,
  type: "exterior",
},

{
  vn: "R86 - TITANIUM",
  en: "Sơn siêu bóng men sứ ngoại thất cao cấp 8 in 1",
  size: "5L",
  basePrice: 1980000,
  canMixColor: true,
  type: "exterior",
},

{
  vn: "R86 - TITANIUM",
  en: "Sơn siêu bóng men sứ ngoại thất cao cấp 8 in 1",
  size: "15L",
  basePrice: 4980000,
  canMixColor: true,
  type: "exterior",
},

{
  vn: "R88 - SUPERSHIELD",
  en: "Sơn siêu bóng ngoại thất kháng bám bẩn đặc biệt",
  size: "1L",
  basePrice: 750000,
  canMixColor: true,
  type: "exterior",
},

{
  vn: "R88 - SUPERSHIELD",
  en: "Sơn siêu bóng ngoại thất kháng bám bẩn đặc biệt",
  size: "5L",
  basePrice: 2880000,
  canMixColor: true,
  type: "exterior",
},

{
  vn: "FCP - CLEAR PAINT",
  en: "Sơn siêu bóng phủ trang trí Clear",
  size: "1L",
  basePrice: 480000,
  canMixColor: false,
  type: "exterior",
},

{
  vn: "FCP - CLEAR PAINT",
  en: "Sơn siêu bóng phủ trang trí Clear",
  size: "5L",
  basePrice: 1750000,
  canMixColor: false,
  type: "exterior",
},

{
  vn: "R11A - WATERPROOF",
  en: "Sơn chống thấm kết hợp xi măng cao cấp",
  size: "5L",
  basePrice: 1280000,
  canMixColor: false,
  type: "waterproof",
},

{
  vn: "R11A - WATERPROOF",
  en: "Sơn chống thấm kết hợp xi măng cao cấp",
  size: "18L",
  basePrice: 4250000,
  canMixColor: false,
  type: "waterproof",
},

{
  vn: "R11M - COLORSHIELD",
  en: "Sơn chống thấm pha màu cao cấp",
  size: "5L",
  basePrice: 1500000,
  canMixColor: true,
  type: "waterproof",
},

{
  vn: "R11M - COLORSHIELD",
  en: "Sơn chống thấm pha màu cao cấp",
  size: "18L",
  basePrice: 4750000,
  canMixColor: true,
  type: "waterproof",
},

{
  vn: "BCC",
  en: "Bột bả chống thấm đặc biệt nội & ngoại thất",
  size: "20KG",
  basePrice: 420000,
  canMixColor: false,
  type: "putty",
},

{
  vn: "VAB",
  en: "Bột bả ngoại thất cao cấp",
  size: "40KG",
  basePrice: 400000,
  canMixColor: false,
  type: "putty",
},

{
  vn: "F500 - PRIMER",
  en: "Sơn lót kháng kiềm nội thất",
  size: "5L",
  basePrice: 305000,
  canMixColor: false,
  type: "interior-primer",
},

{
  vn: "F500 - PRIMER",
  en: "Sơn lót kháng kiềm nội thất",
  size: "18L",
  basePrice: 950000,
  canMixColor: false,
  type: "interior-primer",
},

{
  vn: "F600 - SEALER",
  en: "Sơn lót kháng kiềm ngoại thất",
  size: "5L",
  basePrice: 550000,
  canMixColor: false,
  type: "exterior-primer",
},

{
  vn: "F600 - SEALER",
  en: "Sơn lót kháng kiềm ngoại thất",
  size: "15L",
  basePrice: 1650000,
  canMixColor: false,
  type: "exterior-primer",
},

{
  vn: "F100 - INTERIOR",
  en: "Sơn siêu mịn nội thất cao cấp",
  size: "5L",
  basePrice: 270000,
  canMixColor: true,
  type: "interior",
},

{
  vn: "F100 - INTERIOR",
  en: "Sơn siêu mịn nội thất cao cấp",
  size: "18L",
  basePrice: 830000,
  canMixColor: true,
  type: "interior",
},

{
  vn: "F800 - EXTERIOR",
  en: "Sơn siêu mịn ngoại thất cao cấp",
  size: "1L",
  basePrice: 590000,
  canMixColor: true,
  type: "exterior",
},

{
  vn: "F800 - EXTERIOR",
  en: "Sơn siêu mịn ngoại thất cao cấp",
  size: "15L",
  basePrice: 1830000,
  canMixColor: true,
  type: "exterior",
},
];
type OrderItem = {
  type?: string;
  vn: string;
  en: string;
  size: string;

  qty: number;

  basePrice: number;

  finalPrice: number;

  colorPrice: number;

  colorCode: string;

  canMixColor: boolean;
};

export default function Home() {
  const invoiceRef = useRef<HTMLDivElement>(null);
  const [keyword, setKeyword] = useState("");

  const [customerName, setCustomerName] =
    useState("");

  const [customerAddress, setCustomerAddress] =
    useState("");
    const [discountPercent, setDiscountPercent] =
  useState(0);

const [customerDeposit, setCustomerDeposit] =
  useState(0);

  const [selectedEmployee, setSelectedEmployee] =
  useState<any>(null);
  const [brand, setBrand] =
  useState<"select" | "mykolor" | "forich">(
    "select"
  );  

  const [orderItems, setOrderItems] = useState<
    OrderItem[]
  >([]);

  const currentProducts =
  brand === "forich"
    ? forichProducts
    : products;
  const filteredProducts = useMemo(() => {
    return currentProducts.filter((product) =>
      `${product.vn} ${product.en}`
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );
  }, [keyword, brand]);

  const addProduct = (product: any) => {

  setOrderItems([
    
    {
      vn: product.vn,
      en: product.en,
      size: product.size,
      type: product.type,

      qty: 1,

      basePrice: product.basePrice,

      finalPrice: 0,

      colorPrice: 0,

      colorCode: "",

      canMixColor: product.canMixColor,
    },
    ...orderItems,
  ]);

  setKeyword("");
};

  const updateItem = (
    index: number,
    field: string,
    value: any
  ) => {

    const updated = [...orderItems];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    if (
  field === "qty" &&
  value < 0
) {
  updated[index].qty = 0;
}

    if (field === "finalPrice") {

      updated[index].colorPrice =
        Math.max(
          0,
          Number(value) -
          updated[index].basePrice
        );

    }
    if (
  brand === "forich" &&
  field === "colorCode"
) {

  const item =
    updated[index] as any;

  const colorPrice =
    getForichColorPrice(
      value,
      item.size,
      item.type || ""
    );

  updated[index].colorPrice =
    colorPrice;

  updated[index].finalPrice =
    item.basePrice + colorPrice;

}

    setOrderItems(updated);
  };

  const groupedItems = Object.values(

  orderItems.reduce((acc: any, item) => {

    const key =
      `${item.en}-${item.size}-${item.colorCode}`;

    if (!acc[key]) {

      acc[key] = {
        ...item,
      };

    } else {

      acc[key].qty += item.qty;

    }

    return acc;

  }, {})

);
  const total = orderItems.reduce((sum, item) => {

  if (item.finalPrice === 0) {
    return sum + (item.basePrice * item.qty);
  }

  return (
    sum +
    item.finalPrice * item.qty
  );

}, 0);
const finalAfterDiscount =
  total *
  ((100 - discountPercent) / 100);

const remainingPayment =
  finalAfterDiscount -
  customerDeposit;
  const getForichColorPrice = (
  code: string,
  size: string,
  type: string
) => {

  const match =
    code.match(/AP(\d+)-(\d)/i);

  if (!match) return 0;

  const number =
    Number(match[1]);

  const last =
    Number(match[2]);

  const isInterior =
    type.includes("interior");

  if (
    number >= 1 &&
    number <= 14
  ) {

    if (size === "1L") return 3500;
    if (size === "5L") return 15000;
    if (size === "15L" || size === "18L") return 50000;

  }

  if (
    number >= 15 &&
    number <= 22
  ) {

    if (size === "1L") return 5000;
    if (size === "5L") return 22000;
    if (size === "15L" || size === "18L") return 70000;

  }

  if (
    number >= 23 &&
    number <= 152 &&
    [1,2,6].includes(last)
  ) {

    if (isInterior) {

      if (size === "1L") return 14000;
      if (size === "5L") return 60000;
      if (size === "15L" || size === "18L") return 190000;

    } else {

      if (size === "1L") return 6500;
      if (size === "5L") return 33500;
      if (size === "15L" || size === "18L") return 100000;

    }

  }

  if (
    number >= 23 &&
    number <= 152 &&
    [3,5].includes(last)
  ) {

    if (isInterior) {

      if (size === "1L") return 20000;
      if (size === "5L") return 85000;
      if (size === "15L" || size === "18L") return 270000;

    } else {

      if (size === "1L") return 22000;
      if (size === "5L") return 100000;
      if (size === "15L" || size === "18L") return 355000;

    }

  }

  if (
    number >= 23 &&
    number <= 152 &&
    last === 4
  ) {

    if (isInterior) {

      if (size === "1L") return 30000;
      if (size === "5L") return 135000;
      if (size === "15L" || size === "18L") return 395000;

    } else {

      if (size === "1L") return 26500;
      if (size === "5L") return 132500;
      if (size === "15L" || size === "18L") return 420000;

    }

  }

  if (
    number >= 153 &&
    number <= 171
  ) {

    if (size === "1L") return 36000;
    if (size === "5L") return 180000;
    if (size === "15L" || size === "18L") return 540000;

  }

  return 0;
};
const saveInvoiceImage = async () => {

  if (!invoiceRef.current) return;

  try {

    const dataUrl =
      await toPng(invoiceRef.current, {

        cacheBust: true,

        pixelRatio: 2,

        backgroundColor: "#ffffff",

      });

    const response =
  await fetch(dataUrl);

const blob =
  await response.blob();

const blobUrl =
  URL.createObjectURL(blob);

const today = new Date();

const yyyy =
  today.getFullYear();

const mm =
  String(
    today.getMonth() + 1
  ).padStart(2, "0");

const dd =
  String(
    today.getDate()
  ).padStart(2, "0");

const dateKey =
  `${yyyy}${mm}${dd}`;

const savedCount =
  Number(
    localStorage.getItem(dateKey) || "0"
  ) + 1;

localStorage.setItem(
  dateKey,
  String(savedCount)
);

const fileName =
  `${dateKey}-${savedCount}.png`;

const link =
  document.createElement("a");

link.href = blobUrl;

link.download =
  fileName;

document.body.appendChild(link);

link.click();

document.body.removeChild(link);

URL.revokeObjectURL(blobUrl);

  } catch (error) {

    console.log(error);

    alert("Không thể lưu ảnh");

  }

};
if (brand === "select") {

  return (

    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-md space-y-4">

        <button
          onClick={() =>
            setBrand("mykolor")
          }
          className="w-full bg-white text-black rounded-3xl p-6 text-2xl font-bold"
        >
          Lên đơn Mykolor
        </button>

        <button
          onClick={() =>
            setBrand("forich")
          }
          className="w-full bg-orange-500 text-white rounded-3xl p-6 text-2xl font-bold"
        >
          Lên đơn Forich
        </button>

      </div>

    </main>

  );
}
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-3">

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4">

        {/* FORM */}

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[30px] shadow-2xl p-4 text-white">
        <button
  onClick={() =>
    setBrand("select")
  }
  className="mb-3 bg-white/10 px-4 py-2 rounded-2xl text-sm"
>
  ← Quay lại
</button>

          <h1 className="text-2xl font-bold mb-4">

  {
    brand === "forich"
      ? "Forich Order"
      : "Mykolor Order"
  }

</h1>
          {/* nhân viên */}

          <div className="mb-3">

            <label className="text-sm mb-1 block">
              Nhân viên
            </label>

            <select
              value={selectedEmployee?.name || ""}
              onChange={(e) => {

                const found = employees.find(
                  (emp) =>
                    emp.name === e.target.value
                );

                if (found) {
                  setSelectedEmployee(found);
                }

              }}
              className="w-full bg-white/10 border border-white/20 rounded-2xl p-3 text-sm outline-none"
            >
<option
  value=""
  disabled
  className="text-black"
>
  Chọn nhân viên
</option>
              {employees.map((emp, index) => (

                <option
                  key={index}
                  value={emp.name}
                  className="text-black"
                >
                  {emp.name}
                </option>

              ))}

            </select>

          </div>

          {/* khách */}

          <div className="space-y-3">

            <input
              placeholder="Tên khách hàng"
              value={customerName}
              onChange={(e) =>
                setCustomerName(
                  e.target.value
                )
              }
              className="w-full bg-white/10 border border-white/20 rounded-2xl p-3 text-sm outline-none"
            />

            <input
              placeholder="Địa chỉ"
              value={customerAddress}
              onChange={(e) =>
                setCustomerAddress(
                  e.target.value
                )
              }
              className="w-full bg-white/10 border border-white/20 rounded-2xl p-3 text-sm outline-none"
            />

          </div>

<div className="grid grid-cols-2 gap-2 mt-3">

  <input
    placeholder="Mức chiết khấu (%)"
    value={
      discountPercent === 0
        ? ""
        : discountPercent
    }
    onChange={(e) => {

      const raw =
        e.target.value.replace(/\D/g, "");

      setDiscountPercent(
        raw === ""
          ? 0
          : Number(raw)
      );

    }}
    className="w-full bg-white/10 border border-white/20 rounded-2xl p-3 text-sm outline-none"
  />

  <input
    placeholder="Khách đã cọc"
    value={
      customerDeposit === 0
        ? ""
        : customerDeposit.toLocaleString("vi-VN")
    }
    onChange={(e) => {

      const raw =
        e.target.value.replaceAll(".", "");

      const numberValue =
        Math.max(0, Number(raw));

      setCustomerDeposit(numberValue);

    }}
    className="w-full bg-white/10 border border-white/20 rounded-2xl p-3 text-sm outline-none"
  />

</div>
          {/* tìm sản phẩm */}

          <div className="mt-4">

            <input
              placeholder="Tìm sản phẩm..."
              value={keyword}
              onChange={(e) =>
                setKeyword(
                  e.target.value
                )
              }
              className="w-full bg-white/10 border border-white/20 rounded-2xl p-3 text-sm outline-none"
            />

            {/* autocomplete */}

            {keyword && (

              <div className="mt-2 bg-white rounded-2xl overflow-hidden shadow-2xl">

                {filteredProducts.map(
                  (product, index) => (

                    <button
                      key={index}
                      onClick={() =>
                        addProduct(product)
                      }
                      className="w-full text-left p-3 border-b hover:bg-gray-100 text-black"
                    >

                      <p className="font-semibold text-sm">
                        {product.vn}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
  {product.en} - {product.size}
</p>

                    </button>

                  )
                )}

              </div>

            )}

          </div>

          {/* danh sách đơn */}

          <div className="mt-4 space-y-3">

            {orderItems.map((item, index) => (

              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-3xl p-3"
              >

                <div className="flex items-start justify-between gap-2">

                  <div>

                    <p className="font-semibold text-sm">
  {item.vn} - {item.size}
</p>

                    <p className="text-xs opacity-70 mt-1">
                      {item.en}
                    </p>

                  </div>

                  <button
                    onClick={() => {

                      const updated = [
                        ...orderItems,
                      ];

                      updated.splice(index, 1);

                      setOrderItems(updated);

                    }}
                    className="bg-red-500 text-white text-xs px-3 py-2 rounded-xl"
                  >
                    Xóa
                  </button>

                </div>

                <div className="grid grid-cols-2 gap-2 mt-3">

                  <input
  type="text"
  inputMode="numeric"
  value={
    item.qty === 0
      ? ""
      : item.qty
  }
  onChange={(e) => {

    const raw =
      e.target.value.replace(/\D/g, "");

    updateItem(
      
      index,
      "qty",
      raw === ""
        ? 0
        : Number(raw)
    );

  }}
  placeholder="SL"
  className="bg-white/10 border border-white/20 rounded-2xl p-3 text-sm outline-none"
/>

                  <input
                    value={item.basePrice.toLocaleString("vi-VN")}
                    disabled
                    className="bg-white/10 border border-white/20 rounded-2xl p-3 text-sm outline-none opacity-70"
                  />

                </div>

                {item.canMixColor && (

                  <div className="space-y-2 mt-2">

                    <input
                      placeholder="Mã màu"
                      value={item.colorCode}
                      onChange={(e) => {

  const value =
    e.target.value.toUpperCase();

  // FORICH
  if (brand === "forich") {

  const regex =
    /^(|A|AP|AP\d{0,3}|AP\d{0,3}-|AP\d{0,3}-\d?)$/

  if (!regex.test(value)) {
    return;
  }

}

updateItem(
  index,
  "colorCode",
  value
);

  

}}
                      
                      className="w-full bg-white/10 border border-white/20 rounded-2xl p-3 text-sm outline-none"
                    />

    {
  brand === "mykolor" ? (

    <input
      value={
        item.finalPrice === 0
          ? ""
          : item.finalPrice.toLocaleString("vi-VN")
      }
      onChange={(e) => {

        const rawValue =
          e.target.value.replaceAll(".", "");

        const numberValue =
          Math.max(0, Number(rawValue));

        updateItem(
          index,
          "finalPrice",
          numberValue
        );

      }}
      placeholder="Nhập giá gồm sơn + màu"
      className="w-full bg-white/10 border border-white/20 rounded-2xl p-3 text-sm outline-none"
    />

  ) : (

    <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-sm">

      Tiền màu:
      {" "}

      <span className="font-bold text-orange-300">

        {item.colorPrice.toLocaleString("vi-VN")}đ

      </span>

    </div>

  )
}

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

        {/* HÓA ĐƠN */}
        
        {/* HÓA ĐƠN */}

<div>

  <div className="flex justify-end mb-3">

    <button
      onClick={saveInvoiceImage}
      className={`
  text-white px-4 py-2 rounded-2xl text-sm
  ${
    brand === "forich"
      ? "bg-orange-500"
      : "bg-slate-900"
  }
`}
    >
      Lưu ảnh
    </button>

  </div>

  <div
    ref={invoiceRef}
    className="bg-white rounded-[30px] p-4 overflow-auto"
  >

          

          <div className="flex items-start justify-between border-b pb-3 gap-3">

            <div>

             <img
  src={
    brand === "forich"
      ? "/anphat.png"
      : "/passion.png"
  }
  alt=""
  className="w-[90px]"
/>

              <h2 className="font-bold text-xs mt-2">
                {
  brand === "forich"
    ? "CÔNG TY TNHH CÔNG NGHỆ AN PHÁT BẮC NINH"
    : "CHI NHÁNH CÔNG TY 4 ORANGES CO,. LTD MIỀN BẮC"
}
              </h2>

              <p className="text-[10px] mt-1">
                {
  brand === "forich"
    ? "Khu phố Lựa, Phường Quế Võ, Tỉnh Bắc Ninh"
    : "Lô D3, KCN Đại Đồng - Hoàn Sơn, Xã Đại Đồng, Tỉnh Bắc Ninh"
}
              </p>

              <p className="text-[10px] mt-1">
                SĐT: {selectedEmployee?.phone || ""}
              </p>

            </div>

            <h1 className="text-lg font-bold">
              HÓA ĐƠN BÁN HÀNG
            </h1>

          </div>

          {/* khách */}

          <div className="mt-3 text-xs space-y-1">

            <p>
              <span className="font-bold">
                Khách:
              </span>{" "}
              {customerName}
            </p>

            <p>
              <span className="font-bold">
                Địa chỉ:
              </span>{" "}
              {customerAddress}
            </p>

          </div>

          {/* table */}

          <div className="mt-4">

            <table className="w-full border text-[5px] md:text-[8px] leading-tight table-auto">

              <thead className="bg-gray-100">

  <tr>

    <th className="border px-[1px] py-[1px] w-[12px]">
      STT
    </th>

    <th className="border px-[2px] py-[1px] w-[160px]">
  Sản phẩm
</th>

    <th className="border px-[1px] py-[1px] w-[18px]">
  Màu
</th>

    <th className="border px-[2px] py-1 w-[28px]">
      SL
    </th>

    <th className="border px-[2px] py-1 w-[34px]">
  ĐG Sơn
</th>

<th className="border px-[2px] py-1 w-[34px]">
   Tổng tiền sơn
</th>

<th className="border px-[2px] py-1 w-[34px]">
  ĐG Màu
</th>

<th className="border px-[2px] py-1 w-[34px]">
  Tổng tiền màu
</th>

<th className="border px-[1px] py-[1px] w-[38px] break-words">
  Tổng
</th>

  </tr>

</thead>

              <tbody>

  {groupedItems.map((item: any, index) => {

    const paintTotal =
      item.basePrice *
      item.qty;

    const colorTotal =
      item.colorPrice *
      item.qty;

    const rowTotal =
  (item.finalPrice === 0
    ? item.basePrice
    : item.finalPrice)
  * item.qty;


    return (

      <tr key={index}>

        <td className="border px-[2px] py-1 text-center align-top">
          {index + 1}
        </td>

        <td className="border px-[1px] py-[1px] align-top break-words w-[160px] leading-tight">

          <p className="leading-tight">
            {item.vn} - {item.size}
          </p>

          <p className="text-[7px] text-gray-500 leading-tight mt-1">
            {item.en}
          </p>

        </td>

        <td className="border px-[1px] py-[1px] text-center align-top w-[18px] overflow-hidden">
  {item.colorCode?.slice(0, 6)}
</td>

        <td className="border px-[2px] py-1 text-center align-top">
          {item.qty}
        </td>

        <td className="border px-[2px] py-1 text-right align-top">
  {(item.basePrice).toLocaleString("vi-VN")}
</td>

<td className="border px-[2px] py-1 text-right align-top">
  {(paintTotal).toLocaleString("vi-VN")}
</td>

<td className="border px-[2px] py-1 text-right align-top">
  {(item.colorPrice).toLocaleString("vi-VN")}
</td>

<td className="border px-[2px] py-1 text-right align-top">
  {(colorTotal).toLocaleString("vi-VN")}
</td>

        <td className="border px-[2px] py-1 text-right font-bold align-top">
          {(rowTotal).toLocaleString("vi-VN")}
        </td>

      </tr>

    );
  })}

</tbody>

            </table>

          </div>

          {/* tổng */}

<div className="mt-4 text-right space-y-1">

  <p className="text-lg font-bold">
    Tổng: {total.toLocaleString("vi-VN")}đ
  </p>

  <p className="text-sm">

    Tổng sau chiết khấu
    {" "}
    {discountPercent}%:
    {" "}

    {finalAfterDiscount.toLocaleString("vi-VN")}đ

  </p>

  <p className="text-sm">

    Khách đã cọc:
    {" "}

    {customerDeposit.toLocaleString("vi-VN")}đ

  </p>

  <p className="text-base font-bold text-red-600">

    Còn phải thanh toán:
    {" "}

    {remainingPayment.toLocaleString("vi-VN")}đ

  </p>

</div>
         <div
  className="mt-10"
  style={{
    breakInside: "avoid",
    pageBreakInside: "avoid",
  }}
>

  <div className="text-right text-xs">

    Bắc Ninh, ngày {new Date().getDate()}
    {" "}tháng {new Date().getMonth() + 1}
    {" "}năm {new Date().getFullYear()}

  </div>

  <div className="grid grid-cols-2 mt-6 text-xs">

    <div className="text-center">

      <p className="font-bold">
        Người lên đơn
      </p>

      <p className="mt-10">
        {selectedEmployee?.name || ""}
      </p>

    </div>

    <div className="text-center">

      <p className="font-bold">
        Người nhận
      </p>

    </div>

  </div>

</div>

        </div>

      </div>
      </div>

    </main>
  );
}