export default function SignUp() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/todo-background.jpg')" }}
    >
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="p-4 text-xl font-bold">Sign up!</p>
        <form
          //onSubmit={}
          method="post"
          className="flex flex-col max-w-sm gap-4"
        >
          {/* Username */}
          <label htmlFor="username">Username</label>
          <input
            className="text-black"
            type="text"
            name="username"
            //value={customUser.username}
            //onChange={handleChange}
          />
          {/* Password */}
          <label htmlFor="password">Password</label>
          <input
            className="text-black"
            type="password"
            name="password"
            //value={customUser.password}
            //onChange={handleChange}
          />

          <button
            className="bg-blue-600 p-4 rounded-md hover:bg-blue-500"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
