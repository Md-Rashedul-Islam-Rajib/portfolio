"use server";




export const getAllSkills = async () => {
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/skills`,
    const res = await fetch(`https://folio-apis.vercel.app/skills`, {
      method: "GET",
      cache: "no-store",
      next: { tags: ["SKILLS"] },
    });

    if (!res.ok) {
      console.error("Failed to fetch skills:", res.statusText);
      return { data: [] };
    }

    const data = await res.json();
    return {
      data: Array.isArray(data?.data) ? data.data : [],
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error("Fetch error:", err.message);
    }
    return { data: [] };
  }
};


export const getAllProjects = async () => {
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/projects`,
    const res = await fetch(`https://folio-apis.vercel.app/projects`, {
      method: "GET",
      cache: "no-store",
      next: {
        tags: ["PROJECTS"],
      },
    });

    if (!res.ok) {
      console.error("Failed to fetch projects:", res.statusText);
      return { data: [] };
    }

    const data = await res.json();
    return {
      data: Array.isArray(data?.data) ? data.data : [],
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error("getAllProjects error:", err.message);
    }
    return { data: [] };
  }
};

export const getAllBlogs = async () => {
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/blogs`,
    const res = await fetch(`https://folio-apis.vercel.app/blogs`, {
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
