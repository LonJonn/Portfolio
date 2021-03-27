import remark from "remark";
import html from "remark-html";

export async function mdToMarkup(content: string) {
  const markup = await remark().use(html).process(content);
  return markup.toString();
}
