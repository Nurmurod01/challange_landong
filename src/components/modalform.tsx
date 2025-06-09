"use client";

import type React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Zap, ArrowRight, X, User, Phone } from "lucide-react";

// Change the component definition to accept props
export function ModalForm({ externalTrigger = false }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState(externalTrigger);
  const router = useRouter();

  // Add useEffect to respond to externalTrigger changes
  useEffect(() => {
    if (externalTrigger) {
      setIsOpen(true);
    }
  }, [externalTrigger]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone });
    setIsOpen(false);
    router.push("/thank-you");
  };

  // Add a function to open the modal programmatically
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Add a standalone button outside the Dialog */}
      <Button
        onClick={openModal}
        size="lg"
        className="w-full bg-blue-800 text-white font-bold py-6 px-8 text-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-700"
      >
        <Zap className="h-4 w-4 mr-2" />
        RO'YXATDAN O'TISH
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* Remove the DialogTrigger since we now have a standalone button */}
        <DialogContent showCloseButton={false} className="min-w-full w-screen rounded-none h-screen p-0 bg-blue-800 border-none">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
              }}
            ></div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
            {/* Floating Elements - Only blue and white */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full animate-bounce opacity-30"></div>
            <div className="absolute top-40 right-32 w-6 h-6 bg-white rounded-full animate-pulse opacity-30"></div>
            <div className="absolute bottom-32 left-16 w-3 h-3 bg-white rounded-full animate-bounce animation-delay-1000 opacity-30"></div>
            <div className="absolute bottom-20 right-20 w-5 h-5 bg-white rounded-full animate-pulse animation-delay-500 opacity-30"></div>

            {/* Header Section */}
            <div className="text-center mb-12 max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center bg-white text-blue-800 rounded-full px-6 py-3 mb-6 shadow-lg font-bold text-sm">
                <Zap className="h-4 w-4 mr-2" />
                BEPUL CHELLENJ
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                HOZIROQ
                <br />
                QO'SHILING!
              </h1>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-white text-sm font-medium">10 Kun Bepul</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-white text-sm font-medium">AI Tools</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-white text-sm font-medium">
                    Amaliy Darslar
                  </p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <DialogHeader className="text-center mb-6">
                  <DialogTitle className="text-2xl font-bold text-white mb-2">
                    Ro'yxatdan o'tish
                  </DialogTitle>
                  <DialogDescription className="text-white/70">
                    Ma'lumotlaringizni kiriting va bepul kursga qo'shiling
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                      placeholder="Ismingizni kiriting"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300"
                      placeholder="+998 __ ___ __ __"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-white hover:bg-white/90 text-blue-800 font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
                  >
                    <Zap className="h-5 w-5 mr-2" />
                    YUBORISH
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </form>

                {/* Trust Indicators */}
                <div className="mt-6 text-center">
                  <p className="text-white/70 text-sm flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                    Ma'lumotlaringiz xavfsiz saqlanadi
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-8 text-center">
              <p className="text-white/80 text-lg font-medium">
                Faqat 30 soniya vaqt ketadi!
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
