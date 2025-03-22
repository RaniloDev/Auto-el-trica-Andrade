import valeo from "../../../public/Valeo_logo.png";
import bosch from "../../../public/Bosch-logo.jpg.png";
import denso from "../../../public/Denso_logo.svg.png";
import delphi from "../../../public/Delphi_logo.png";
import magnetiMarelli from "../../../public/magneti_logo.png";
import ngk from "../../../public/Ngk_logo.png";
import Image from "next/image";
import { FacebookLogo, InstagramLogo, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr"

const brands = [
  { name: "Valeo", logo: valeo },
  { name: "Bosch", logo: bosch },
  { name: "Denso", logo: denso },
  { name: "Delphi", logo: delphi },
  { name: "Magneti Marelli", logo: magnetiMarelli },
  { name: "NGK", logo: ngk },
];

export function Footer() {
  return (
    <section className="bg-[#1e293b] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto"
                  }}
                  className="object-contain bg-white"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Auto elétrica Andrade</h3>
            <p className="mb-4">Potência, precisão e confiança para o seu veículo!</p>
            <a className="bg-green-500 px-4 py-2 rounded-md" href="https://wa.me/5587991195276?text=Ol%C3%A1,%20gostaria%20do%20seu%20serviço!" target="_blank">Contato via WhatsApp</a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p className="">Telefone: (87) 87 98119-5276</p>
            <p className="">Email: Bebetolimateck@gmail.com</p>
            <p className="">Rua Ambrósio dos Santos, número 442 | Rajada-PE</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
            <div className="flex gap-2">
              <a href="#"><FacebookLogo className="w-8 h-8 hover:text-[#1877F2]"/></a>
              <a href="#"><InstagramLogo className="w-8 h-8 hover:text-[#E1306C]"/></a>
              <a href="#"><YoutubeLogo className="w-8 h-8 hover:text-[#FF0000]"/></a>
            </div>
          </div>

         

        </footer>
      </div>
    </section>
  );
}
