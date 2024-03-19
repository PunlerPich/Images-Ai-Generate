import { useState, useEffect } from "react";
import { Textarea, Image, Button, Progress } from "@nextui-org/react";
import { SunIcon } from "../assets/SunIcon";
import axios from "axios";

const TextToImages = () => {
  const [text, setText] = useState("");
  const [imageUrls, setImageUrls] = useState([
    "https://content.wepik.com/media/freepik-ai/grid/v2/digitalart/4.png",
    "https://cdn2.imagine.art/imagine-frontend/assets/images/RowImageSlider29.webp",
    "https://pics.craiyon.com/2023-06-13/ac22eb412a7f4eeeaaad064ea9c67cdf.webp",
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (imageUrls.length > 0) {
      setIsLoading(false);
    }
  }, [imageUrls]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const generateImages = async () => {
    try {
      setIsLoading(true);
      setLoadingProgress(0);

      const interval = setInterval(() => {
        setLoadingProgress((progress) => (progress >= 100 ? 0 : progress + 10));
      }, 1000);

      const response = await axios.post(
        "http://127.0.0.1:8000/generate-image/",

        {
          text_prompt: text,
        }
      );

      clearInterval(interval);

      setImageUrls(response.data.image_urls);
    } catch (error) {
      console.error("Error generating images:", error);
      setIsLoading(false);
    }
  };
  const downloadImage = async (url) => {
    try {
      const response = await axios.get(url, {
        responseType: "blob",
      });

      const blobUrl = URL.createObjectURL(response.data);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "generated_image.jpg";
      link.click();
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div className="max-w-[900px] px-8 m-auto mt-20">
      <p className="block text-sm uppercase text-neural-60">
        DISCOVER THE POTENTIAL OF
      </p>
      <h1 className="mt-1 block text-3xl font-semibold md:text-4xl lg:text-5xl">
        Our AI Tools
      </h1>
      <p className="mt-3 max-w-5xl text-neutral-60 md:text-lg lg:text-lg">
        Explore Our AI Image Generator Tools for Creating Captivating AI
        Generated Art. Explore a world of infinite inspiration and take your
        artworks to new heights with our AI image generator tools.
      </p>
      <div className="flex mt-5 justify-between gap-2">
        {imageUrls.map((url, index) => (
          <div key={index} className="relative">
            <Image
              isZoomed
              isBlurred
              width={250}
              src={url}
              alt={`Generated Image ${index + 1}`}
            />
            <Button
              onClick={() => downloadImage(url)}
              className=" w-full top-2 right-0"
              size="small"
              color="success"
              variant="flat">
              Download
            </Button>
          </div>
        ))}
      </div>
      {isLoading && (
        <div className="mt-5">
          <Progress
            aria-label="Generating..."
            size="md"
            value={loadingProgress}
            color="success"
            showValueLabel={true}
            className="max-w-md"
          />
        </div>
      )}
      <Textarea
        value={text}
        onChange={handleTextChange}
        isInvalid={true}
        variant="bordered"
        label="Description"
        errorMessage="The description should be at least 255 characters long."
        className="pt-5 w-xl"
      />

      <Button
        onClick={generateImages}
        className="w-full float-end font-semibold"
        size="lg"
        color="primary"
        variant="flat">
        Generate <SunIcon />
      </Button>
    </div>
  );
};

export default TextToImages;
