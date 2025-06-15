
export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/blogs`, {
      method: "GET",
      cache: "no-store",
      next: {
        tags: ["BLOGS"],
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.statusText);
      return { data: [] };
    }

    const data = await res.json();
    return {
      data: Array.isArray(data?.data) ? data.data : [],
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error("getAllBlogs error:", err.message);
    }
    return { data: [] };
  }
};

export const getSingleBlog = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/blogs/${id}`, {
      method: "GET",
      cache: "no-store",
      next: {
        tags: ["BLOGS"],
      },
    });

    if (!res.ok) {
      console.error(`Failed to fetch blog ${id}:`, res.statusText);
      return null;
    }

    const data = await res.json();
    return data ?? null;
  } catch (err) {
    if (err instanceof Error) {
      console.error("getSingleBlog error:", err.message);
    }
    return null;
  }
};
