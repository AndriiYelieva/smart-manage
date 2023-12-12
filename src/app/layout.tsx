;import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from '@/app/components/BootstrapClient';
import { TopMenu } from '@/app/components/TopMenu';
import { NavigationMenu } from '@/app/components/NavigatorMenu';
import ReduxProvider from './ReduxProvider';
import style from './page.module.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DzenCode test task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <TopMenu />
          <main className={style.page}>
            <NavigationMenu />
            {children}
          </main>
          <BootstrapClient />
        </ReduxProvider>
      </body>
    </html>
  )
}