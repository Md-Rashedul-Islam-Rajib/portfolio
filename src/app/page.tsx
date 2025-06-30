import Banner from "./_components/Banner";
import SkillTabs from "./_components/Skills";
import { getAllBlogs, getAllProjects, getAllSkills } from "./_actions";
import Raper from "./_components/Raper";
import FeatProjects from "./_components/FeatProjects";
import BlogPreviewSection from "./_components/BlogPreview";
import Education from "./_components/Education";
import Footer from "./_components/Footer";

export default async function HomePage() {
  const { data: skills } = await getAllSkills();
  console.log("Skills:", skills);
  const { data: projects } = await getAllProjects();
  const { data: blogs } = await getAllBlogs();

  return (
    <Raper>
      <div className="relative">
        <div className="space-y-20">
          <div className="mt-20">
            <Banner />
          </div>
          <div>
            <SkillTabs skills={skills} />
          </div>
          <div>
            
            <FeatProjects projects={projects} />
          </div>
          <div>
            
            <BlogPreviewSection blogs={blogs} />
          </div>
          <div>
            
            <Education />
          </div>
          <div> <Footer /> </div>
        </div>
      </div>
    </Raper>
  );
}
