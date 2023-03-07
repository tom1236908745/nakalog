import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getDetail, getList } from '../../../features/libs/microcms';
import articleStyle from '@/styles/article/articleStyle.module.css';
import { adjustDate } from '@/features/utils/adjustDate';
// import Map from '@/components/Elements/Utils/GoogleMap';
export default async function TravelDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }
  return (
    <div style={{ marginTop: '13rem' }}>
      <div className={articleStyle.googleMapStyle}>
        <p>here!</p>
        // TODO: 復活させる
        {/* <iframe
          width="300"
          height="200"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAP_API}&&q=${post.googleMapKeyWord}`}
          allowFullScreen
        ></iframe> */}
      </div>

      <article className={articleStyle.articleWrapper}>
        <h2 style={{ fontSize: '2.7rem', marginBottom: '2rem' }}>
          {post.title}
        </h2>
        <p style={{ fontSize: '1rem', color: '#707070' }}>
          {adjustDate(post.publishedAt)}
        </p>
        {/* <div >{parse(post.body)}</div> */}
        <div
          className={articleStyle.bodyWrapper}
          dangerouslySetInnerHTML={{
            __html: `${post.body}`,
          }}
        />
      </article>
    </div>
  );
}
