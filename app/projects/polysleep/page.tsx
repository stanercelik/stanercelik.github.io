"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaArrowLeft } from 'react-icons/fa'

const PolysleepPage = () => {
  const imageCategories = {
    onboarding: [
      "/images/polysleep/onboarding-polysleep-1.jpg",
      "/images/polysleep/onboarding-polysleep-2.jpg",
    ],
    mainScreen: [
      "/images/polysleep/mainScreen-polysleep.png",
    ],
    history: [
      "/images/polysleep/history-polysleep.png",
    ],
    analytics: [
      "/images/polysleep/analytics-polysleep.png",
      "/images/polysleep/analytics2-polysleep.png",
      "/images/polysleep/analytics3-polysleep.png",
    ],
    profile: [
      "/images/polysleep/profile-polysleep.png",
      "/images/polysleep/profile-adaptation-polysleep.png",
    ]
  }

  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("onboarding")

  const allImages = [
    ...imageCategories.onboarding,
    ...imageCategories.mainScreen,
    ...imageCategories.history,
    ...imageCategories.analytics,
    ...imageCategories.profile
  ]

  const categoryTitles = {
    onboarding: "Onboarding",
    mainScreen: "Ana Ekran",
    history: "Geçmiş",
    analytics: "Analizler",
    profile: "Profil"
  }

  const categoryDescriptions = {
    onboarding: "Kullanıcılar uygulamayı ilk açtıklarında, kişiselleştirilmiş uyku programları oluşturmak için basit sorulara yanıt verirler.",
    mainScreen: "Ana ekranda kullanıcılar 24 saatlik uyku programlarını görebilir ve düzenleyebilirler.",
    history: "Geçmiş ekranında, tamamlanan uyku seansları takvim görünümünde incelenebilir.",
    analytics: "Analiz ekranlarında kullanıcılar, uyku verilerinin grafiksel gösterimlerini ve kazanılan zaman istatistiklerini görebilirler.",
    profile: "Profil ekranında kullanıcılar, streak takibini, rozetleri ve kişiselleştirme seçeneklerini bulabilirler."
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <div className="mb-8">
        <Link href="/#projects" className="flex items-center gap-2 text-sm hover:underline mb-6">
          <FaArrowLeft /> Projelere Geri Dön
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">POLYSLEEP</h1>
            <p className="text-lg mb-6">
              Polysleep, kişiselleştirilmiş uyku planları oluşturan bir polifazik uyku planlama iOS uygulamasıdır. 
              Kullanıcıların tercihlerine göre uyarlanmış uyku programları oluşturarak daha verimli uyku döngüleri 
              elde etmelerine yardımcı olur.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Özellikler:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Kişiselleştirilmiş uyku programları</li>
                <li>Uyku adaptasyon takibi</li>
                <li>Detaylı uyku analizleri</li>
                <li>Bildirim entegrasyonu</li>
                <li>Uyku alarmları ve sesler</li>
                <li>Tam Türkçe desteği dahil dil lokalizasyonu</li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">SwiftUI</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">MVVM</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">SwiftData</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">RevenueCat</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">UserNotifications</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">AVFoundation</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">Localization</span>
            </div>
            
            <Link
              href="https://github.com/stanercelik/PolySleep"
              target="_blank"
              className="inline-block px-4 py-2 rounded-md border border-current hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 flex items-center gap-2 w-fit"
            >
              <FaGithub className="text-lg" /> GitHub
            </Link>
          </div>
          
          <div className="w-full md:w-auto">
            <Image
              src="/images/polysleep/mainScreen-polysleep.png"
              alt="Polysleep Ana Ekran"
              width={300}
              height={600}
              className="rounded-lg shadow-lg mx-auto"
              priority
            />
          </div>
        </div>
      </div>
      
      <div className="mb-12 p-6 rounded-lg bg-black/5 dark:bg-white/5">
        <h2 className="text-2xl font-bold mb-6">Proje Detayları</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Genel Bakış</h3>
            <p className="text-base">
              PolySleep, kullanıcıların polifazik uyku düzenlerini takip etmelerine ve optimize etmelerine yardımcı olan 
              bir iOS uygulamasıdır. Uygulama, monofonık uyku (tek parça uyku) yerine, gün içine yayılmış birden fazla 
              uyku periyodunu planlayarak kullanıcıların toplam uyku süresini azaltırken uyku kalitesini artırmayı amaçlar.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Teknik Altyapı</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>SwiftUI ve MVVM mimarisi ile modern ve sürdürülebilir kod yapısı</li>
              <li>SwiftData ile offline-first veri depolama yaklaşımı</li>
              <li>Supabase backend entegrasyonu</li>
              <li>RevenueCat ile abonelik yönetimi</li>
              <li>One Signal ile push notification desteği</li>
              <li>AVFoundation ile özelleştirilmiş uyku sesleri ve alarmlar</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Ana Ekranlar</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Onboarding</strong>: Kullanıcı tercihlerine göre kişiselleştirilmiş uyku programı önerisi</li>
              <li><strong>Ana Sayfa</strong>: 24 saatlik timeline ile uyku bloklarının gösterimi ve düzenlenmesi</li>
              <li><strong>Geçmiş (History)</strong>: Takvim görünümünde geçmiş uyku kayıtları ve performans</li>
              <li><strong>Analizler (Analytics)</strong>: Uyku verilerinin grafiksel gösterimi, "kazanılan zaman" istatistikleri</li>
              <li><strong>Profil</strong>: Streak takibi, rozetler ve kişiselleştirme seçenekleri</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Tasarım Özellikleri</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Apple Human Interface Guidelines'a uygun modern UI</li>
              <li>Gece/Gündüz modu desteği</li>
              <li>Dynamic Type ile erişilebilirlik</li>
              <li>Mikro-etkileşimler ve animasyonlar</li>
              <li>Özelleştirilmiş veri görselleştirmeleri</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Gelecek Özellikler</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Premium abonelik ile ileri düzey analitikler</li>
              <li>Sosyal paylaşım ve arkadaşlarla karşılaştırma</li>
              <li>Yapay zeka destekli uyku tavsiyeleri</li>
              <li>Uyku sesleri kütüphanesi</li>
              <li>Daha fazla kişiselleştirme seçeneği</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Ekran Görüntüleri</h2>
        
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-2 mb-6 -mx-2 scrollbar-none">
            <div className="flex px-2 gap-2">
              {Object.keys(imageCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 whitespace-nowrap rounded-md transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-black/10 dark:bg-white/10 font-medium'
                      : 'hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {categoryTitles[category as keyof typeof categoryTitles]}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">{categoryTitles[activeCategory as keyof typeof categoryTitles]}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {categoryDescriptions[activeCategory as keyof typeof categoryDescriptions]}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {imageCategories[activeCategory as keyof typeof imageCategories].map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer relative aspect-[9/16] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${categoryTitles[activeCategory as keyof typeof categoryTitles]} Ekran Görüntüsü ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-3xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              Kapat
            </button>
            <Image
              src={selectedImage}
              alt="Polysleep Ekran Görüntüsü"
              width={500}
              height={900}
              className="object-contain max-h-[90vh]"
            />
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default PolysleepPage 