"use client";

import useEmblaCarousel from "embla-carousel-react";
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

const services = [
  {
    tilte: "Injeção Eletrônica",
    description:
      "O serviço de injeção eletrônica envolve o diagnóstico e ajuste do sistema para garantir o desempenho ideal do motor. Verificamos sensores, atuadores e recalibramos a injeção para otimizar o consumo de combustível e a eficiência do veículo.",
    duration: "2h",
    icon: <Bolt />,
    linkText:
      "Olá, gostaria de agendar o serviço de Injeção Eletrônica para meu carro. Preciso realizar o diagnóstico e ajuste do sistema de injeção para melhorar o desempenho e o consumo de combustível. Por favor, me informe a disponibilidade. Obrigado!",
  },
  {
    tilte: "Motor de Partida",
    description:
      "O motor de partida é responsável por acionar o motor do veículo. Realizamos a revisão, conserto ou substituição do motor de partida, assegurando que seu carro sempre ligue na hora certa.",
    duration: "2h",
    icon: <Car />,
    linkText:
      "Olá, estou precisando do serviço de Motor de Partida. O motor não está funcionando corretamente e preciso de um diagnóstico para consertar ou substituir a peça. Qual seria a disponibilidade para esse serviço? Agradeço!",
  },
  {
    tilte: "Alternadores",
    description:
      "Realizamos a manutenção e o conserto de alternadores, essenciais para o funcionamento do sistema elétrico do seu veículo, recarregando a bateria e garantindo que todos os componentes elétricos funcionem corretamente.",
    duration: "2h",
    icon: <Bolt />,
    linkText:
      "Oi, estou precisando do serviço de Alternador. Meu alternador não está funcionando corretamente e isso está afetando a carga da bateria. Como posso agendar esse serviço? Obrigado!",
  },
  {
    tilte: "Elétrica Geral de Automóveis",
    description:
      "Cobrimos todos os aspectos elétricos do seu veículo, incluindo faróis, fusíveis, sistema de ignição e muito mais. Fazemos diagnósticos e consertos em toda a parte elétrica para garantir que tudo funcione de forma segura e eficiente.",
    duration: "Variável.",
    icon: <Wrench />,
    linkText:
      "Olá! Estou precisando de uma revisão geral na parte elétrica do meu carro, incluindo faróis, fusíveis e sistema de ignição. Pode me ajudar com isso? Como posso agendar o serviço? Agradeço!",
  },
  {
    tilte: "Scanner Automotivo",
    description:
      "Utilizamos scanner automotivo para diagnosticar e resolver problemas eletrônicos e de software do seu carro. Este serviço inclui a leitura de códigos de erro e a resolução de falhas no sistema.",
    duration: "1h",
    icon: <ScanLine />,
    linkText:
      "Oi, gostaria de agendar o serviço de Scanner Automotivo. Preciso que seja feito o diagnóstico do meu carro para verificar códigos de erro e problemas no sistema. Qual a disponibilidade para esse serviço?",
  },
  {
    tilte: "Teste e Limpeza de Bicos",
    description:
      "Realizamos o teste e a limpeza dos bicos injetores, essenciais para garantir uma combustão eficiente e reduzir o consumo de combustível. Isso ajuda a evitar falhas no motor e melhora o desempenho.",
    duration: " 1h",
    icon: <Wrench />,
    linkText:
      "Olá, preciso do serviço de Teste e Limpeza de Bicos Injetores. O desempenho do meu carro está baixo, e gostaria de verificar a eficiência dos bicos injetores. Como posso agendar esse serviço?",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl pt-2">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1 select-none">
                            {item.tilte}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>

                      <a
                        href="#"
                        className="flex items-center justify-center gap-2 hover:bg-[#FFC107] px-4 py-1 rounded-md duration-300"
                      >
                        <WhatsappLogo className="w-5 h-5" />
                        Entrar em contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="flex items-center justify-center rounded-full shadow-lg bg-white w-10 h-10 absolute -left-2 top-1/2 transform -translate-y-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={scrollNext}
            className="flex items-center justify-center rounded-full shadow-lg bg-white w-10 h-10 absolute -right-3 top-1/2 transform -translate-y-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
