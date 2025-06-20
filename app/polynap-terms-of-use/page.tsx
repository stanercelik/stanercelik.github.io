import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use - PolyNap',
  description: 'Terms of Use for PolyNap mobile application',
  robots: 'index, follow',
}

export default function PolyNapTermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">PolyNap - Terms of Use</h1>
          <p className="text-muted-foreground">
            Please read these terms carefully before using our app
          </p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="mb-8 text-muted-foreground text-center">
            <strong>Last Updated:</strong> June 14, 2024
          </p>

          <p className="mb-8 text-muted-foreground">
            Welcome to PolyNap! These Terms of Use ("Terms") govern your use of the PolyNap mobile application ("App") provided by PolyNap ("we," "us," or "our"). By downloading, accessing, or using our App, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, do not use the App.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. App Description and License</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-4 text-muted-foreground">
                PolyNap is a polyphasic sleep application designed to help you analyze your sleep patterns, receive personalized schedule recommendations, track your adaptation progress, and view detailed statistics about your sleep.
              </p>
              <p className="text-muted-foreground">
                We grant you a limited, non-exclusive, non-transferable, and revocable license to use the App for your personal, non-commercial purposes, subject to these Terms.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Important Medical Disclaimer</h2>
            <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
              <p className="text-red-800 dark:text-red-200">
                <strong>⚠️ Important:</strong> PolyNap is not a medical device and is intended for informational and educational purposes only. The content, schedules, tips, and analytics provided by the App are not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified health provider with any questions you may have regarding a medical condition or your sleep health. Never disregard professional medical advice or delay in seeking it because of something you have read or used in this App.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Data</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                To use certain features of the App, you may be required to provide personal information as described in our Privacy Policy. You are responsible for maintaining the accuracy of this information and for all activities that occur under your account.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Subscriptions</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-4 text-muted-foreground">
                Certain features of the App are available only through a paid subscription ("Subscription").
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Billing</h4>
                  <p className="text-muted-foreground">Payment will be charged to your Apple ID account at the confirmation of purchase.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Auto-Renewal</h4>
                  <p className="text-muted-foreground">Your Subscription will automatically renew for the same duration and price unless you cancel it at least 24 hours before the end of the current subscription period. Your account will be charged for renewal within 24 hours prior to the end of the current period.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Cancellation</h4>
                  <p className="text-muted-foreground">You can manage and cancel your Subscriptions by going to your App Store account settings after purchase. For more information on managing subscriptions, please visit Apple's support page: <a href="https://support.apple.com/en-us/HT202039" className="text-primary hover:underline">https://support.apple.com/en-us/HT202039</a>.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Refunds</h4>
                  <p className="text-muted-foreground">All purchases are final. To the extent permitted by applicable law, subscriptions are non-refundable, and we do not provide refunds or credits for any partial subscription periods or unused content.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Price Changes</h4>
                  <p className="text-muted-foreground">We reserve the right to change our subscription prices. We will provide you with reasonable notice of any such price changes by posting the new prices in the App and/or by sending you an email notification.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-4 text-muted-foreground">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the App for any illegal purpose or in violation of any local, state, national, or international law.</li>
                <li>Reverse-engineer, decompile, disassemble, or attempt to discover the source code of the App.</li>
                <li>Modify, adapt, or create derivative works based on the App.</li>
                <li>Sell, rent, lease, or distribute the App.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                All content, features, and functionality of the App, including but not limited to text, graphics, logos, charts, and software, are the exclusive property of PolyNap and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                We may terminate or suspend your access to the App at any time, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the App will immediately cease.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                The App is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, express or implied, regarding the operation or availability of the App or the information, content, or materials included therein.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, in no event shall PolyNap be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to These Terms</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms within the App or on our website. You are advised to review these Terms periodically for any changes.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                These Terms shall be governed and construed in accordance with the laws of Turkey, without regard to its conflict of law provisions.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Apple Specific Terms</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-4 text-muted-foreground">
                The following terms apply to your use of PolyNap when downloaded from the Apple App Store:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Acknowledgement</h4>
                  <p className="text-muted-foreground">This Agreement is concluded between you and us only, and not with Apple. We, not Apple, are solely responsible for the App and its content.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Scope of License</h4>
                  <p className="text-muted-foreground">Your license to use the App is limited to a non-transferable license to use the App on any Apple-branded products that you own or control and as permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions. The App may be accessed and used by other accounts associated with you via Family Sharing or volume purchasing.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Maintenance and Support</h4>
                  <p className="text-muted-foreground">We are solely responsible for providing any maintenance and support services for the App. Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Warranty and Product Claims</h4>
                  <p className="text-muted-foreground">We are solely responsible for any product warranties. In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the App to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the App.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Intellectual Property Rights</h4>
                  <p className="text-muted-foreground">In the event of any third party claim that the App infringes that third party's intellectual property rights, we, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim.</p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium mb-2">Third Party Beneficiary</h4>
                  <p className="text-muted-foreground">Apple and Apple's subsidiaries are third party beneficiaries of this Agreement, and upon your acceptance of the terms and conditions of this Agreement, Apple will have the right to enforce this Agreement against you as a third party beneficiary thereof.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. User Representations</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-4 text-muted-foreground">
                By using this App, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a "terrorist supporting" country.</li>
                <li>You are not listed on any U.S. Government list of prohibited or restricted parties.</li>
                <li>You will comply with applicable third party terms of agreement when using this App.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Developer:</strong> Salim Taner Çelik
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a 
                    href="mailto:tanercelik2001@gmail.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    tanercelik2001@gmail.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> Reisdere Mahallesi, Çeşme, İzmir, Turkey
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-center p-6 bg-muted/30 rounded-lg border">
            <p className="text-muted-foreground">
              By using PolyNap, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            <a href="/polynap-kullanim-kosullari" className="text-primary hover:underline">
              Türkçe Kullanım Koşulları için tıklayın
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 