import HomeMain from "@/components/home/HomeMain";
import LastIssues from "@/components/home/LastIssues";
import SearchAndFilter from "@/components/home/SearchAndFilter";
import ThisWeek from "@/components/home/ThisWeek";
import Link from "next/link";

export default function Home() {

  return (
    <div className="">
      <HomeMain />
      <ThisWeek />
      <LastIssues />
      <SearchAndFilter />
    </div>
  );
}
