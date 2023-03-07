import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import { getDetail, getList } from '../../../features/libs/microcms';
import articleStyle from '@/styles/article/articleStyle.module.css';
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
  const adjustData = (data: string | undefined) => {
    if (!data) return;
    data = data.substring(0, data.indexOf('T'));
    let time: string[] = data.split('-');
    if (time[1][0] === '0') time[1] = time[1][1];
    if (time[2][0] === '0') time[2] = time[2][1];
    console.log('time ' + time);
    data = time[0] + '/' + time[1] + '/' + time[2];
    return data;
  };
  return (
    <div style={{ marginTop: '13rem' }}>
      <iframe
        width="450"
        height="250"
        frameBorder="0"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAP_API}&&q=新宿御苑`}
        allowFullScreen
      ></iframe>
      <article className={articleStyle.articleWrapper}>
        <h2 style={{ fontSize: '2.7rem', marginBottom: '2rem' }}>
          {post.title}
        </h2>
        <p style={{ fontSize: '1rem', color: '#707070' }}>
          {adjustData(post.publishedAt)}
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
