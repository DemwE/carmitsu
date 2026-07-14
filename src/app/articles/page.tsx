import Navigation from '@/components/navbar';
import Footer from '@/components/footer';
import ArticlesList from '@/components/articles/articlesList';
import { getArticles } from '@/utils/articles';
import { Metadata } from 'next';

export const revalidate = 600;

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.BASE_URL?.replace(/\/$/, '') || 'https://carmitsu.pl';

  return {
    title: 'Artykuły',
    description: 'Artykuły i porady motoryzacyjne od CarMitsu',
    alternates: {
      canonical: '/articles',
    },
    openGraph: {
      title: 'Artykuły | CarMitsu',
      description: 'Artykuły i porady motoryzacyjne od CarMitsu',
      url: `${baseUrl}/articles`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Artykuły | CarMitsu',
      description: 'Artykuły i porady motoryzacyjne od CarMitsu',
    },
  };
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <main>
      <Navigation />
      <ArticlesList articles={articles} />
      <Footer />
    </main>
  );
}
