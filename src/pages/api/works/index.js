import qs from 'qs';

export default async function handler(req, res) {
  const query = qs.stringify({
    view: 'All',
    pageSize: req.query.limit || 100,
    // sort: [{ field: 'released', direction: 'desc' }],
    offset: req.query.offset
  });

  const data = await fetch(`https://api.airtable.com/v0/app4IuhsxXqAX7tha/Work?${query}`, {
    headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
  }).then((r) => r.json());

  if (!data.error) {
    const works = data.records.map(({ id, createdTime, ...work }) => ({
      id,
      createdTime,
      ...work.fields
    }));

    const _artists = [...new Set(...works.map((work) => work.artists))];

    const artists = _artists.map((art) => ({
      slug: art.toLowerCase().replace(/ /g, '-'),
      name: art,
      total: works.filter((work) => work.artists.includes(art)).length
    }));

    res.status(200).json({ offset: data.offset, works, artists });
  } else {
    res.status(200).json({ error: data.error });
  }
}
