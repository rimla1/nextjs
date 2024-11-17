const User = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return <div>Details for user with id: {id}</div>;
};

export default User;
