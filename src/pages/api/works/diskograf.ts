export default async function handler(req, res) {
  const data = await fetch('https://diskograf.com/api/songs/artist/87').then(
    (r) => r.json(),
  );

  res.status(200).json(data);
}
