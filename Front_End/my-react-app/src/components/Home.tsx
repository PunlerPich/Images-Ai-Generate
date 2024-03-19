import React from "react";
// import HomeBody from "./HoneBody";
import {
  Card,
  CardHeader,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import Team from "./Team";
import Test from "./Test";
export default function App() {
  return (
    <>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 m-auto mt-20">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Digital Style
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://content.wepik.com/media/freepik-ai/grid/v2/digitalart/4.png"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">3D</p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://cdn2.imagine.art/imagine-frontend/assets/images/RowImageSlider29.webp"
          />
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Drawing
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://pics.craiyon.com/2023-06-13/ac22eb412a7f4eeeaaad064ea9c67cdf.webp"
          />
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Visoul
            </p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="	https://content.wepik.com/media/freepik-ai/grid/v2/surprise/7.png"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Available soon.</p>
              <p className="text-black text-tiny">Get notified.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm">
              Notify Me
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Art</p>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="https://cdn2.imagine.art/imagine-frontend/assets/images/RowImageSlider18.webp"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="https://cdn2.imagine.art/imagine-frontend/assets/images/RowImageSlider18.webp"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Breathing App</p>
                <p className="text-tiny text-white/60">
                  Get a good night's sleep.
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Get App
            </Button>
          </CardFooter>
        </Card>
      </div>
      {/* <HomeBody /> */}
      <Test />
      <Team />
    </>
  );
}
