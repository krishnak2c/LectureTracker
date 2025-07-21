// import Meteors from "@/components/Metor";
import WelcomeBox from "@/components/WelcomeBox";
import SubjectBox from "@/components/SubjectBox";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/krishnak2c/LectureTracker"
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <div className="container border-0 flex flex-col items-center justify-center gap-3 mt-6 md:mt-10 w-full">
      <WelcomeBox />
      <SubjectBox />
      {/* <Meteors stars={stars} /> */}
    </div>
  );
}
