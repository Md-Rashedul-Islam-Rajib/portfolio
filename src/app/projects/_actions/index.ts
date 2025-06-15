export const getAllProjects = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER!}/projects`, {
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
export const getSingleProject = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER!}/projects/${id}`,
      {
        method: "GET",
        cache: "no-store",
        next: {
          tags: ["PROJECTS"],
        },
      }
    );

    if (!res.ok) {
      console.error(`Failed to fetch project ${id}:`, res.statusText);
      return null;
    }

    const data = await res.json();
    return data ?? null;
  } catch (err) {
    if (err instanceof Error) {
      console.error("getSingleProject error:", err.message);
    }
    return null;
  }
};