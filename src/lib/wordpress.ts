import type {
  WordPressPost,
  WordPressNews,
  WordPressProgramme,
  WordPressPage,
} from '@/types/wordpress';

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

function isWordPressConfigured(): boolean {
  return !!WORDPRESS_API_URL;
}

async function gqlRequest<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(WORDPRESS_API_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error(`GraphQL error: ${res.status}`);
  const json = await res.json();
  if (json.errors?.length) throw new Error(json.errors[0].message);
  return json.data as T;
}

const IMAGE_FRAGMENT = `
  fragment ImageFields on MediaItem {
    id
    sourceUrl
    altText
    mediaDetails {
      width
      height
    }
  }
`;

const GET_POSTS = `
  ${IMAGE_FRAGMENT}
  query GetPosts($first: Int = 10, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        content
        date
        modified
        featuredImage {
          node {
            ...ImageFields
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
        author {
          node {
            id
            name
            slug
            avatar {
              url
            }
          }
        }
      }
    }
  }
`;

export async function getPosts(first = 10, after?: string) {
  if (!isWordPressConfigured()) {
    return { pageInfo: { hasNextPage: false, endCursor: '' }, nodes: [] };
  }
  try {
    const data = await gqlRequest<{
      posts: { pageInfo: { hasNextPage: boolean; endCursor: string }; nodes: WordPressPost[] };
    }>(GET_POSTS, { first, after });
    return data.posts;
  } catch (e) {
    console.error('getPosts failed:', e);
    return { pageInfo: { hasNextPage: false, endCursor: '' }, nodes: [] };
  }
}

const GET_POST_SLUGS = `
  query GetPostSlugs($first: Int = 100) {
    posts(first: $first) {
      nodes {
        slug
      }
    }
  }
`;

