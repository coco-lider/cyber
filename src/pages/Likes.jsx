import { useNavigate } from "react-router-dom";
import { useLikes } from "../context/LikeContext";

const Likes = () => {
  const { likedItems, removeFromLikes } = useLikes();
  const navigate = useNavigate()

  if (likedItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 dark:text-gray-300">
        Hech qanday like qilingan mahsulot yo‘q.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen pt-20">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Liked Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {likedItems.map((item) => (
          <div
            onClick={()=>navigate(`/product/${item.id}`)}
            key={item.id}
            className="bg-white dark:bg-gray-600 p-4 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">${item.price}</p>
            <button
              onClick={() => removeFromLikes(item.id)}
              className="mt-4 w-full text-red-500 border border-red-500 hover:bg-red-100 dark:hover:bg-red-900 rounded py-2 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Likes;
