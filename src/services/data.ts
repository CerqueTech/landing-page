import { getEntry } from "astro:content";

const getData = async (url: string) => {
  const data = await getEntry("docs", url);
  return data?.data;
};
export default getData;
  