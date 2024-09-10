"use client";

import { useState } from "react";
import Image from "next/image";
import { FaAddressCard, FaBars, FaHandsHelping, FaRegEye, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { LoginButton } from "@/components/auth/login-button";
import NavbarHome from "@/components/home/navbarhome";

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-primary to-blue-500 min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-4 lg:px-20 flex items-center justify-between bg-white bg-opacity-70 backdrop-blur-lg relative">
        <NavbarHome/>
      </header>
      {/* Hero Section */}
      <section className="text-center flex flex-col items-center mt-8 md:mt-16 lg:mt-24">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          O Melhor Sistema para Monitoramento de Saúde
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-100 mt-4 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          O MetabolicHub é a solução ideal para auxiliar e acompanhar pessoas
          com síndromes metabólicas e doenças endócrinas. Oferecemos um controle
          total, eficiência e uma experiência intuitiva para o gerenciamento de
          sua saúde.
        </motion.p>
        <LoginButton>
          <motion.button
            className="mt-6 bg-white text-primary font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comece Agora
          </motion.button>
        </LoginButton>
        {/* Aumentando o espaço abaixo do botão */}
        <div className="mb-12 md:mb-20"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24 bg-gray-100 w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Funcionalidades de Destaque
          </motion.h3>
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Item */}
            <motion.div
              className="p-6 md:p-8 bg-white rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center justify-center p-6">
                <FaRegEye
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  size={80}
                />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mt-4">
                Monitoramento Preciso
              </h4>
              <p className="text-gray-600 mt-2">
                Acompanhe sua saúde com dados precisos e em tempo real para uma
                gestão eficiente das condições metabólicas e endócrinas.
              </p>
            </motion.div>
            {/* Other Features */}
            <motion.div
              className="p-6 md:p-8 bg-white rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-center p-6">
                <FaAddressCard
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  size={80}
                />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mt-4">
                Interface Amigável
              </h4>
              <p className="text-gray-600 mt-2">
                Navegue com facilidade através de uma interface intuitiva e
                fácil de usar, desenvolvida pensando no seu conforto.
              </p>
            </motion.div>
            <motion.div
              className="p-6 md:p-8 bg-white rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-center p-6">
                <FaHandsHelping
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  size={80}
                />
              </div>
              <h4 className="text-lg md:text-xl font-semibold mt-4">
                Suporte Dedicado
              </h4>
              <p className="text-gray-600 mt-2">
                Receba suporte contínuo de nossa equipe especializada para
                resolver qualquer dúvida ou problema que você possa ter.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-16 lg:py-24 bg-gradient-to-r from-primary to-blue-500 w-full text-white"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            O que Nossos Usuários Dizem
          </motion.h3>
          <div className="mt-8 md:mt-12 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Testimonial 1 */}
            <motion.div
              className="bg-white text-primary p-6 md:p-8 rounded-lg shadow-lg max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg md:text-xl">
                "O MetabolicHub mudou a forma como gerencio minha saúde. A
                precisão dos dados e a facilidade de uso são excepcionais!"
              </p>
              <p className="text-right mt-4">- João Silva</p>
            </motion.div>
            {/* Testimonial 2 */}
            <motion.div
              className="bg-white text-primary p-6 md:p-8 rounded-lg shadow-lg max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl">
                "Um sistema indispensável para qualquer pessoa com condições
                metabólicas. O suporte é fantástico e a interface é extremamente
                amigável!"
              </p>
              <p className="text-right mt-4">- Maria Oliveira</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-16 lg:py-24 bg-gray-100 w-full text-center"
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Pronto para Transformar Seu Monitoramento de Saúde?
          </motion.h3>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Entre em contato conosco para saber mais sobre como o MetabolicHub
            pode ajudar você a alcançar uma saúde melhor e mais equilibrada.
          </p>
          <motion.button
            className="mt-6 bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-primary-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale Conosco
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-white bg-gradient-to-r from-primary to-blue-500">
        <p>&copy; 2024 MetabolicHub. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
