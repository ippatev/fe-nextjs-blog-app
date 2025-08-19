import { BlogUiShared } from '@blog/ui-shared';
import { BlogSecondShared } from '@blog/second-shared';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <BlogUiShared></BlogUiShared>
          <BlogSecondShared></BlogSecondShared>
        </div>
      </div>
    </div>
  );
}
