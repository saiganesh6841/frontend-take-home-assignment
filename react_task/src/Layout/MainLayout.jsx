import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <h1
            className="text-xl font-semibold text-gray-900"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Shopify E Cart
          </h1>

          <button
            onClick={() => navigate("/viewedItems")}
            className="text-sm font-medium p-3 rounded-xl text-gray-600 bg-red-500 hover:text-gray-900 hover:text-md transition cursor-pointer"
          >
            Viewed Items
          </button>
        </div>
      </nav>

      {/* now all pages will come in below*/}
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
