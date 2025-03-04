export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];
export const filterOptions = {
  category: [
    { id: "display", label: "Display" },
    {
      id: "screenguard",
      label: "Screenguard",
    },
    {
      id: "usedphones",
      label: "Used Phones",
    },
    {
      id: "wearables",
      label: "Wearables",
    },

    { id: "accessories", label: "Accessories" },
    {
      id: "repairing",
      label: "Repairing Service",
    },

    {
      id: "computerAccessories",
      label: "Computer Parts",
    },
  ],
  brand: [
    { id: "oppo", label: "oppo" },
    { id: "oneplus", label: "oneplus" },

    { id: "vivo", label: "Vivo" },
    { id: "xiaomi", label: "Xiaomi" },
    { id: "ui", label: "Ui" },
    { id: "samsung", label: "Samsung" },
    { id: "realme", label: "Realme" },
    { id: "boat", label: "Boat" },
    { id: "other", label: "other" },
  ],
};
export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: filterOptions.category,
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: filterOptions.brand,
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "display",
    label: "display",
    path: "/shop/listing",
  },
  {
    id: "usedphone",
    label: "used phone",
    path: "/shop/listing",
  },
  {
    id: "newphones",
    label: "new phones",
    path: "/shop/listing",
  },
  {
    id: "repairingservices",
    label: "repairing services",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  display: "Display",
  screenguard: "Screenguard",
  usedphones: "Used Phones",
  accessories: "Accessories",
  wearables: "Wearables",
  repairing: "Repairing Services",
  computerAccessories: "computer parts",
};

export const brandOptionsMap = {
  samsung: "samsung",
  realme: "realme",
  oneplus: "oneplus",
  boat: "boat",
  xiaomi: "xiaomi",
  ui: "ui",
  oppo: "oppo",
  vivo: "vivo",
  other: "other",
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
