import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  // TODO: handle 404
  console.log(`../${params.slug}.md`);
  const doc = await import(`../${params.slug}.md`);
  const content = doc.default;
  return {
    content,
  };
};
