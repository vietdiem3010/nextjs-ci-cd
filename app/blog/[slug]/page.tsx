type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = [
    { slug: 'next-js-is-awesome' },
    { slug: 'static-exports-with-next-js' },
    { slug: 'deploying-next-js' },
  ];

  return posts;
}


export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
