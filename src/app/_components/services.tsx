"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Car,  Wrench, Bolt, BatteryCharging, Key, ScanLine} from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react';
import { title } from 'process';

const services = [
    {
        tilte: "",
        description: "",
        duration: "",
        icon: "",
        linkText: ""
    }
]

export function Services() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="reative"></div>
      </div>
    </section>
  );
}
