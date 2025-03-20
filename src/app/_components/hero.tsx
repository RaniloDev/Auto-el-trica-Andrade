import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import mechanicImg from "../../../public/um_mecânico_para_uma_landing_page_de_serviço-removebg.png";
import logoImg from "../../../public/Captura de tela 2025-03-19 195519.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#000] text-white relative overflow-hidden pt-12">
      <div>
        <Image
          src={mechanicImg}
          alt="Foto do mecânico"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-35 md:hidden"></div>
      </div>

      <div className="flex flex-col gap-6 container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
              Potência, precisão e confiança para o seu veículo!
            </h1>
            <p className="lg:text-lg">
              A nossa mecânica, cada serviço é realizado com máxima qualidade e
              atenção aos detalhes. Seja uma revisão completa, manutenção
              preventiva ou reparo emergencial.
            </p>
            <a
              href="#"
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-green-800 duration-400"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>
            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-[#007BFF] text-white px-2 py-1 rounded-md">
                  5%
                </b>{" "}
                de desconto no primeiro serviço.
              </p>

              <div className="flex mt-4">
                <div className="w-50 hidden lg:block">
                <Image src={logoImg} alt="Foto da logo" quality={100} className="object-fill"/>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-[500px] relative">
            <Image
              src={mechanicImg}
              alt="Foto do mecânico"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0px, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