export async function getPostSlugs(): Promise<string[]> {
  if (!isWordPressConfigured()) return [];
  try {
    const data = await gqlRequest<{
      posts: { nodes: { slug: string }[] };
    }>(GET_POST_SLUGS);
    return data.posts.nodes.map((n) => n.slug);
  } catch (e) {
    console.error('getPostSlugs failed:', e);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  if (!isWordPressConfigured()) return null;
  const query = `
    ${IMAGE_FRAGMENT}
    query GetPostBySlug($slug: String!) {
      postBy(slug: $slug) {
        id
        title
        slug
        excerpt
        content
        date
        modified
        featuredImage {
          node {
            ...ImageFields
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        tags {
          nodes {
            id
            name
            slug
          }
        }
        author {
          node {
            id
            name
            slug
            avatar {
              url
            }
          }
        }
      }
    }
  `;
  try {
    const data = await gqlRequest<{ postBy: WordPressPost | null }>(query, { slug });
    return data.postBy;
  } catch (e) {
    console.error('getPostBySlug failed:', e);
    return null;
  }
}

const GET_NEWS = `
  ${IMAGE_FRAGMENT}
  query GetNews($first: Int = 10, $after: String) {
    newsItems(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        content
        date
        modified
        featuredImage {
          node {
            ...ImageFields
          }
        }
      }
    }
  }
`;

export async function getNews(first = 10, after?: string) {
  if (!isWordPressConfigured()) {
    return { pageInfo: { hasNextPage: false, endCursor: '' }, nodes: [] };
  }
  try {
    const data = await gqlRequest<{
      newsItems: { pageInfo: { hasNextPage: boolean; endCursor: string }; nodes: WordPressNews[] };
    }>(GET_NEWS, { first, after });
    return data.newsItems;
  } catch (e) {
    console.error('getNews failed:', e);
    return { pageInfo: { hasNextPage: false, endCursor: '' }, nodes: [] };
  }
}

export async function getNewsBySlug(slug: string) {
  if (!isWordPressConfigured()) return null;
  const query = `
    ${IMAGE_FRAGMENT}
    query GetNewsBySlug($slug: String!) {
      newsItemBy(slug: $slug) {
        id
        title
        slug
        excerpt
        content
        date
        modified
        featuredImage {
          node {
            ...ImageFields
          }
        }
      }
    }
  `;
  try {
    const data = await gqlRequest<{ newsItemBy: WordPressNews | null }>(query, { slug });
    return data.newsItemBy;
  } catch (e) {
    console.error('getNewsBySlug failed:', e);
    return null;
  }
}

export async function getNewsSlugs() {
  if (!isWordPressConfigured()) return [];
  const query = `
    query GetNewsSlugs {
      newsItems(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;
  try {
    const data = await gqlRequest<{ newsItems: { nodes: { slug: string }[] } }>(query);
    return data.newsItems.nodes.map((node) => node.slug);
  } catch (e) {
    console.error('getNewsSlugs failed:', e);
    return [];
  }
}

const GET_PROGRAMMES = `
  ${IMAGE_FRAGMENT}
  query GetProgrammes($first: Int = 50) {
    programmes(first: $first) {
      nodes {
        id
        title
        slug
        content
        modified
        programmeDetails {
          school
          level
          duration
          fee
        }
        featuredImage {
          node {
            ...ImageFields
          }
        }
      }
    }
  }
`;

export async function getProgrammes(first = 50) {
  if (!isWordPressConfigured()) return [];
  try {
    const data = await gqlRequest<{
      programmes: { nodes: WordPressProgramme[] };
    }>(GET_PROGRAMMES, { first });
    return data.programmes.nodes;
  } catch (e) {
    console.error('getProgrammes failed:', e);
    return [];
  }
}

export async function getProgrammeSlugs() {
  if (!isWordPressConfigured()) return [];
  const query = `
    query GetProgrammeSlugs($first: Int = 50) {
      programmes(first: $first) {
        nodes {
          slug
        }
      }
    }
  `;
  try {
    const data = await gqlRequest<{
      programmes: { nodes: { slug: string }[] };
    }>(query);
    return data.programmes.nodes.map((n) => n.slug);
  } catch (e) {
    console.error('getProgrammeSlugs failed:', e);
    return [];
  }
}

export async function getProgrammeBySlug(slug: string) {
  if (!isWordPressConfigured()) return null;
  const query = `
    ${IMAGE_FRAGMENT}
    query GetProgrammeBySlug($slug: String!) {
      programmeBy(slug: $slug) {
        id
        title
        slug
        content
        modified
        programmeDetails {
          school
          level
          duration
          fee
        }
        programmeFields {
          eligibility
          overview
          curriculum
          careerProspects
          fee
          level
        }
        featuredImage {
          node {
            ...ImageFields
          }
        }
      }
    }
  `;
  try {
    const data = await gqlRequest<{ programmeBy: WordPressProgramme | null }>(query, { slug });
    return data.programmeBy;
  } catch (e) {
    console.error('getProgrammeBySlug failed:', e);
    return null;
  }
}

export async function getPageBySlug(slug: string) {
  if (!isWordPressConfigured()) return null;
  const query = `
    ${IMAGE_FRAGMENT}
    query GetPageBySlug($slug: String!) {
      pageBy(uri: $slug) {
        id
        title
        slug
        content
        modified
        featuredImage {
          node {
            ...ImageFields
          }
        }
      }
    }
  `;
  try {
    const data = await gqlRequest<{ pageBy: WordPressPage | null }>(query, { slug });
    return data.pageBy;
  } catch (e) {
    console.error('getPageBySlug failed:', e);
    return null;
  }
}

export async function getPageSlugs() {
  if (!isWordPressConfigured()) return [];
  const query = `
    query GetPageSlugs {
      pages(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;
  try {
    const data = await gqlRequest<{ pages: { nodes: { slug: string }[] } }>(query);
    return data.pages.nodes.map((node) => node.slug);
  } catch (e) {
    console.error('getPageSlugs failed:', e);
    return [];
  }
}
