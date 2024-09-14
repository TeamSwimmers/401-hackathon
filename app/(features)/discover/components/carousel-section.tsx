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

export interface Props {
  indexes: number[];
  data: any;
}

export default function CarouselSection(props: Props) {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}
    >
      <CarouselContent>
        {props.indexes.map((value, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col w-full h-60 items-start justify-center p-6">
                  <span className="text-4xl font-semibold">
                    {props.data[value].companyName}
                  </span>
                  <span className="text-xl font-medium pl-1">
                    {props.data[value].role}
                  </span>
                  <span className="text-md font-medium pl-1">
                    {props.data[value].location}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
        <CarouselNext /> */}
    </Carousel>
  );
}
