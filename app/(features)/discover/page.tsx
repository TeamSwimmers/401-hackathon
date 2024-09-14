"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

export default function Discover() {
  return (
    <div className="w-full h-full flex-col flex items-center container py-6 gap-6">
      <Carousel
        className="w-full md:max-w-2xl lg:max-w-3xl"
        plugins={[
          Autoplay({
            delay: 7000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-[21/9] items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      <div className="w-full md:max-w-2xl lg:max-w-3xl">
        <h1 className="font-semibold text-2xl">Discover</h1>
      </div>
    </div>
  );
}
