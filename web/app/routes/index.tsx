export default function Page() {
  return (
    <div>
      {Array.from({ length: 100 }, (_, index) => (
        <div key={index}>12312</div>
      ))}
    </div>
  );
}
