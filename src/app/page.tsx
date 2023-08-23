export default function Home() {
  return (
    <div>
      <section >
        <h1>Section Content</h1>
        <div>{JSON.stringify(process.env.PORT)}</div>
      </section>
    </div>
  );
}
