import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from 'microcms-js-sdk';
//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  body: string;
  googleMapKeyWord?: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  console.log(
    'MICROCMS_SERVICE_DOMAIN  ' + process.env.MICROCMS_SERVICE_DOMAIN,
  );

  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});
// ブログ一覧を取得
export const getList = async (
  endPointName: string,
  queries?: MicroCMSQueries,
) => {
  const listData = await client.get<BlogResponse>({
    endpoint: endPointName,
    queries,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  endPointName: string,
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await client.get<Blog>({
    endpoint: endPointName,
    contentId,
    queries,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return detailData;
};
