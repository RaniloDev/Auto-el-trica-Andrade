"use client";

import useEmblaCarousel from "embla-carousel-react";
import profileInImg from "../../../public/perfil-foto.png";
import {
  ChevronLeft,
  ChevronRight,
  Car,
  Wrench,
  Bolt,
  BatteryCharging,
  Key,
  ScanLine,
  Clock,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Ótimo atendimento e serviço impecável! Meu carro estava com falhas na injeção eletrônica, e resolveram rapidamente. Recomendo!",
    athor: "Pedro Soares",
    role: "Auto elétrica Andrade",
    image: profileInImg,
  },
  {
    content:
      "Profissionais extremamente qualificados! Fiz a revisão elétrica completa e agora meu carro está perfeito. Muito satisfeito!",
    athor: "Daniel Lima",
    role: "Auto elétrica Andrade",
    image: profileInImg,
  },
  {
    content:
      "Atendimento rápido e eficiente. Resolveram o problema do alternador do meu carro no mesmo dia. Serviço de alta qualidade!",
    athor: "Rafael",
    role: "Auto elétrica Andrade",
    image: profileInImg,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-12">Depoimentos</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt="Foto de perfil"
                          fill
                          sizes="96px"
                          className="object-cover rounded-full"
                        />
                      </div>

                      <p className="text-gray-200">{item.content}</p>
                      <div>
                        <p className="font-bold">{item.athor}</p>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="flex items-center justify-center rounded-full shadow-lg bg-[#FFC107] w-10 h-10 absolute -left-2 top-1/2 transform -translate-y-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={scrollNext}
            className="flex items-center justify-center rounded-full shadow-lg bg-[#FFC107] w-10 h-10 absolute -right-3 top-1/2 transform -translate-y-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
