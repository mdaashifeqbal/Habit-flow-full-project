const UserProfile = () => {
  return (
    <div className="max-w-6xl mx-auto py-[20vh]">
      <h2 className="text-4xl font-semibold py-3">User Profile</h2>
       <div className="h-[25vh] w-full bg-white rounded-lg flex justify-center items-center gap-5">
             <div className="h-30 w-30 rounded-full bg-red-500 overflow-hidden">
                  <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
             </div>
             <div>
              <h2 className="text-xl font-bold">Alex John</h2>
              <p>alex@gmail.com</p>
             </div>
       </div>
    </div>
  );
};

export default UserProfile;
