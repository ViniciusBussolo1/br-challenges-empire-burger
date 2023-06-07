import { useEffect, useState } from "react";

import axios from "axios";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CommentsProps {
  name: string;
  image: string;
  age: number;
  testimonial: string;
}

export function Comentarios() {
  const [comments, setComements] = useState<CommentsProps[]>([]);

  useEffect(() => {
    axios
      .get("https://api.brchallenges.com/api/empire-burger/testimonials")
      .then((resp) => {
        setComements(resp.data);
      });
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-[8rem]">
      <div className="max-w-[73.185rem] mx-auto">
        <div className="w-[29.375rem] h-[3.938rem] ">
          <h1 className="font-Lilita text-[2rem] leading-[2.188rem] uppercase text-black">
            Nossa realeza
          </h1>
          <p className="text-[1rem] leading-[1.375rem] text-texto mt-[0.25rem]">
            A satisfação de nossos clientes em primeiro lugar!
          </p>
        </div>
        <Slider {...settings} className="mt-[1rem]">
          {comments.map((data) => {
            return (
              <div
                className="shadow-cardComentario rounded-[0.625rem] py-[0.75rem] px-[1rem]"
                key={data.name}
              >
                <p className="text-[1rem] leading-[1.375rem] text-texto-comentario line-clamp-4">
                  “{data.testimonial}”
                </p>
                <div className="flex w-[15rem] mt-[0.792rem]">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="rounded-[2rem] h-[3.031rem] w-[3.031rem] object-cover"
                  />

                  <div className="ml-[0.5rem] flex flex-col">
                    <h4 className="font-Lilita text-[1rem] leading-[1.563rem] text-black uppercase">
                      {data.name}
                    </h4>
                    <span className="text-[0.75rem] leading-[1.063rem] text-texto">
                      {data.age} Anos • Designer
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
