import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <widgetbot
  server="883967767840182362"
  channel="883967771258552372"
  width="100%"
  height="500">
</widgetbot>
<script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>
      </Head>
    </div>
  )
}
