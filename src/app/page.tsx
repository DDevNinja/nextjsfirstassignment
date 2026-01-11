import CopyBanner from "./Components/Copybanner";

export default function HomePage() {
  return (
    <main>
      <CopyBanner classList={["content-pattern", "bg-blue"]} />
    </main>
  );
}
