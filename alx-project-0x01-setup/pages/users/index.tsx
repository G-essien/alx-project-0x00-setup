import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      <h2 className="text-4xl font-semibold text-center mt-8">Users</h2>
      {/* Render list of users here */}
    </div>
  );
}

export default UsersPage;
