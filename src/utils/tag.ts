import { getCollection } from "astro:content";

export async function getAllTags() {
  const posts = await getCollection("blog");
  const tags = posts.flatMap((post) => post.data.tags ?? []);
  return [...new Set(tags)];
}

export async function getAllTagsWithCount() {
  const posts = await getCollection("blog");
  const tags = posts.flatMap((post) => post.data.tags ?? []);
  const tagCountMap = new Map<string, number>();
  tags.forEach(tag => {
    tagCountMap.set(tag, (tagCountMap.get(tag) || 0) + 1);
  });
  const tagCountArray = Array.from(tagCountMap.entries());
  return tagCountArray;
}