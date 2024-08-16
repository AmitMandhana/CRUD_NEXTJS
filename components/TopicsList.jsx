// Import necessary modules and components
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

// Function to fetch topics from the API
const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    const data = await res.json();
    return { topics: data.topics || [] }; // Ensure topics is an array
  } catch (error) {
    console.log("Error loading topics: ", error);
    return { topics: [] }; // Return an empty array on error
  }
};

// TopicsList component to display the list of topics
export default async function TopicsList() {
  const { topics = [] } = await getTopics(); // Provide a default empty array

  if (topics.length === 0) {
    return <div>No topics available.</div>; // Handle the case where topics are empty
  }

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
