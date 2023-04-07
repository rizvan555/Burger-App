import Head from 'next/head';

const Comments = ({ comments }) => {
  return (
    <>
      <Head>
        <title>Fat Burgers | My Burger Page</title>
        <meta name="title" content="Fat Burgers" />
      </Head>

      <div>
        <h1>Comments</h1>
        <div className="comments">
          {comments.slice(0, 100).map((comment) => {
            return (
              <div key={comment.id}>
                {comment.id}
                {`. ${comment.body.charAt(0).toUpperCase()}${comment.body.slice(
                  1,
                  90
                )}...`}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

//Sadece bu asagidaki funksiyani yazmaqla "datadan" 0-dan 100-e qeder olan butun kommentleri cekirik.
export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments');
  const data = await response.json();
  return {
    props: {
      comments: data.slice(0, 100),
    },
  };
}

export default Comments;
