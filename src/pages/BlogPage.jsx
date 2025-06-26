import React, { useEffect } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Yangi Texnologiyalar",
    date: "2025-06-20",
    summary: "Sun'iy intellekt va Web 4.0 haqida eng so'nggi yangiliklar bilan tanishing.",
    image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Frontendning Kelajagi",
    date: "2025-06-18",
    summary: "React, Vue va Svelte o‘rtasidagi farqlar va imkoniyatlar.",
    image: "https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=80&w=402&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Dark Mode UX Tadqiqoti",
    date: "2025-06-15",
    summary: "Foydalanuvchilar dark mode'ni nega yaxshi ko‘rishadi? Statistika bilan.",
    image: "https://media.istockphoto.com/id/1415458915/photo/3d-web-pages-and-user-interfaces-3d-illustration-for-business-or-develop.webp?a=1&b=1&s=612x612&w=0&k=20&c=tgTCLSO8w9ixMcqo6LaZU9uU4ZFzf2emfh0Vc9fO704=",
  },
];




export default function BlogPage() {
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen container mx-auto pt-20 bg-white dark:bg-gray-900 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Blog Maqolalar
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {post.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                {post.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}