import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <h2 className="text-4xl font-semibold text-center mt-8">Posts</h2>
      {/* Render list of posts here */}
    </div>
  );
}

export default PostsPage;
