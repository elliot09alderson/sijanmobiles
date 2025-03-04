import { Button } from "@/components/ui/button";

import {
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Computer,
  ComputerIcon,
  Headphones,
  Heater,
  Images,
  Monitor,
  Settings,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  Smartphone,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";
import display from "/icons/display.png";
import screenguard from "/icons/screenguard.png";
import secondphone from "/icons/secondphone.png";
import oneplus from "/brand/oneplus.jpg";
import Oppo from "/brand/Oppo.png";
import realme from "/brand/realme.png";
import samsung from "/brand/samsung.jpg";
import Ui from "/brand/Ui.jpg";
import vivo from "/brand/vivo.png";
import Xiaomi from "/brand/Xiaomi.png";
import boat from "/brand/boat.svg";

const categoriesWithIcon = [
  { id: "display", label: "Display", icon: display, type: "image" },
  { id: "screenguard", label: "Screenguard", icon: screenguard, type: "image" },
  { id: "usedphones", label: "Used Phones", icon: secondphone, type: "image" },
  {
    id: "wearables",
    label: "Earbuds / Neckbands",
    icon: Headphones,
    type: "icon",
  },

  { id: "accessories", label: "Accessories", icon: WatchIcon, type: "icon" },
  {
    id: "repairing",
    label: "Repairing Service",
    icon: Settings,
    type: "icon",
  },

  {
    id: "computeraAccessories",
    label: "Computer Parts",
    icon: Monitor,
    type: "icon",
  },
];
const brands = [
  { id: "oppo", label: "oppo", icon: Oppo },
  { id: "oneplus", label: "oneplus", icon: oneplus },

  { id: "vivo", label: "Vivo", icon: vivo },
  { id: "xiaomi", label: "Xiaomi", icon: Xiaomi },
  { id: "ui", label: "Ui", icon: Ui },
  { id: "samsung", label: "Samsung", icon: samsung },
  { id: "realme", label: "Realme", icon: realme },
  { id: "boat", label: "Boat", icon: boat },
  { id: "other", label: "Other", icon: boat },
];
const brandsWithIcon = [
  { id: "nike", label: "sumsung", icon: Shirt },
  { id: "adidas", label: "MI", icon: WashingMachine },
  { id: "puma", label: "OnePlus", icon: ShoppingBasket },
  { id: "levi", label: "Vivo & Oppo", icon: Airplay },
  { id: "zara", label: "Iphone", icon: Images },
  { id: "h&m", label: "Nokia", icon: Heater },
];
function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full lg:h-[600px] h-[300px] overflow-hidden">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
              <img
                src={slide?.image}
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500`}
              />
            ))
          : null}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) %
                featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem, idx) => (
              <Card
                key={idx}
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                {categoryItem.type == "icon" ? (
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                    <span className="font-bold">{categoryItem.label}</span>
                  </CardContent>
                ) : (
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <img
                      className="w-12 h-12 mb-4 text-primary"
                      src={categoryItem.icon}
                    />
                    <span className="font-bold">{categoryItem.label}</span>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brandItem, dix) => (
              <Card
                key={dix + "ASDASD"}
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    className="w-18 h-12 mb-4 text-primary"
                    src={brandItem.icon}
                  />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem, dix) => (
                  <ShoppingProductTile
                    key={dix + "ASD"}
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;
