import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

import Autoplay from "embla-carousel-autoplay";
import { IconShoppingCart } from "@tabler/icons-react";

function ProductCard({
  name,
  description,
  tags,
  price,
  discountPrice,
  discountPercentage,
  images,
  details,
}) {
  return (
    <Card className="w-[300px] flex flex-col grow max-w-[400px]">
      <CardHeader>
        <Carousel
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: price > 5000 ? price : 5000 })]}
          className="group"
        >
          <CarouselContent className="-ml-4">
            {images.map((image) => (
              <CarouselItem className="w-[170px] h-[170px] relative pl-4">
                <img
                  className="w-full h-full rounded-xl border object-cover object-center"
                  src={image[0] === "/" ? image : "/" + image}
                  alt={name}
                  width={170}
                  height={170}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="right-2 group-focus:opacity-65 opacity-0 group-hover:opacity-65 hover:opacity-100" />
          <CarouselPrevious className="left-2 group-focus:opacity-65 opacity-0 group-hover:opacity-65 hover:opacity-100" />
        </Carousel>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle className="text-2xl font-black capitalize">{name}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
        <div className="price-section flex items-center gap-2">
          <p className="text-2xl font-bold">
            ${(discountPrice ? discountPrice : price).toLocaleString()}
          </p>
          <p className="line-through">
            ${(discountPrice ? price : "").toLocaleString()}
          </p>
          <span className="text-red-300 ml-auto text-sm">
            {discountPercentage && `-${discountPercentage}% off`}
          </span>
        </div>
        <div className="tags flex gap-1 flex-wrap">
          {tags.map((tag) => (
            <span className="py-0.5 px-2 text-xs cursor-pointer rounded-xl bg-secondary">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1 mt-auto">
        {Object.entries(details).map((detail) => (
          <p className="text-sm">
            <strong className="capitalize">
              {detail[0].split("_").join(" ")}
            </strong>
            : {detail[1]}
          </p>
        ))}
        <Button variant="secondary" className="self-stretch flex gap-1">
          <IconShoppingCart />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
