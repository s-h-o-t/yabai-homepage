import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  // TODO: handle 404
  const doc = await import(`../${params.slug}.md`);
  const content = doc.default;
  return {
    content,
  };
};
