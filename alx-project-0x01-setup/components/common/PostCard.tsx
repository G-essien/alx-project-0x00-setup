const PostCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
      <div className="p-4 border rounded shadow">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  
  export default PostCard;
  