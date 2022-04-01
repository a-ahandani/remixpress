import { Page as PageDto } from "~/types/wordpressTypes";

export type Page = {
  slug: string;
  title: string;
} & PageDto;
