import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Destek - PolyNap',
  description: 'PolyNap mobil uygulaması için destek sayfası',
  robots: 'index, follow',
}

export default function PolyNapDestek() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">PolyNap - Destek</h1>
          <p className="text-muted-foreground">
            Sorularınız ve sorunlarınız için buradayız
          </p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="mb-8 text-muted-foreground">
            Uygulamamızla ilgili herhangi bir sorun yaşarsanız veya sorularınız olursa, çoklu uyku yolculuğunuzdan en iyi şekilde faydalanmanız için size yardımcı olmaktan memnuniyet duyarız.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">İletişim</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-4 text-muted-foreground">
                En hızlı yardım için lütfen bize e-posta gönderin. Genellikle 24 saat içinde yanıt vermeye çalışıyoruz.
              </p>
              <p className="mb-4">
                <strong>Destek E-postası:</strong>{" "}
                <a 
                  href="mailto:tanercelik2001@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  tanercelik2001@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Lütfen e-postanızda yaşadığınız sorunu detaylı bir şekilde anlatın ve mümkünse ekran görüntüsü ekleyin.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Sıkça Sorulan Sorular (SSS)
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  S: Kişiselleştirilmiş çoklu uyku programı nasıl alabilirim?
                </h4>
                <p className="text-muted-foreground">
                  C: Uygulamadaki kapsamlı testi tamamlayın. Yaşam tarzınızı, tercihlerinizi ve ihtiyaçlarınızı analiz ederek size en uygun çoklu uyku programını önerecektir. Bu programı daha sonra istediğiniz zaman değiştirebilir veya düzenleyebilirsiniz.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  S: Uyku kalitemi nasıl doğru şekilde takip edebilirim?
                </h4>
                <p className="text-muted-foreground">
                  C: Geçmiş sayfasında her uyku seansını yıldızlarla (1-5) puanlayabilir ve uyku kaliteniz hakkında notlar ekleyebilirsiniz. Bu veriler doğru analizler oluşturmaya ve adaptasyon sürecinizi takip etmeye yardımcı olur.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  S: Bildirimlerim çalışmıyor. Ne yapmalıyım?
                </h4>
                <p className="text-muted-foreground">
                  C: Ayarlar > Bildirimler kısmına gidin ve bildirimlerin etkin olup olmadığını kontrol edin. Uyku saatinden kaç dakika önce bildirim almak istediğinizi de ayarlayabilirsiniz. Telefonunuzun PolyNap için bildirim izinlerinin açık olduğundan emin olun.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  S: Uyku alarmlarını nasıl kurarım?
                </h4>
                <p className="text-muted-foreground">
                  C: Ayarlar > Alarmlar bölümüne gidin. Programınızdaki her uyku bloğu için ayrı ayrı alarm kurabilirsiniz. Telefonunuzun uygulama için alarm izinlerinin açık olduğundan emin olun.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  S: Analitik grafikleri neyi gösteriyor?
                </h4>
                <p className="text-muted-foreground">
                  C: Analitik sayfası toplam uyku süresi, uyku kalitesi trendleri, uyku bileşeni analizi, en iyi ve en kötü günleriniz, kalite dağılımı, uyku dökümü ve çoklu uyku sayesinde kazandığınız zaman dahil olmak üzere kapsamlı veriler gösterir.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  S: Uygulamadaki seri nasıl çalışıyor?
                </h4>
                <p className="text-muted-foreground">
                  C: Çoklu uyku programınızı başarıyla takip ettiğiniz her gün seriniz artar. Profil sayfasında mevcut serinizi ve en uzun serinizi görebilirsiniz, bu da adaptasyon sürecinizi takip etmenize yardımcı olur.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  S: Uyku bloğu emojilerini özelleştirebilir miyim?
                </h4>
                <p className="text-muted-foreground">
                  C: Evet! Profil sayfasında ana uyku ve kestirme bloklarınız için emojileri özelleştirerek programınızı daha kişisel ve görsel olarak çekici hale getirebilirsiniz.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  S: Uygulama dilini veya temasını nasıl değiştirebilirim?
                </h4>
                <p className="text-muted-foreground">
                  C: Ayarlar kısmına gidin, burada Türkçe ve İngilizce diller arasında geçiş yapabilir ve tercihinize göre açık ve koyu temalar arasında seçim yapabilirsiniz.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  S: Uyku geçmişi verilerim yanlış görünüyor. Ne yapmalıyım?
                </h4>
                <p className="text-muted-foreground">
                  C: Geçmiş sayfasında uyku geçmişi girişlerinizi düzenleyebilirsiniz. Veri doğruluğu konusunda hala sorun yaşıyorsanız, lütfen sorunla ilgili belirli detaylarla destek ekibimizle iletişime geçin.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  S: Geri bildirim nasıl verebilirim veya uygulamayı nasıl puanlayabilirim?
                </h4>
                <p className="text-muted-foreground">
                  C: Ayarlar sayfasında "Geri Bildirim Gönder" ve "Bizi Puanla" butonlarını bulabilirsiniz. Geri bildirimleriniz uygulamayı herkes için geliştirmemize yardımcı olduğu için çok değerlidir.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-center p-6 bg-muted/30 rounded-lg border">
            <p className="text-muted-foreground">
              Hala yardıma mı ihtiyacınız var? Bizimle iletişime geçmekten çekinmeyin:{" "}
              <a 
                href="mailto:tanercelik2001@gmail.com" 
                className="text-primary hover:underline font-medium"
              >
                tanercelik2001@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            <a href="/polynap-support" className="text-primary hover:underline">
              Click here for English Support page
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 