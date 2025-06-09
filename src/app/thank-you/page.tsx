"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Ai } from "@/assets/index";

export default function ThankYouPage() {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 300);
    const timer2 = setTimeout(() => setShowButton(true), 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleJoinChannel = () => {
    window.open("https://t.me/your_channel", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-20 right-8 sm:top-40 sm:right-32 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 left-4 sm:bottom-32 sm:left-16 w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-bounce animation-delay-1000 opacity-30"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-3 h-3 sm:w-5 sm:h-5 bg-green-400 rounded-full animate-pulse animation-delay-500 opacity-40"></div>
        <div className="absolute top-1/2 left-2 sm:left-10 w-1 h-1 sm:w-2 sm:h-2 bg-blue-300 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-1/3 right-2 sm:right-10 w-2 h-2 sm:w-3 sm:h-3 bg-purple-300 rounded-full animate-ping animation-delay-700 opacity-50"></div>
      </div>

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

      <div className="relative z-10 min-h-screen flex items-center justify-center p-2 sm:p-4">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center">
            {/* Main Heading - Responsive text sizes */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight px-2">
              TABRIKLAYMIZ!
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                SIZ QABUL QILINDINGIZ
              </span>
            </h1>

            {/* Content Container */}
            <div
              className={`transition-all duration-1000 transform ${
                showContent
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* AI Image Section - Responsive sizing */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="relative">
                  {/* Floating elements around the AI image - Responsive sizing */}
                  <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce opacity-80 flex items-center justify-center">
                    <Sparkles className="h-3 w-3 sm:h-6 sm:w-6 text-white" />
                  </div>

                  <div className="absolute top-1/2 -left-4 sm:-left-10 w-3 h-3 sm:w-6 sm:h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse opacity-80"></div>
                  <div className="absolute top-1/4 -right-4 sm:-right-8 w-4 h-4 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse animation-delay-500 opacity-80"></div>

                  <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border border-white/30">
                    <Image
                      src={Ai || "/placeholder.svg?height=400&width=400"}
                      alt="AI Success"
                      width={200}
                      height={200}
                      className="w-32 h-32 xs:w-40 xs:h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 max-w-full h-auto rounded-xl sm:rounded-2xl shadow-lg mx-auto"
                    />

                    {/* Success Badge - Responsive sizing */}
                    <div className="absolute -top-2 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                      ✅ MUVAFFAQIYAT!
                    </div>
                  </div>
                </div>
              </div>

              {/* Subheading - Responsive text and spacing */}
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-blue-100 mb-4 sm:mb-8 leading-relaxed px-2">
                Endi siz{" "}
                <span className="text-yellow-400 font-bold">
                  10 kunlik AI Personal Branding
                </span>
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>
                challengeining a'zosisiz!
              </p>

              {/* Next Step Box - Responsive padding and text */}
              <div className="bg-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 mb-4 sm:mb-8 border border-gray-700 mx-2 sm:mx-4">
                <h3 className="text-white font-bold text-sm sm:text-lg mb-1 sm:mb-2">
                  Keyingi qadam:
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Telegram kanalimizga qo'shilib, birinchi vazifangizni oling va
                  boshqa ishtirokchilar bilan tanishing!
                </p>
              </div>
            </div>

            {/* CTA Button - Responsive sizing */}
            <div
              className={`text-center mb-6 sm:mb-12 transition-all duration-1000 transform px-2 ${
                showButton
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Button
                onClick={handleJoinChannel}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white font-bold py-3 px-6 sm:py-6 sm:px-12 text-sm sm:text-xl rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-700 animate-pulse"
              >
                <Users className="h-4 w-4 sm:h-6 sm:w-6 mr-2 sm:mr-3" />
                <span className="text-xs sm:text-base md:text-xl">
                  TELEGRAM KANALGA QO'SHILISH
                </span>
                <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6 ml-2 sm:ml-3" />
              </Button>

              <p className="text-blue-100 text-xs sm:text-sm mt-2 sm:mt-4 flex items-center justify-center">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1 sm:mr-2 animate-pulse"></span>
                1000+ ishtirokchi sizni kutmoqda!
              </p>
            </div>

            {/* Bottom Stats - Responsive grid and sizing */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xs sm:max-w-md mx-auto px-2">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 text-center border border-gray-700">
                <div className="text-lg sm:text-2xl font-bold text-white">
                  10
                </div>
                <div className="text-xs sm:text-xs text-gray-300">
                  Kun Challenge
                </div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 text-center border border-gray-700">
                <div className="text-lg sm:text-2xl font-bold text-white">
                  100%
                </div>
                <div className="text-xs sm:text-xs text-gray-300">Bepul</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 text-center border border-gray-700">
                <div className="text-lg sm:text-2xl font-bold text-white">
                  AI
                </div>
                <div className="text-xs sm:text-xs text-gray-300">Powered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
