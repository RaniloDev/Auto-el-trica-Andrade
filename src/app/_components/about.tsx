import Image from "next/image";
import carImg from "../../../public/carro-sem-fundo.png";
import car2Img from "../../../public/carro2-removebg-preview.png"
import fixingImg from "../../../public/mecanico-de-automoveis.png";
import { Check, MapIcon } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-[#FFC107]">
            <Image
              src={fixingImg}
              alt="Foto do Mecânico consertando o carro"
              fill
              quality={100}
              className="object-center hover:scale-110 duration-300"
              priority
            />
          </div>
          <div className="absolute w-50 h-35 right-4 -bottom-8 rounded-lg overflow-hidden border-4 bg-[#1E1E1E] border-white">
            <Image
              src={car2Img}
              alt="Foto do carro"
              fill
              quality={100}
              priority
            />
          </div>
        </div>

        <div className="space-y-6 mt-10">
          <h2 className="text-4xl font-bold">SOBRE</h2>
          <p>
            Somos especialistas em mecânica e elétrica automotiva, oferecendo
            manutenção completa em injeção eletrônica, ignição, testes de bicos
            e atuadores. Realizamos revisão de motores, testes de bomba de
            combustível, bateria e scanner automotivo. Também consertamos e
            revisamos alternadores e motores de partida, atendendo veículos de
            linha leve, média e pesada com tecnologia e precisão.
          </p>

          <p className="font-bold text-center">Auto elétrica Andrade</p>

          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="text-[#FFC107]" />
              Revisão completa do sistema elétrico e mecânico.
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#FFC107]" />
              Conserto e manutenção de alternadores e motor de partida.
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-[#FFC107]" />
              Diagnóstico avançado com scanner automotivo.
            </li>
          </ul>

          <div className="flex gap-2">
            <a
              href="#"
              className="bg-[#FFC107] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-yellow-600 duration-400"
            >
              <WhatsappLogo className="w-5 h-5 text-white" />
              Contato via WhatsApp
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
            >
              <MapIcon className="w-5 h-5 text-black" />
              Endereço da oficina
            </a>
          </div>
        </div>
        </div>
        
      </div>
    </section>
  );
}
