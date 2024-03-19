import {
  Card,
  CardFooter,
  Image,
  Button,
  CardHeader,
  Link,
} from "@nextui-org/react";
import kp from "../assets/Pich.jpg";
import Mk from "../assets/Mk.jpg";
import { MoonIcon } from "../assets/MoonIcon";
import { SunIcon } from "../assets/SunIcon";
import { Git } from "../assets/Git";
import { Discord } from "../assets/Discord";
import { Tweet } from "../assets/Tweet";
export default function Team() {
  return (
    <>
      <div className="max-w-[900px] px-8 m-auto mt-40 text-right ">
        <p className="block text-sm uppercase text-neural-60">
          Introduction To
        </p>
        <h1 className="mt-1 block text-3xl font-semibold md:text-4xl lg:text-5xl">
          Our Team
        </h1>
        <p className="mt-3 max-w-5xl text-neutral-60 md:text-lg lg:text-lg">
          Explore Our AI Image Generator Tools for Creating Captivating AI
          Generated Art. Explore a world of infinite inspiration and take your
          artworks to new heights with our AI image generator tools.
        </p>
        <div className="gap-6 grid grid-cols-12 grid-rows-2 mt-10">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Keo PunlerPich
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={kp}
            />
          </Card>
          <Card className="col-span-12 sm:col-span-8 h-[300px] rounded-3xl flex flex-col justify-center p-6 lg:p-10 ">
            <h3 className="text-2xl capitalize font-semibold">
              Keo PunlerPich
            </h3>
            <span className=" inline-block capitalize text-sm font-light mt-0.5 mb-2">
              Backend Developer
            </span>
            <p className=" opacity-75 leading-normal text-small text-justify ">
              I been <strong>development </strong> of a sophisticated back-end
              system that significantly improved data processing efficiency.
              This experience honed my skills in designing and implementing
              scalable solutions using languages such as Python and Java.
              Additionally, my proficiency in database management, including SQL
              and NoSQL databases, ensures optimal data storage and retrieval.
            </p>
            <CardFooter className="flex justify-end mt-3 gap-2">
              <p className="text-small font-semibold">Follow More:</p>
              <Link href="https://www.facebook.com/">
                <Tweet />
              </Link>

              <Link href="https://www.facebook.com/">
                <Git />
              </Link>
              <Link href="https://www.facebook.com/">
                <Discord />
              </Link>
            </CardFooter>
          </Card>

          <Card className="col-span-12 sm:col-span-8 h-[300px] rounded-3xl flex flex-col justify-center p-6 lg:p-10 ">
            <h3 class="text-2xl capitalize font-semibold">Kheng Meng kheang</h3>
            <span class=" inline-block capitalize text-sm font-light mt-0.5 mb-2">
              Backend Developer
            </span>
            <p class=" opacity-75 leading-normal text-small text-justify ">
              I been <strong>development </strong> of a sophisticated back-end
              system that significantly improved data processing efficiency.
              This experience honed my skills in designing and implementing
              scalable solutions using languages such as Python and Java.
              Additionally, my proficiency in database management, including SQL
              and NoSQL databases, ensures optimal data storage and retrieval.
            </p>
            <CardFooter className="flex justify-end mt-3 gap-2">
              <p className="text-small font-semibold">Follow More:</p>
              <Link href="https://web.facebook.com/?_rdc=1&_rdr">
                <Tweet />
              </Link>

              <Link href="https://www.facebook.com/">
                <Git />
              </Link>
              <Link href="https://www.facebook.com/">
                <Discord />
              </Link>
            </CardFooter>
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Kheng Meng kheang
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={Mk}
            />
          </Card>
        </div>
      </div>
    </>
  );
}
