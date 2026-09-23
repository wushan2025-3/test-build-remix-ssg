export function meta() {
  return [
    { title: "Remix (SSG)" },
    { name: "description", content: "Static site generated with Remix" },
  ];
}

export default function Index() {
  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Remix (SSG)</h1>
      <p>Hello from a statically pre-rendered Remix project.</p>
    </div>
  );
}
