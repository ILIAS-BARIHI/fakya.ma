import { setRequestLocale } from 'next-intl/server';
import Home3Main from '@/components/layout/main/Home3Main';
import PageWrapper from '@/components/shared/wrappers/PageWrapper';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageWrapper headerStyle={5} footerBg="light">
      <Home3Main />
    </PageWrapper>
  );
}
