"use client";
import { CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { Ai } from "@/assets/index";
import { useState, useEffect, useRef } from "react";
import { DiamondBackground } from "@/components/diamondbg";
import { ModalForm } from "@/components/modalform";

// Add this after your imports
const animateFadeInUp = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out forwards;
}
`;

export default function LandingPage() {
  const [showFixedButton, setShowFixedButton] = useState(false);
  const mainButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainButtonRef.current) {
        const buttonRect = mainButtonRef.current.getBoundingClientRect();
        // Check if the button is not visible in the viewport
        const isButtonVisible =
          buttonRect.top < window.innerHeight && buttonRect.bottom > 0;

        setShowFixedButton(!isButtonVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(showFixedButton);

  return (
    <>
      <style jsx global>
        {animateFadeInUp}
      </style>
      <div className="bg-white overflow-hidden">
        {/* Header Section with Diamond Pattern Background */}
        <section className="relative min-h-screen flex justify-between max-md:flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
          {/* Diamond Pattern Background */}
          <DiamondBackground />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>

          <div className="relative z-10 flex items-center justify-center flex-1 px-4 py-12">
            <div className="max-w-lg text-center">
              {/* Modern Badge */}
              <div className="inline-flex items-center bg-blue-600  text-white rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl transition-all duration-300 transform ">
                <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                <span className="font-semibold text-sm tracking-wide">
                  BEPUL CHELLENJ
                </span>
              </div>

              {/* Modern Headline with better typography */}
              <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  10 KUNDA SUN'IY INTELLEKT
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  YORDAMIDA
                </span>
                <br />
                <div className=" mt-4 space-y-8 ">
                  <span className=" p-3 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-lg transform  transition-all duration-300">
                    SHAXSIY
                  </span>
                  <br />

                  <span className=" p-3 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-lg transform  transition-all duration-300">
                    BRENDINGIZNI
                  </span>
                  <br />

                  <span className=" p-3 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-lg transform  transition-all duration-300">
                    NOLDAN QURING
                  </span>
                </div>
              </h1>

              {/* Enhanced Subheading */}
              <p className="text-xl text-gray-700 mb-8 font-medium leading-relaxed">
                AI tools bilan professional brend yaratish bo'yicha
                <span className="text-blue-600 font-semibold">
                  {" "}
                  amaliy yo'riqnoma
                </span>
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">10</div>
                  <div className="text-sm text-gray-600">Kun</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Bepul</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600">AI</div>
                  <div className="text-sm text-gray-600">Tools</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center p-8">
            <div className="relative">
              {/* Floating elements around the AI image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-700 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-sky-500 rounded-full animate-bounce animation-delay-1000 opacity-60"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-pink-500 rounded-full animate-pulse opacity-60"></div>

              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
                <Image
                  src={Ai || "/placeholder.svg?height=500&width=500"}
                  alt="AI Assistant"
                  width={400}
                  height={400}
                  className="max-w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Benefits Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-blue-900 px-4 py-16">
          {/* Decorative elements */}
          {/* <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div> */}

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-white text-3xl font-bold mb-4">
                Ushbu chellenjda siz o'rganasiz:
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-6 mb-12">
              {[
                {
                  icon: "🤖",
                  text: "AI yordamida professional profil yaratish",
                },
                { icon: "🎨", text: "Vizual identifikatsiya va logo dizayni" },
                { icon: "📋", text: "Kontent strategiyasi va rejalashtirish" },
                {
                  icon: "📱",
                  text: "Ijtimoiy tarmoqlarda brendni rivojlantirish",
                },
                { icon: "✨", text: "AI tools bilan kontent yaratish sirlari" },
                {
                  icon: "🎯",
                  text: "Auditoriya tahlili va maqsadli marketing",
                },
                { icon: "💰", text: "Brendni monetizatsiya qilish yo'llari" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4  transition-all duration-300 transform "
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <p className="text-white font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="text-center" ref={mainButtonRef}>
              <ModalForm />
              <p className="text-center text-blue-100 text-sm mt-6 flex items-center justify-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Ro'yxatdan o'tish faqat 30 soniya vaqt oladi
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Fixed Button */}
        {showFixedButton && (
          <div className="fixed bottom-6 left-0 right-0 z-50 px-4 animate-fade-in-up">
            <div className="max-w-2xl mx-auto">
              <ModalForm externalTrigger={false} />
            </div>
          </div>
        )}

        {/* Enhanced Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-300 text-sm">
                © 2025 AI Personal Branding Challenge
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
