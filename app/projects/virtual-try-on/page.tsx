"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaArrowLeft, FaAws, FaDatabase } from 'react-icons/fa'

const VirtualTryOnPage = () => {
  const imageCategories = {
    overview: [
      "/images/virtual-try-on/vyze-1.png",
      "/images/virtual-try-on/vyze-2.png",
    ],
    features: [
      "/images/virtual-try-on/vyze-3.png",
      "/images/virtual-try-on/vyze-4.png",
    ]
  }

  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("overview")

  const allImages = [
    ...imageCategories.overview,
    ...imageCategories.features
  ]

  const categoryTitles = {
    overview: "Genel Bakış",
    features: "Özellikler"
  }

  const categoryDescriptions = {
    overview: "VYZE uygulamasının genel görünümü ve kullanıcı arayüzü.",
    features: "Kıyafet deneme ve kombinleme özellikleri."
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <div className="mb-8">
        <Link href="/#projects" className="flex items-center gap-2 text-sm hover:underline mb-6">
          <FaArrowLeft /> Projelere Geri Dön
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">VYZE</h1>
            <p className="text-lg mb-6">
              VYZE, kullanıcıların kıyafetleri gerçekçi bir şekilde sanal olarak deneyebilecekleri bir mobil uygulamadır. 
              Google'ın görsel deneme modellerinden ilham alınarak, kullanıcıların farklı kıyafetleri kendileri üzerinde 
              görmelerini sağlar.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Özellikler:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Gerçekçi sanal kıyafet deneme</li>
                <li>Kıyafet kombinleme asistanı</li>
                <li>Kullanıcı profili ve vücut ölçü yönetimi</li>
                <li>Ürün galerisi ve favori listesi</li>
                <li>Alışveriş entegrasyonu</li>
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">Flutter</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">Clean Architecture</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">MobX</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">AWS Lambda</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">AWS S3</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">AWS DynamoDB</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">Amazon Cognito</span>
              <span className="px-3 py-1 text-sm rounded-md border border-current/20">AWS Amplify</span>
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <Image
              src="/images/virtual-try-on/vyze-1.png"
              alt="VYZE Ana Ekran"
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
              VYZE, tez projesi olarak geliştirilen ve ardından girişim olarak pazara sunulması planlanan bir sanal kıyafet deneme 
              uygulamasıdır. Google'ın visual try-on modelini temel alarak, kullanıcıların kıyafetleri uygulama üzerinden gerçekçi 
              bir şekilde görmelerini sağlamak için tasarlanmıştır. Proje, iki ekip arkadaşıyla birlikte Flutter kullanılarak geliştirildi.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Teknik Altyapı</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Flutter ile cross-platform kullanıcı arayüzü</li>
              <li>Clean Architecture ve MobX ile durum yönetimi</li>
              <li>AWS Lambda ile API fonksiyonları</li>
              <li>Amazon DynamoDB ile veri depolama</li>
              <li>Amazon Cognito ile kullanıcı kimlik doğrulama</li>
              <li>AWS S3 ile görsel ve dosya depolama</li>
              <li>AWS Amplify ile kullanıcı giriş ve kayıt yönetimi</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Ana Özellikler</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Sanal Kıyafet Deneme</strong>: Kullanıcılar kıyafetleri kendi görüntüleri üzerinde deneyebilir</li>
              <li><strong>Kombin Önerileri</strong>: Yapay zeka destekli kombin önerileri</li>
              <li><strong>Kişisel Gardırop</strong>: Kullanıcılar kendi gardıroplarını oluşturabilir</li>
              <li><strong>Bulut Senkronizasyon</strong>: Kullanıcı verileri güvenli bir şekilde bulutta saklanır</li>
              <li><strong>Görsel İşleme</strong>: Google'ın visual try-on modelinden ilham alan gerçekçi görsel işleme</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Proje Gelişim Süreci</h3>
            <p className="text-base">
              VYZE, başlangıçta akademik bir tez projesi olarak geliştirildi ve e-ticaret dünyasındaki gerçek bir soruna çözüm sunma 
              potansiyeli nedeniyle bir girişim projesine dönüştürüldü. Proje, kullanıcı deneyimi, performans ve gerçekçilik açısından 
              sürekli geliştirilmektedir. E-ticaret platformlarıyla entegrasyon ve genişletilmiş ürün kataloğu eklenmesi planlanmaktadır.
            </p>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              alt="VYZE Ekran Görüntüsü"
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

export default VirtualTryOnPage
