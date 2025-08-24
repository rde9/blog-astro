import { getCollection } from "astro:content";

export async function getAllPosts() {
  const posts = await getCollection("blog");
  return posts.sort((a, b) => {
    const aTime = new Date(a.data.date).getTime();
    const bTime = new Date(b.data.date).getTime();
    return bTime - aTime;
  });
}

export async function getPostsByTag(tag: string) {
  const posts = await getAllPosts();
  return posts.filter((post) => post.data.tags?.includes(tag));
}


