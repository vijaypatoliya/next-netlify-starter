import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test Pushwoosh Notification!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <script type="text/javascript" src="https://cdn.pushwoosh.com/webpush/v3/pushwoosh-web-notifications.js" async></script>
        <script type="text/javascript" src='/pushwoosh.js'></script>
      </Head>

      <main>
        <Header title="Welcome to my Pushwoosh app!" />
        <p className="description">
          Test Pushwoosh Notification.
        </p>
        <p className="description">
          If you not subscribe then please click on below icon.
        </p>
      </main>

      <Footer />
    </div>
  )
}
