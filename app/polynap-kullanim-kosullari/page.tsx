import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kullanım Koşulları - PolyNap',
  description: 'PolyNap mobil uygulaması için Kullanım Koşulları',
  robots: 'index, follow',
}

export default function PolyNapKullanimKosullari() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">PolyNap - Kullanım Koşulları</h1>
          <p className="text-muted-foreground">
            Uygulamamızı kullanmadan önce lütfen bu koşulları dikkatli bir şekilde okuyun
          </p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="mb-8 text-muted-foreground text-center">
            <strong>Son Güncelleme:</strong> 14 Haziran 2024
          </p>

          <p className="mb-8 text-muted-foreground">
            PolyNap'e hoş geldiniz! Bu Kullanım Koşulları ("Koşullar"), PolyNap ("biz", "bize" veya "bizim") tarafından sağlanan PolyNap mobil uygulamasını ("Uygulama") kullanımınızı yönetir. Uygulamamızı indirerek, erişerek veya kullanarak, bu Koşulları ve Gizlilik Politikamızı kabul etmiş olursunuz. Bu Koşulları kabul etmiyorsanız, Uygulamayı kullanmayın.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Uygulama Açıklaması ve Lisans</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-4 text-muted-foreground">
                PolyNap, uyku düzeninizi analiz etmenize, kişiselleştirilmiş program önerileri almanıza, adaptasyon sürecinizi takip etmenize ve uykunuz hakkında ayrıntılı istatistikleri görüntülemenize yardımcı olmak için tasarlanmış çok fazlı bir uyku uygulamasıdır.
              </p>
              <p className="text-muted-foreground">
                Bu Koşullara tabi olarak, Uygulamayı kişisel, ticari olmayan amaçlarla kullanmanız için size sınırlı, münhasır olmayan, devredilemez ve geri alınabilir bir lisans veriyoruz.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Önemli Tıbbi Sorumluluk Reddi</h2>
            <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
              <p className="text-red-800 dark:text-red-200">
                <strong>⚠️ Önemli:</strong> PolyNap bir tıbbi cihaz değildir ve yalnızca bilgilendirme ve eğitim amaçlıdır. Uygulama tarafından sağlanan içerik, programlar, ipuçları ve analizler, profesyonel tıbbi tavsiye, teşhis veya tedavinin yerini tutmaz. Tıbbi bir durum veya uyku sağlığınızla ilgili sorularınız için daima kalifiye bir sağlık uzmanının tavsiyesine başvurun. Bu Uygulamada okuduğunuz veya kullandığınız bir şey nedeniyle profesyonel tıbbi tavsiyeyi asla göz ardı etmeyin veya aramayı geciktirmeyin.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Kullanıcı Hesapları ve Veriler</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                Uygulamanın belirli özelliklerini kullanmak için Gizlilik Politikamızda açıklandığı şekilde kişisel bilgilerinizi sağlamanız gerekebilir. Bu bilgilerin doğruluğunu sağlamaktan ve hesabınız altında gerçekleşen tüm faaliyetlerden siz sorumlusunuz.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Abonelikler</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-4 text-muted-foreground">
                Uygulamanın belirli özellikleri yalnızca ücretli bir abonelik ("Abonelik") aracılığıyla kullanılabilir.
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Faturalandırma</h4>
                  <p className="text-muted-foreground">Ödeme, satın alma onayı ile Apple ID hesabınızdan tahsil edilecektir.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Otomatik Yenileme</h4>
                  <p className="text-muted-foreground">Aboneliğiniz, mevcut abonelik döneminin bitiminden en az 24 saat önce iptal etmediğiniz sürece aynı süre ve fiyattan otomatik olarak yenilenecektir. Hesabınız, mevcut dönemin bitiminden önceki 24 saat içinde yenileme için ücretlendirilecektir.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">İptal</h4>
                  <p className="text-muted-foreground">Aboneliklerinizi satın aldıktan sonra App Store hesap ayarlarınıza giderek yönetebilir ve iptal edebilirsiniz. Abonelikleri yönetme hakkında daha fazla bilgi için lütfen Apple'ın destek sayfasını ziyaret edin: <a href="https://support.apple.com/tr-tr/HT202039" className="text-primary hover:underline">https://support.apple.com/tr-tr/HT202039</a>.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">İadeler</h4>
                  <p className="text-muted-foreground">Tüm satın alımlar nihaidir. Yürürlükteki yasaların izin verdiği ölçüde, abonelikler iade edilemez ve kısmi abonelik dönemleri veya kullanılmamış içerik için geri ödeme veya kredi sağlamayız.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Fiyat Değişiklikleri</h4>
                  <p className="text-muted-foreground">Abonelik fiyatlarımızı değiştirme hakkını saklı tutarız. Bu tür fiyat değişiklikleri hakkında size makul bir bildirim süresi tanıyarak, yeni fiyatları Uygulamada yayınlayarak ve/veya size bir e-posta bildirimi göndererek bilgi vereceğiz.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Kabul Edilebilir Kullanım</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-4 text-muted-foreground">Aşağıdakileri yapmamayı kabul edersiniz:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Uygulamayı yasa dışı bir amaçla veya herhangi bir yerel, eyalet, ulusal veya uluslararası yasayı ihlal ederek kullanmak.</li>
                <li>Uygulamanın kaynak kodunu tersine mühendislik yapmak, kaynak koda dönüştürmek, parçalarına ayırmak veya keşfetmeye çalışmak.</li>
                <li>Uygulamayı temel alan türev çalışmalar değiştirmek, uyarlamak veya oluşturmak.</li>
                <li>Uygulamayı satmak, kiralamak veya dağıtmak.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Fikri Mülkiyet</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                Metin, grafikler, logolar, çizelgeler ve yazılım dahil ancak bunlarla sınırlı olmamak üzere Uygulamanın tüm içeriği, özellikleri ve işlevselliği PolyNap'in münhasır mülkiyetindedir ve uluslararası telif hakkı, ticari marka ve diğer fikri mülkiyet yasalarıyla korunmaktadır.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Fesih</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                Bu Koşulları ihlal etmeniz de dahil olmak üzere herhangi bir nedenle, önceden bildirimde bulunmaksızın veya herhangi bir yükümlülük altına girmeksizin Uygulamaya erişiminizi herhangi bir zamanda sonlandırabilir veya askıya alabiliriz. Fesih üzerine, Uygulamayı kullanma hakkınız derhal sona erecektir.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Garantilerin Reddi</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                Uygulama, "OLDUĞU GİBİ" ve "MEVCUT OLDUĞU GİBİ" esasına göre sağlanır. Uygulamanın işleyişi veya kullanılabilirliği ya da içinde yer alan bilgi, içerik veya materyallerle ilgili olarak açık veya zımni hiçbir garanti vermemekteyiz.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Sorumluluğun Sınırlandırılması</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                Yasaların izin verdiği en geniş ölçüde, PolyNap hiçbir durumda Uygulamayı kullanmanızdan kaynaklanan veya bununla ilgili dolaylı, arızi, özel, sonuçsal veya cezai zararlardan sorumlu tutulamaz.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Bu Koşullardaki Değişiklikler</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                Bu Koşulları herhangi bir zamanda değiştirme hakkını saklı tutarız. Herhangi bir değişikliği, yeni Koşulları Uygulama içinde veya web sitemizde yayınlayarak size bildireceğiz. Herhangi bir değişiklik için bu Koşulları periyodik olarak gözden geçirmeniz tavsiye edilir.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Geçerli Hukuk</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                Bu Koşullar, kanunlar ihtilafı hükümlerine bakılmaksızın Türkiye kanunlarına göre yönetilecek ve yorumlanacaktır.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Apple'a Özel Koşullar</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-4 text-muted-foreground">
                Aşağıdaki koşullar, PolyNap'i Apple App Store'dan indirdiğinizde kullanımınız için geçerlidir:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Kabul</h4>
                  <p className="text-muted-foreground">Bu Sözleşme sadece siz ve bizim aramızda yapılmıştır, Apple ile değil. Apple değil, biz Uygulama ve içeriğinden tamamen sorumluyuz.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Lisans Kapsamı</h4>
                  <p className="text-muted-foreground">Uygulamayı kullanma lisansınız, sahip olduğunuz veya kontrol ettiğiniz Apple markalı ürünlerde ve Apple Media Services Kullanım Koşullarında belirtilen Kullanım Kurallarının izin verdiği şekilde Uygulamayı kullanmak için devredilemez bir lisansla sınırlıdır. Uygulama, Aile Paylaşımı veya toplu satın alma yoluyla sizinle ilişkili diğer hesaplar tarafından erişilebilir ve kullanılabilir.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Bakım ve Destek</h4>
                  <p className="text-muted-foreground">Uygulama için herhangi bir bakım ve destek hizmeti sağlamaktan tamamen biz sorumluyuz. Apple'ın Uygulama ile ilgili herhangi bir bakım ve destek hizmeti sağlama yükümlülüğü yoktur.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Garanti ve Ürün İddiaları</h4>
                  <p className="text-muted-foreground">Herhangi bir ürün garantisinden tamamen biz sorumluyuz. Uygulamanın geçerli herhangi bir garantiye uymaması durumunda, Apple'a bildirebilirsiniz ve Apple size Uygulama için ödenen tutarı iade edecektir. Yürürlükteki yasaların izin verdiği azami ölçüde, Apple'ın Uygulama ile ilgili başka hiçbir garanti yükümlülüğü olmayacaktır.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Fikri Mülkiyet Hakları</h4>
                  <p className="text-muted-foreground">Uygulamanın herhangi bir üçüncü tarafın fikri mülkiyet haklarını ihlal ettiğine dair herhangi bir üçüncü taraf iddiası durumunda, Apple değil, biz bu tür fikri mülkiyet ihlali iddiasının araştırılması, savunulması, çözülmesi ve tahliyesinden tamamen sorumlu olacağız.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Üçüncü Taraf Lehdarı</h4>
                  <p className="text-muted-foreground">Apple ve Apple'ın yan kuruluşları bu Sözleşmenin üçüncü taraf lehdarlarıdır ve bu Sözleşmenin hüküm ve koşullarını kabul etmeniz üzerine, Apple bu Sözleşmeyi sizin aleyhine üçüncü taraf lehdarı olarak uygulama hakkına sahip olacaktır.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Kullanıcı Beyanları</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-4 text-muted-foreground">
                Bu Uygulamayı kullanarak, aşağıdakileri beyan ve garanti edersiniz:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>ABD Hükümeti ambargosu olan veya ABD Hükümeti tarafından "terörizmi destekleyen" ülke olarak belirlenen bir ülkede bulunmuyorsunuz.</li>
                <li>ABD Hükümeti'nin yasaklı veya kısıtlı taraflar listesinde yer almıyorsunuz.</li>
                <li>Bu Uygulamayı kullanırken geçerli üçüncü taraf hizmet sözleşmelerine uyacaksınız.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. İletişim Bilgileri</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                Bu Koşullar hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Geliştirici:</strong> Salim Taner Çelik
                </p>
                <p>
                  <strong>E-posta:</strong>{" "}
                  <a 
                    href="mailto:tanercelik2001@gmail.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    tanercelik2001@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Adres:</strong> Reisdere Mahallesi, Çeşme, İzmir, Türkiye
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-center p-6 bg-muted/30 rounded-lg border">
            <p className="text-muted-foreground">
              PolyNap'i kullanarak, bu Kullanım Koşullarını okuduğunuzu, anladığınızı ve bunlara bağlı olmayı kabul ettiğinizi beyan edersiniz.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            <a href="/polynap-terms-of-use" className="text-primary hover:underline">
              Click here for English Terms of Use
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 