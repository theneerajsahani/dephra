"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, CheckCircle2, Layers, Smartphone, Upload, Zap } from "lucide-react";
import Link from "next/link";
import ProductViewer from "./components/ProductViewer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-zinc-900">
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              <Box className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-900">dephra</span>
          </div>
          <Link 
            href="https://calendly.com" 
            target="_blank"
            className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full transition-colors shadow-sm shadow-blue-500/20"
          >
            Schedule a Call
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 border border-blue-100">
              <Zap className="w-3.5 h-3.5 fill-current" />
              Now accepting early access partners
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6"
          >
            Make your products <br className="hidden md:block"/>
            <span className="text-blue-600">unforgettable.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Dephra turns standard product photos into high-fidelity 3D & AR assets. 
            Boost confidence and conversion by letting customers experience your products from every angle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
             <Link 
              href="https://calendly.com" 
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold text-lg hover:bg-zinc-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-zinc-100 text-zinc-900 rounded-full font-semibold text-lg hover:bg-zinc-200 transition-colors"
            >
              Try the Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="px-6 pb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-2">Live Preview</h2>
            <p className="text-zinc-500">See the difference between flat imagery and spatial 3D.</p>
          </div>
          
          <ProductViewer />
          
        </motion.div>
      </section>

      {/* Value Props / How it works */}
      <section id="how-it-works" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900">Effortless Transformation</h2>
            <p className="text-zinc-500 text-lg">No 3D artists required. Just your products and our AI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              icon={<Upload className="w-6 h-6 text-blue-600" />}
              title="1. Upload"
              description="Upload your existing high-res product photography directly to our secure dashboard."
            />
            <Card 
              icon={<Layers className="w-6 h-6 text-blue-600" />}
              title="2. Convert"
              description="Our specialized AI analyzes geometry and texture to build a photorealistic 3D model in minutes."
            />
            <Card 
              icon={<Smartphone className="w-6 h-6 text-blue-600" />}
              title="3. Integrate"
              description="Copy one line of code to embed the 3D viewer on your product page. Instantly AR ready."
            />
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-zinc-900">
              Why leading brands are switching to 3D.
            </h2>
            <p className="text-lg text-zinc-500">
              Static images are a thing of the past. Give your customers the confidence to buy by letting them inspect every detail.
            </p>
            
            <div className="space-y-4">
              <BenefitItem text="Increase conversion rates by up to 40%" />
              <BenefitItem text="Reduce return rates with accurate AR previews" />
              <BenefitItem text="Boost engagement and time-on-page" />
              <BenefitItem text="Compatible with Shopify, Magento, and more" />
            </div>

            <div className="pt-4">
              <Link 
                href="https://calendly.com"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2"
              >
                Start your transformation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full">
             <div className="bg-blue-600 text-white rounded-3xl p-10 md:p-16 text-center">
                <h3 className="text-3xl font-bold mb-4">40%</h3>
                <p className="text-blue-100 text-lg mb-8">Average conversion uplift for products with 3D/AR enabled.</p>
                <div className="h-1 w-20 bg-white/20 mx-auto rounded-full"/>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 px-6 bg-zinc-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to modernize your store?</h2>
          <p className="text-zinc-400 text-lg mb-10">
            Join the Early Access Program today. No credit card required, just a conversation about your needs.
          </p>
          <Link 
            href="https://calendly.com" 
            target="_blank"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-zinc-200 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
             <Box className="w-5 h-5 text-zinc-900" />
             <span className="font-bold text-zinc-900">dephra</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-900">About</a>
            <a href="#" className="hover:text-zinc-900">Privacy</a>
            <a href="mailto:contact@dephra.com" className="hover:text-zinc-900">Contact</a>
          </div>
          <p className="mt-4 md:mt-0">&copy; 2024 Dephra Inc.</p>
        </div>
      </footer>
    </main>
  );
}

function Card({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-3">{title}</h3>
      <p className="text-zinc-500 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
      <span className="text-zinc-700 font-medium">{text}</span>
    </div>
  )
}
