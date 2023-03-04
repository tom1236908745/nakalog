import React from 'react';
import { GetBlogs } from 'components/Elements/Blogs/Travel/GetBlog';
import PlaneLogo from '../../components/Elements/SVG/Travel/PlaneLogo';
import { Suspense } from 'react';
const Travel = async (): Promise<JSX.Element> => {
  return (
    <div style={{ marginTop: '10rem' }}>
      <PlaneLogo />
      <Suspense fallback={<p className="mt-4">Loading...</p>}>
        <GetBlogs />
      </Suspense>
    </div>
  );
};
export default Travel;
