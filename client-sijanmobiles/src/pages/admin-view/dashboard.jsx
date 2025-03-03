import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, getFeatureImages,deleteFeatureImage } from "@/store/common-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { Trash } from "lucide-react";


function AdminDashboard() {
  const { toast } = useToast();
    const [slide, setslide] = useState(0);

  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();
  const { featureImageList } = useSelector((state) => state.commonFeature);

  // console.log(uploadedImageUrl, "uploadedImageUrl");

  function handleUploadFeatureImage() {

    if(uploadedImageUrl){

      dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
        if (data?.payload?.success) {
          dispatch(getFeatureImages());
          setImageFile(null);
          setUploadedImageUrl("");
        }
      });
    }

    else{

     
        toast({
          title: "Please select the image first",
          variant: "destructive",
        });
     
      console.log("please upload image correctly ======>>>>")
    }
  }

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  console.log(featureImageList, "featureImageList");

  return (
    <div>
      <div className="flex flex-wrap gap-4 mt-5 relative ">
        {featureImageList.length > 0 && (
          <button
            className="absolute z-10 top-[50%] font-semibold left-2 border p-2 rounded-xl"
            onClick={() =>
              setslide(slide === 0 ? featureImageList.length - 1 : slide - 1)
            }
          >
            prev
          </button>
        )}
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((featureImgItem, idx) => (
              <div className="relative  ring-2  rounded-lg ring-gray-300 shadow-sm">
                <img
                  src={featureImgItem.image}
                  className={` h-[300px] w-full shadow-md object-cover rounded-t-lg  ${
                    slide == idx ? "inline" : " hidden "
                  } `}
                />

                <div
                  className={` ${
                    slide == idx ? "inline" : " hidden "
                  } h-8 w-8 absolute right-1 cursor-pointer  bg-red-600 text-white top-1 rounded-full flex items-center justify-center `}
                  onClick={() => {
                    console.log(featureImgItem._id);
                    dispatch(deleteFeatureImage(featureImgItem._id));
                    setslide(
                      slide === 0 ? featureImageList.length - 1 : slide - 1
                    );
                  }}
                >
                  <Trash size={16} />
                </div>
              </div>
            ))
          : null}
        <div className="flex  absolute bottom-24 gap-2 items-center">
          {featureImageList.map((_, idx) => {
            return (
              <button
                className={`${
                  slide == idx ? " bg-white size-4 " : " bg-gray-400 size-2 "
                }  rounded-full border flex items-center justify-center text-sm`}
                onClick={() => setslide(idx)}
              ></button>
            );
          })}
        </div>
        {featureImageList.length > 0 && (
          <button
            className="absolute z-10 top-[50%] font-semibold right-2 border p-2 rounded-xl"
            onClick={() =>
              setslide(slide === featureImageList.length - 1 ? 0 : slide + 1)
            }
          >
            Next
          </button>
        )}
      </div>
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoadingState={setImageLoadingState}
        imageLoadingState={imageLoadingState}
        isCustomStyling={true}
        // isEditMode={currentEditedId !== null}
      />
      <Button
        onClick={handleUploadFeatureImage}
        disabled={!uploadedImageUrl}
        className="mt-5 w-full"
      >
        Upload
      </Button>
    </div>
  );
}

export default AdminDashboard;
