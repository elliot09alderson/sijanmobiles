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
    options: [
      { id: "display", label: "display" },
      { id: "usedphone", label: "usedphone" },
      { id: "newphones", label: "newphones" },
      { id: "accessories", label: "Accessories" },
      { id: "repairingservices", label: "repairingservices" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "sunsung", label: "sunsung" },
      { id: "MI", label: "MI" },
      { id: "oneplus", label: "oneplus" },
      { id: "vivo&oppo", label: "vivo&oppo's" },
      { id: "Iphone", label: "Iphone" },
      { id: "nokia", label: "nokia" },
    ],
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
    label: "usedphone",
    path: "/shop/listing",
  },
  {
    id: "newphones",
    label: "newphones",
    path: "/shop/listing",
  },
  {
    id: "repairingservices",
    label: "repairingservices",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  display: "display",
  usedphone: "usedphone",
  newphones: "newphones",
  accessories: "Accessories",
  repairingservices: "repairingservices",
};

export const brandOptionsMap = {
  sunsung: "sunsung",
  MI: "MI",
  oneplus: "oneplus",
  vivooppo: "vivo&oppo",
  Iphone: "Iphone",
  "nokia": "nokia",
};

export const filterOptions = {
  category: [
    { id: "display", label: "display" },
    { id: "usedphone", label: "usedphone" },
    { id: "newphones", label: "newphones" },
    { id: "accessories", label: "Accessories" },
    { id: "repairingservices", label: "repairingservices" },
  ],
  brand: [
    { id: "sunsung", label: "sunsung" },
    { id: "MI", label: "MI" },
    { id: "oneplus", label: "oneplus" },
    { id: "vivo&oppo", label: "vivo&oppo's" },
    { id: "Iphone", label: "Iphone" },
    { id: "nokia", label: "nokia" },
  ],
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
