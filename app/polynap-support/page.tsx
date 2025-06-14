import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support - PolyNap',
  description: 'Support page for PolyNap mobile application',
  robots: 'index, follow',
}

export default function PolyNapSupport() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="bg-card text-card-foreground rounded-lg shadow-lg p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">PolyNap - Support</h1>
          <p className="text-muted-foreground">
            We're here to help you with any questions or issues
          </p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="mb-8 text-muted-foreground">
            If you experience any issues with our app or have questions, we're happy to help you get the most out of your polyphasic sleep journey.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="bg-muted/50 p-6 rounded-lg border">
              <p className="mb-4 text-muted-foreground">
                For the fastest help, please send us an email. We usually try to respond within 24 hours.
              </p>
              <p className="mb-4">
                <strong>Support Email:</strong>{" "}
                <a 
                  href="mailto:tanercelik2001@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  tanercelik2001@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Please describe the issue you're experiencing in detail and include screenshots if possible.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Frequently Asked Questions (FAQ)
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  Q: How do I get a personalized polyphasic sleep schedule?
                </h4>
                <p className="text-muted-foreground">
                  A: Take our comprehensive test in the app. It will analyze your lifestyle, preferences, and needs to recommend the best polyphasic sleep schedule for you. You can always modify or edit this schedule later.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  Q: How do I track my sleep quality properly?
                </h4>
                <p className="text-muted-foreground">
                  A: In the History page, you can rate each sleep session with stars (1-5) and add notes about your sleep quality. This data helps create accurate analytics and track your adaptation progress.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  Q: My notifications aren't working. What should I do?
                </h4>
                <p className="text-muted-foreground">
                  A: Go to Settings > Notifications and check if notifications are enabled. You can also adjust how many minutes before sleep time you want to receive notifications. Make sure your phone's notification permissions are enabled for PolyNap.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  Q: How do I set up sleep alarms?
                </h4>
                <p className="text-muted-foreground">
                  A: Navigate to Settings > Alarms. You can set individual alarms for each sleep block in your schedule. Make sure your phone's alarm permissions are enabled for the app.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  Q: What do the analytics charts show?
                </h4>
                <p className="text-muted-foreground">
                  A: The Analytics page shows comprehensive data including total sleep duration, sleep quality trends, sleep component analysis, your best and worst days, quality distribution, sleep breakdown, and time gained through polyphasic sleep.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  Q: How do streaks work in the app?
                </h4>
                <p className="text-muted-foreground">
                  A: Your streak increases each day you successfully follow your polyphasic sleep schedule. You can see your current streak and longest streak in the Profile page, which helps track your adaptation progress.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  Q: Can I customize the sleep block emojis?
                </h4>
                <p className="text-muted-foreground">
                  A: Yes! In the Profile page, you can customize emojis for your core sleep and nap blocks to make your schedule more personal and visually appealing.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  Q: How do I change the app language or theme?
                </h4>
                <p className="text-muted-foreground">
                  A: Go to Settings where you can switch between Turkish and English languages, and choose between light and dark themes according to your preference.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  Q: My sleep history data seems incorrect. What should I do?
                </h4>
                <p className="text-muted-foreground">
                  A: You can edit your sleep history entries in the History page. If you're still having issues with data accuracy, please contact our support team with specific details about the problem.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4 bg-muted/30 p-4 rounded-r-lg">
                <h4 className="text-lg font-medium mb-2">
                  Q: How do I provide feedback or rate the app?
                </h4>
                <p className="text-muted-foreground">
                  A: You can find "Send Feedback" and "Rate Us" buttons in the Settings page. We appreciate your feedback as it helps us improve the app for everyone.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-center p-6 bg-muted/30 rounded-lg border">
            <p className="text-muted-foreground">
              Still need help? Don't hesitate to reach out to us at{" "}
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
            <a href="/polynap-destek" className="text-primary hover:underline">
              Türkçe Destek sayfası için tıklayın
            </a>
          </p>
        </div>
      </div>
    </div>
  );
} 