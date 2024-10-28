import {
  useCreateDevsMutation,
  useDeleteDevsMutation,
  useGetAllDevsQuery,
  useUpdateDevsMutation,
} from "../app/api/apiSlice";

const Devs = () => {
  const { data } = useGetAllDevsQuery();
  const [deleteDevs] = useDeleteDevsMutation();
  const [createDevs] = useCreateDevsMutation();
  const [updateDevs] = useUpdateDevsMutation();

  console.log(data);

  const handleDeleteDevs = () => {
    deleteDevs("3");
  };

  const handleCreateDevs = () => {
    updateDevs({
      id: "2800",
      data: { name: "Yasin Arafat Khan Voiya" },
    });
  };

  return (
    <div>
      <button onClick={handleDeleteDevs}>Delete</button>
      <button onClick={handleCreateDevs}>Create</button>
    </div>
  );
};

export default Devs;
